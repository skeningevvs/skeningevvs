import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const PersonCard: React.FC<{
  img: string;
  name: string;
  title: string;
  phone?: string;
  mail?: string;
}> = ({ img, name, title, phone, mail }) => (
  <Card
    className="w-full rounded-3xl
               border border-border/60 bg-card
               shadow-lg shadow-black/5 dark:shadow-black/30
               p-4 flex flex-row items-center gap-4 text-left
               md:transition-all md:duration-300
               md:hover:-translate-y-1 md:hover:shadow-xl md:hover:shadow-black/10 dark:md:hover:shadow-black/40"
  >
    <Image
      className="w-14 h-14 shrink-0 rounded-full object-cover
                 ring-2 ring-primary/30 border border-border/60
                 transition-transform duration-300 hover:scale-105"
      src={img}
      alt={`${name}, ${title} på Skeninge VVS`}
      width={56}
      height={56}
    />
    <div className="space-y-1 min-w-0">
      <h3 className="text-base font-semibold text-foreground truncate">
        {name}
      </h3>
      <p className="text-sm text-muted-foreground truncate">{title}</p>

      {phone && (
        <div className="flex items-center gap-1.5 text-xs">
          <Phone className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          <a
            href={`tel:${phone}`}
            className="truncate text-primary transition-colors hover:underline"
          >
            {phone}
          </a>
        </div>
      )}

      {mail && (
        <div className="flex items-center gap-1.5 text-xs">
          <Mail className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          <a
            href={`mailto:${mail}`}
            className="truncate text-primary transition-colors hover:underline"
          >
            {mail}
          </a>
        </div>
      )}
    </div>
  </Card>
);

const Contact: React.FC = () => (
  <section
    id="contact"
    className="relative z-20 container mx-auto px-4 pb-16
               -mt-6 sm:-mt-8 md:-mt-28 lg:-mt-36
               -mb-10 md:mb-0"
  >
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
      <PersonCard
        img="/images/kristian.png"
        name="Kristian Engelke"
        title="VVS-montör"
        phone="0735-358075"
        mail="skeningevvsab@msn.com"
      />
      <PersonCard
        img="/images/bosse.png"
        name="Bosse Engelke"
        title="Ägare/VVS-montör"
        phone="0708-417290"
        mail="skeningevvsab@msn.com"
      />
      <PersonCard
        img="/images/nina.png"
        name="Nina Engelke"
        title="Ägare/Administratör"
        mail="skeningevvsab@msn.com"
      />
      <PersonCard
        img="/images/tyson.png"
        name="Tyson"
        title="VVS-Vovve/Säkerhetsansvarig"
        mail="skeningevvsab@msn.com"
      />
    </div>
  </section>
);

export default Contact;
