import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaBanner: React.FC = () => (
  <section className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4 text-center md:text-left">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 ring-1 ring-inset ring-primary-foreground/20">
          <Phone className="h-6 w-6" />
        </div>
        <div>
          <p className="text-lg font-bold">
            Behöver du hjälp med ditt VVS-projekt?
          </p>
          <p className="text-primary-foreground/80">
            Tveka inte att höra av dig till oss idag!
          </p>
        </div>
      </div>

      <Button
        asChild
        size="lg"
        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground border-none px-6 py-6 text-base rounded-2xl shadow-xl shadow-black/30 transition-all active:scale-[0.99]"
      >
        <Link href="#contact" className="flex items-center justify-center">
          Kontakta oss
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </section>
);

export default CtaBanner;
