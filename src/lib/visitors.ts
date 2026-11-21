import { Redis } from "@upstash/redis";

// Besöksräknare: unika besökare per dag, lagrat i Upstash Redis.
// Nycklar:
//   visitors:seen:YYYY-MM-DD   – mängd med anonymiserade hashar (raderas efter 2 dygn)
//   visitors:count:YYYY-MM-DD  – antal unika besökare den dagen (sparas)

const TIME_ZONE = "Europe/Stockholm";

// Vercels Upstash-integration sätter KV_REST_API_*, Upstash direkt sätter UPSTASH_REDIS_REST_*.
const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = url && token ? new Redis({ url, token }) : null;

/** Dagens datum i svensk tid som "YYYY-MM-DD". */
export function todayKey(date = new Date()): string {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/** Alla datum (YYYY-MM-DD) från och med `from` till och med `to`. */
function daysBetween(from: Date, to: Date): string[] {
  const days: string[] = [];
  for (let d = new Date(from); d <= to; d.setUTCDate(d.getUTCDate() + 1)) {
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

export type VisitorStats = {
  today: number;
  week: number;
  month: number;
  year: number;
};

export async function getVisitorStats(): Promise<VisitorStats | null> {
  if (!redis) return null;

  // Räkna med svenska kalenderdatum som UTC-midnatt för enkel datumaritmetik.
  const [y, m, d] = todayKey().split("-").map(Number);
  const today = new Date(Date.UTC(y, m - 1, d));
  const yearStart = new Date(Date.UTC(y, 0, 1));
  const monthStart = new Date(Date.UTC(y, m - 1, 1));
  const weekStart = new Date(today);
  weekStart.setUTCDate(today.getUTCDate() - ((today.getUTCDay() + 6) % 7)); // måndag

  const days = daysBetween(yearStart, today);
  const counts = await redis.mget<(number | null)[]>(
    ...days.map((day) => `visitors:count:${day}`),
  );

  const sumFrom = (start: Date) => {
    const startKey = start.toISOString().slice(0, 10);
    return days.reduce(
      (sum, day, i) => (day >= startKey ? sum + Number(counts[i] ?? 0) : sum),
      0,
    );
  };

  return {
    today: Number(counts[counts.length - 1] ?? 0),
    week: sumFrom(weekStart),
    month: sumFrom(monthStart),
    year: sumFrom(yearStart),
  };
}
