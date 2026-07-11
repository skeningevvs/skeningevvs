import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Flame } from "lucide-react";
import { FaShower } from "react-icons/fa";
import { GiKitchenTap, GiTap } from "react-icons/gi";
import { TbFridge } from "react-icons/tb";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

// Definierar typer för tjänster för bättre typsäkerhet
interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: Wrench,
    title: "Rörinstallationer",
    description:
      "Nyinstallation, omdragning och byte av vatten- och avloppsledningar i kök, badrum och hela fastigheter.",
  },
  {
    icon: Flame,
    title: "Värmesystem",
    description:
      "Installation, service och felsökning av värmepumpar, radiatorer och golvvärme. Vi hjälper dig även att sänka dina uppvärmningskostnader med smarta lösningar.",
  },
  {
    icon: FaShower,
    title: "Badrumsrenovering",
    description:
      "Vi utför allt VVS-arbete vid badrumsrenoveringar enligt gällande branschregler. Montering av WC, dusch, handfat och badkar.",
  },
  {
    icon: GiKitchenTap,
    title: "Köksinstallationer",
    description:
      "Professionell installation av diskmaskin, köksblandare, vattenlås och avlopp vid köksrenovering eller nyinstallation.",
  },
  {
    icon: GiTap,
    title: "Service & underhåll",
    description:
      "Vi underhåller och kontrollerar ditt VVS-system för att förebygga problem, spara energi och förlänga livslängden.",
  },
  {
    icon: TbFridge,
    title: "Installation av vitvaror & apparater",
    description:
      "Anslutning av tvättmaskin, ismaskin, kaffemaskin och andra vattenanslutna produkter.",
  },
  {
    icon: MdOutlineEnergySavingsLeaf,
    title: "Energisparande lösningar",
    description:
      "Vi hjälper dig hitta miljövänliga alternativ som sänker din energiförbrukning och gör skillnad i plånboken.",
  },
];

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => (
  <Card
    className="group flex flex-col border border-border/60 bg-card
               rounded-2xl md:transition-all md:duration-300
               md:hover:-translate-y-1 md:hover:shadow-xl md:hover:shadow-black/10 dark:md:hover:shadow-black/40
               md:hover:border-border"
  >
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/0 
                    transition-transform duration-300 group-hover:scale-105"
      >
        <service.icon className="text-accent-foreground: h-6 w-6" />
      </div>
      <CardTitle className="text-xl font-semibold text-primary">
        {service.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow pt-2">
      <p className="text-base text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </CardContent>
  </Card>
);

const Services: React.FC = () => {
  const gridServices = services.slice(0, 6);
  const lastService = services[6];

  return (
    <section id="service" className="relative">
      <div className="container mx-auto pt-16 px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Våra Tjänster
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vi erbjuder ett brett spektrum av VVS-tjänster för både
            privatpersoner och företag. Från kompletta badrumsrenoveringar till
            service och energirådgivning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* MOBIL: sista kortet i normalt flöde, bakgrundsbildens tak glider lite över det */}
        <div className="md:hidden relative z-10 mt-8 -mb-6">
          <ServiceCard service={lastService} />
        </div>
      </div>

      {/* Bakgrundsbild som flätar samman tjänster och kontaktkort */}
      <div className="relative">
        {/* MOBIL: större, beskuren bild */}
        <div className="md:hidden relative h-80 sm:h-96 w-full overflow-hidden">
          <Image
            src="/images/bakgrund-bil.png"
            alt="Skeninge VVS servicebil"
            fill
            className="object-cover object-center select-none"
          />
        </div>

        {/* DESKTOP: bild i naturligt bildförhållande */}
        <Image
          src="/images/bakgrund-bil.png"
          alt="Skeninge VVS servicebil"
          width={1920}
          height={1077}
          className="hidden md:block w-full h-auto select-none"
        />

        {/* DESKTOP: sista kortet flyter ovanpå bilden */}
        <div className="hidden md:block absolute inset-x-0 top-10">
          <div className="container mx-auto px-4">
            <div className="max-w-sm">
              <ServiceCard service={lastService} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
