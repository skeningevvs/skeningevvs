import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="dark relative w-full overflow-hidden bg-background text-foreground">
      {/* DESKTOP: bakgrundsbild */}
      <div className="absolute bg-center inset-0 z-0 hidden md:block">
        <Image
          src="/images/skeninge-vvs-i-skänninge-mjölby-vadstena.png"
          alt="Skeninge VVS"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/0 to-transparent" />
      </div>

      {/* MOBIL LAYOUT */}
      <div className="md:hidden relative z-10">
        <div className="relative w-full overflow-hidden bg-background">
          <Image
            src="/images/hero-mobil.png"
            alt="Skeninge VVS"
            width={1107}
            height={684}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />

          <div className="absolute inset-x-0 top-6 px-4">
            <div className="inline-flex items-center rounded-full bg-background/40 px-2.5 py-1 text-[11px] font-semibold text-foreground ring-1 ring-inset ring-foreground/15 mb-3 backdrop-blur">
              Skeninge VVS — Din lokala partner
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight leading-[1.15] text-primary-foreground mb-3">
              Din lokala expert <br />
              på <span className="text-secondary">VVS</span>
            </h1>

            <div className="flex flex-col items-start gap-2">
              <Button
                asChild
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground border-none rounded-full px-4 py-4 text-sm shadow-lg shadow-black/30 transition-all active:scale-[0.99]"
              >
                <Link href="#contact" className="flex items-center">
                  Kontakta oss
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>

              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-none rounded-full px-4 py-4 text-sm shadow-lg shadow-black/30 transition-all active:scale-[0.99]"
              >
                <Link href="#service" className="flex items-center">
                  Våra tjänster
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Blå informationsrad */}
        <div className="bg-primary px-6 pt-5 pb-16 text-center">
          <p className="text-primary-foreground font-medium leading-relaxed">
            Små i storlek – stora på service. VVS-tjänster för både
            privatpersoner och företag.
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-foreground/10 px-3 py-1 text-sm font-semibold text-foreground/70 ring-1 ring-inset ring-foreground/15 mb-6 backdrop-blur">
              Skeninge VVS — Din lokala partner
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary-foreground mb-6 leading-[1.1]">
              Din lokala expert på <span className="text-secondary">VVS</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 font-medium mb-10 max-w-xl leading-relaxed">
              Små i storlek – stora på service. VVS-tjänster för både
              privatpersoner och företag.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground border-none px-8 py-7 text-lg rounded-2xl shadow-xl shadow-black/40 transition-all hover:-translate-y-1"
              >
                <Link href="#contact" className="flex items-center">
                  Kontakta oss
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-none px-8 py-7 text-lg rounded-2xl shadow-xl shadow-black/40 transition-all hover:-translate-y-1"
              >
                <Link href="#service" className="flex items-center">
                  Våra tjänster
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center text-foreground/80 font-semibold">
              <CheckCircle2 className="text-primary mr-2 h-6 w-6" />
              Auktoriserad personal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
