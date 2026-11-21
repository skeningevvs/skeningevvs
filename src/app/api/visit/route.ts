import { createHash } from "node:crypto";
import { redis, todayKey } from "@/lib/visitors";

const BOT_PATTERN =
  /bot|crawl|spider|slurp|preview|facebookexternalhit|headless|lighthouse|pingdom|uptime/i;

const TWO_DAYS = 60 * 60 * 48;

export async function POST(request: Request) {
  if (!redis) return new Response(null, { status: 204 });

  const userAgent = request.headers.get("user-agent") ?? "";
  if (!userAgent || BOT_PATTERN.test(userAgent)) {
    return new Response(null, { status: 204 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "okänd";
  const day = todayKey();

  // Anonymiserad hash – IP-adressen sparas aldrig, och hashen byts varje dag.
  const visitorId = createHash("sha256")
    .update(`${day}|${ip}|${userAgent}`)
    .digest("hex")
    .slice(0, 32);

  try {
    const seenKey = `visitors:seen:${day}`;
    const isNew = await redis.sadd(seenKey, visitorId);
    if (isNew === 1) {
      await Promise.all([
        redis.incr(`visitors:count:${day}`),
        redis.expire(seenKey, TWO_DAYS),
      ]);
    }
  } catch (error) {
    console.error("Besöksräknaren kunde inte spara besöket", error);
  }

  return new Response(null, { status: 204 });
}
