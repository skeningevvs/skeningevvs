# AGENTS.md — instruktioner för AI-agenter

Webbplats för **Skeninge VVS AB**, ett lokalt VVS-företag i Skänninge (Östergötland). En enda sida (one-pager) som ska ge kunder förtroende och få dem att ringa. Live: https://skeningevvs.se (hostas på Vercel).

## Dokumentation — läs innan du skriver kod

Din träningsdata kan vara inaktuell. Slå upp API:er i officiell dokumentation i stället för att gissa:

- **Next.js:** https://nextjs.org/docs/llms-full.txt
- **shadcn/ui:** https://ui.shadcn.com/llms.txt

Projektet kör **Next.js 16** (App Router) och **React 19**. Använd inte Pages Router-mönster (`pages/`, `getServerSideProps`, `next/head`, `head.tsx`). Följ deprecation-varningar.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict)
- Tailwind CSS v4 — konfiguration och tema-tokens ligger i `src/app/globals.css` (det finns ingen `tailwind.config`)
- shadcn/ui (stil `new-york`, ikoner `lucide`) i `src/components/ui/`
- `next-themes` för ljust/mörkt tema
- Ikoner: `lucide-react` i första hand, `react-icons` bara när lucide saknar en passande ikon

## Kommandon

```sh
npm run dev     # utvecklingsserver på http://localhost:3000
npm run build   # produktionsbygge — måste gå igenom innan du säger att något är klart
npm run lint    # ESLint
```

## Struktur

```
src/app/layout.tsx     # rot-layout, typsnitt, ThemeProvider, global metadata
src/app/page.tsx       # startsidan: sätter ihop sektionerna + JSON-LD
src/app/globals.css    # Tailwind v4 + färgtokens för ljust/mörkt tema
src/components/        # sektioner: navbar, hero, about, services, contact, cta-banner, footer
src/components/ui/     # shadcn-komponenter (genererade)
src/lib/utils.ts       # cn()-hjälpare
public/images/         # bilder
```

Importalias: `@/*` → `src/*`.

## Så här ska du jobba

- **Gör små, avgränsade ändringar.** Ändra bara det som uppgiften kräver. Ingen omstrukturering eller "förbättringar" på köpet utan att fråga.
- **Mobilen först.** De flesta besökare kommer från mobilen. Kontrollera varje UI-ändring i både mobil- och desktopvy. Flera sektioner har separata mobil-/desktop-layouter (`md:hidden` / `hidden md:block`) och negativa marginaler som överlappar varandra, så ändra det ena utan att glömma det andra.
- **Ljust och mörkt tema.** Använd tema-tokens (`bg-background`, `text-foreground`, `text-primary`, `bg-card`, `text-muted-foreground`, `border-border` …) i stället för hårdkodade färger, och kontrollera båda temana.
- **Server Components som standard.** Lägg bara till `"use client"` när komponenten behöver state, effekter eller webbläsar-API:er.
- **shadcn/ui:** Lägg till nya komponenter med `npx shadcn@latest add <komponent>` i stället för att skriva dem för hand. Generera inte om befintliga filer i `src/components/ui/` utan att fråga, eftersom de kan vara anpassade.
- **Bilder:** Använd alltid `next/image` med `width`/`height` (eller `fill`). Bara bilden som syns först (hero) får ha `priority`. Nya bilder bör vara komprimerade (WebP/AVIF eller optimerad PNG/JPG).
- **Verifiera innan du säger att du är klar:** kör `npm run build` och `npm run lint`. Om något misslyckas, säg det och visa felet.
- **Git:** Committa eller pusha bara när användaren ber om det.

## Språk och ton

- All text som syns på sidan är på **svenska**, med korrekt stavning och å, ä, ö.
- Tonen är personlig och jordnära, som ett familjeföretag. Slogan: "Små i storlek – stora på service."
- Kodkommentarer får vara på svenska.
- Ortnamnet stavas **Skänninge**, men företagsnamnet är **Skeninge VVS AB**. Blanda inte ihop dem.

## SEO-regler

Sidan ska ranka på lokala sökningar som "rörmokare Skänninge", "VVS Mjölby" och "badrumsrenovering Vadstena".

- **Metadata** sätts bara via Next.js Metadata API (`export const metadata` / `generateMetadata`), aldrig med manuella `<meta>`-taggar eller `head.tsx`.
- **Huvuddomän:** `https://skeningevvs.se`. Den ska användas i `metadataBase`, canonical (`alternates.canonical`), Open Graph-URL:er, sitemap och JSON-LD. Använd aldrig `skeningevvsab.pages.dev` eller `www.`-varianten.
- **Titel** ska vara högst cirka 60 tecken, och **description** cirka 150–160 tecken. Båda ska nämna ort + tjänst.
- **Exakt en `<h1>` per sida.** Rendera inte en h1 för mobil och en annan för desktop. Dela upp layouten med CSS men behåll en rubrik.
- **Alt-texter** ska beskriva bilden på svenska och gärna nämna ort/tjänst, till exempel "Skeninge VVS servicebil i Skänninge", inte bara "Skeninge VVS".
- **JSON-LD** (`@type: "Plumber"`) ska alltid innehålla riktiga företagsuppgifter (se nedan), aldrig platshållare.
- **Sitemap och robots** genereras med `src/app/sitemap.ts` och `src/app/robots.ts` när de finns, inte som statiska filer i `public/`.
- `keywords`-metataggen påverkar inte Google. Lägg ingen tid på den.

## Företagsuppgifter (källa till sanning)

Använd exakt dessa uppgifter. Hitta aldrig på adresser, nummer eller påståenden.

- **Namn:** Skeninge VVS AB, grundat 1986 i Skänninge
- **Besöksadress:** Fabriksgatan 6, 596 33 Skänninge
- **Postadress:** Folkungagatan 35 E, 595 32 Mjölby
- **Koordinater:** 58.386333, 15.085444
- **E-post:** skeningevvsab@msn.com
- **Telefon:** Bosse Engelke 0708-417290, Kristian Engelke 0735-358075
- **Område:** Skänninge, Mjölby, Vadstena, Motala, Linköping, Boxholm, Tranås, Vikingstad, Mantorp, Väderstad med omnejd
- **Tjänster:** rörinstallationer, värmesystem (värmepumpar, radiatorer, golvvärme), badrumsrenovering, köksinstallationer, service & underhåll, installation av vitvaror, energisparande lösningar

Ändras något av detta måste det uppdateras överallt: `contact.tsx`, `footer.tsx`, `cta-banner.tsx`, JSON-LD i `page.tsx` och den här filen.

## Utvecklare

Josefine Eriksson — [Kod & Design](https://www.kodochdesign.se)
