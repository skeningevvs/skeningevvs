import React from "react";
import Image from "next/image";

const About: React.FC = () => (
  <div className="relative -mt-12 md:-mt-24 mb-10 max-w-7xl mx-4 md:mx-auto">
    <section
      id="omoss"
      className="relative z-10 flex flex-col md:flex-row items-center justify-between
                 gap-8 md:gap-14 p-8 md:p-14 rounded-3xl
                 bg-card border border-border/60
                 shadow-lg shadow-black/5 dark:shadow-black/30
                 overflow-hidden"
    >
      <div className="w-full md:w-1/2 text-left relative flex flex-col gap-5">
        <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
          Om oss
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-loose">
          Skeninge VVS AB är ett VVS-företag som grundades 1986 i Skänninge. Vi
          erbjuder pålitliga tjänster inom värme, ventelation och sanitet för
          både privatpersoner och företag. Med lång erfarenhet och lokal
          förankring levererar vi trygga lösningar med hög kvalitet.
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-loose">
          Vi har certifierade VVS-tekniker med lång erfarenhet och hög kompetens
          för att säkerställa professionellt utförda arbeten. Vi strävar efter
          att leverera bra kundservice genom att vara lyhörda för kundernas
          behov, ge tydlig information och hålla hög kvalitet på våra tjänster.
        </p>
        <p className="text-base md:text-lg text-muted-foreground leading-loose">
          Vi är certifierade installatörer och har den nödvändiga expertisen för
          att utföra VVS-arbeten på ett professionellt och noggrant sätt. Vi
          använder enbart branschgodkända material av hög kvalitet för att
          säkerställa långvariga och pålitliga VVS-lösningar.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <Image
          src="/images/kristiantysonbosse.png"
          alt="Teamet från Skeninge VVS"
          width={600}
          height={400}
          className="rounded-2xl
                     ring-1  border-0
                     transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
    </section>

    <div className="relative z-20 flex justify-center">
      <span
        className="-mt-4 inline-flex items-center rounded-full bg-card
                   border border-border/60 px-4 py-1.5 text-sm font-medium
                   text-primary shadow-md shadow-black/5 dark:shadow-black/30"
      >
        Teamet från Skeninge VVS
      </span>
    </div>
  </div>
);

export default About;
