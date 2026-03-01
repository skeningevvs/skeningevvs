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

const Services: React.FC = () => (
  <section id="service" className="container mx-auto py-16 px-4">
    <div className="mb-12 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
        Våra Tjänster
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Vi erbjuder ett brett spektrum av VVS-tjänster för både privatpersoner
        och företag. Från kompletta badrumsrenoveringar till service och
        energirådgivning.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Card
          key={service.title}
          className="group flex flex-col border border-border/60 bg-card/60 backdrop-blur
                     rounded-2xl transition-all duration-300
                     hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40
                     hover:border-border"
        >
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/60
                         shadow-sm transition-transform duration-300 group-hover:scale-105"
            >
              <service.icon className="text-secondary h-6 w-6" />
            </div>
            <CardTitle className="text-xl font-semibold text-foreground">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow pt-2">
            <p className="text-base text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Bildsektion */}
    <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
        <Image
          src="/images/skeningevvs-frontbuss.png"
          alt="Skeninge VVS servicebil"
          width={500}
          height={500}
          className="rounded-3xl border-0 
                     transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
    </div>
  </section>
);

export default Services;