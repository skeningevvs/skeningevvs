import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
// import TrustmaryWidget from "@/components/trustmary";
import Contact from "../components/contact";
import CtaBanner from "../components/cta-banner";
import Footer from "../components/footer";
import VisitTracker from "../components/visit-tracker";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

// Canonical sätts här (inte i layout.tsx) så att andra sidor, t.ex.
// /besokare, inte ärver startsidans canonical. Lägg inte till openGraph här –
// det skulle ersätta hela openGraph-objektet från layout.tsx (inklusive bilden).
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// Strukturerad data för Google (lokalt företag). Uppgifterna måste stämma
// med kontaktkorten och footern – se "Företagsuppgifter" i AGENTS.md.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": `${SITE_URL}/#foretag`,
  name: "Skeninge VVS AB",
  url: SITE_URL,
  logo: `${SITE_URL}/images/skeningevvs.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Familjeföretag sedan 1986 med VVS-tjänster för privatpersoner och företag: rörinstallationer, värmesystem, badrumsrenovering, köksinstallationer, service och energisparande lösningar.",
  foundingDate: "1986",
  telephone: "+46735358075",
  email: "skeningevvsab@msn.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fabriksgatan 6",
    postalCode: "596 33",
    addressLocality: "Skänninge",
    addressRegion: "Östergötlands län",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 58.386333,
    longitude: 15.085444,
  },
  areaServed: [
    "Skänninge",
    "Mjölby",
    "Vadstena",
    "Motala",
    "Linköping",
    "Boxholm",
    "Tranås",
    "Vikingstad",
    "Mantorp",
    "Väderstad",
  ].map((name) => ({ "@type": "City", name })),
  employee: [
    {
      "@type": "Person",
      name: "Bosse Engelke",
      jobTitle: "Ägare/VVS-montör",
      telephone: "+46708417290",
    },
    {
      "@type": "Person",
      name: "Kristian Engelke",
      jobTitle: "VVS-montör",
      telephone: "+46735358075",
    },
  ],
};

export default function Page() {
  return (
    <>
      <VisitTracker />
      <Navbar />
      <main className="bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Hero />
        <About />
        <Services />
        {/* <TrustmaryWidget /> */}
        <Contact />
        <CtaBanner />
        <Footer />
      </main>
    </>
  );
}
