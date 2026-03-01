import React from "react";
import Image from "next/image";

const About: React.FC = () => (
  <section
    id="omoss"
    className="relative flex flex-col md:flex-row items-center justify-between
               p-8 md:p-10 rounded-3xl max-w-6xl mx-auto my-10
               bg-card/70 backdrop-blur border border-border/60
               shadow-lg shadow-black/5 dark:shadow-black/30
               m-4 overflow-hidden"
  >
    <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />

    <div className="w-full md:w-1/2 md:pr-10 mb-8 md:mb-0 text-left relative">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
        Om oss
      </h2>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        Skeninge VVS AB är ett VVS-företag som grundades 1986 i Skänninge. Vi
        erbjuder pålitliga tjänster inom värme, ventelation och sanitet för både
        privatpersoner och företag. Med lång erfarenhet och lokal förankring
        levererar vi trygga lösningar med hög kvalitet.
        <br />
        Vi har certifierade VVS-tekniker med lång erfarenhet och hög kompetens
        för att säkerställa professionellt utförda arbeten. Vi strävar efter att
        leverera bra kundservice genom att vara lyhörda för kundernas behov, ge
        tydlig information och hålla hög kvalitet på våra tjänster.
        <br />
        Vi är certifierade installatörer och har den nödvändiga expertisen för
        att utföra VVS-arbeten på ett professionellt och noggrant sätt. Vi
        använder enbart branschgodkända material av hög kvalitet för att
        säkerställa långvariga och pålitliga VVS-lösningar.
      </p>
    </div>

    <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 relative">
      <Image
        src="/images/kristiantysonbosse.png"
        alt="Teamet från Skeninge VVS"
        width={600}
        height={400}
        className="rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/40
                   ring-1 ring-border/60
                   transition-transform duration-300 hover:scale-[1.02]"
      />
    </div>
  </section>
);

export default About;