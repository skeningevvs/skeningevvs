import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getVisitorStats } from "@/lib/visitors";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Besökare | Skeninge VVS AB",
  robots: { index: false, follow: false },
};

const numberFormat = new Intl.NumberFormat("sv-SE");

export default async function BesokarePage() {
  const stats = await getVisitorStats();

  const tiles = stats
    ? [
        { label: "Idag", value: stats.today },
        { label: "Denna vecka", value: stats.week },
        { label: "Denna månad", value: stats.month },
        { label: "I år", value: stats.year },
      ]
    : [];

  const updated = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Stockholm",
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date());

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Till startsidan
        </Link>

        <h1 className="font-heading mt-6 text-3xl font-extrabold tracking-tight md:text-4xl">
          Besökare på hemsidan
        </h1>
        <p className="mt-2 text-muted-foreground">
          Unika besökare på startsidan. En person räknas en gång per dag.
        </p>

        {stats ? (
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {tiles.map((tile) => (
              <div
                key={tile.label}
                className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm"
              >
                <p className="text-sm font-medium text-muted-foreground">
                  {tile.label}
                </p>
                <p className="font-heading mt-2 text-3xl font-extrabold text-primary tabular-nums md:text-4xl">
                  {numberFormat.format(tile.value)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-xl border border-border bg-card p-5 text-muted-foreground">
            Besöksräknaren är inte ansluten ännu.
          </p>
        )}

        <p className="mt-6 text-xs text-muted-foreground">
          Uppdaterad {updated}. Veckan räknas från måndag.
        </p>
      </div>
    </main>
  );
}
