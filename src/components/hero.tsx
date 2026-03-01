import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="dark relative w-full overflow-hidden bg-slate-950 text-white">
      {/* DESKTOP: bakgrundsbild */}
      <div className="absolute bg-center inset-0 z-0 hidden md:block">
        <Image
          src="/images/skeninge-vvs-i-skänninge-mjölby-vadstena.png"
          alt="Skeninge VVS"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-400/0 to-transparent" />
      </div>

      {/* MOBIL LAYOUT */}
      <div className="md:hidden relative z-10">
        <div className="relative px-4 pt-10 pb-8">
          <div className="pointer-events-none absolute inset-0 bg-slate-950" />
          
          <div className="relative mx-auto max-w-md">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-300 ring-1 ring-inset ring-white/15 mb-5 backdrop-blur">
              Skeninge VVS — Din lokala partner
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight leading-[1.05] text-sky-500">
              Din <br /> lokala <br /> expert på <span className="text-red-600">VVS</span>
            </h1>

            <p className="mt-5 text-base text-slate-300 font-medium leading-relaxed">
              Små i storlek – stora på service. VVS-tjänster för både privatpersoner och företag.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              {/* RÖD KNAPP */}
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white border-none px-6 py-6 text-base rounded-2xl shadow-xl shadow-black/30 transition-all active:scale-[0.99]"
              >
                <Link href="#contact" className="flex items-center justify-center">
                  Kontakta oss
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              {/* BLÅ KNAPP */}
              <Button
                asChild
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white border-none px-6 py-6 text-base rounded-2xl shadow-xl shadow-black/30 transition-all active:scale-[0.99]"
              >
                <Link href="#service" className="flex items-center justify-center">
                  Våra tjänster
                </Link>
              </Button>
            </div>

            <div className="mt-7 flex items-center text-slate-200 font-semibold">
              <CheckCircle2 className="text-sky-500 mr-2 h-5 w-5" />
              Auktoriserad personal
            </div>
          </div>
        </div>

        {/* Bildkort mobil */}
        <div className="px-4 pb-10 relative">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
            <div className="relative h-52 w-full">
              <Image
                src="/images/skeningebuss2.png"
                alt="Skeninge VVS"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>

    
      <div className="hidden md:block">
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-300 ring-1 ring-inset ring-white/15 mb-6 backdrop-blur">
              Skeninge VVS — Din lokala partner
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-sky-500 mb-6 leading-[1.1]">
              Din lokala expert på <span className="text-red-700">VVS</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 max-w-xl leading-relaxed">
              Små i storlek – stora på service. VVS-tjänster för både privatpersoner och företag.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
            
              <Button
                asChild
                size="lg"
                className="bg-red-700 hover:bg-red-800 text-white border-none px-8 py-7 text-lg rounded-2xl shadow-xl shadow-black/40 transition-all hover:-translate-y-1"
              >
                <Link href="#contact" className="flex items-center">
                  Kontakta oss
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>


              <Button
                asChild
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white border-none px-8 py-7 text-lg rounded-2xl shadow-xl shadow-black/40 transition-all hover:-translate-y-1"
              >
                <Link href="#service">Våra tjänster</Link>
              </Button>
            </div>

            <div className="flex items-center text-slate-200 font-semibold">
              <CheckCircle2 className="text-sky-500 mr-2 h-6 w-6" />
              Auktoriserad personal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;