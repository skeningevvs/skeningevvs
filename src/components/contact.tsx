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
    className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 rounded-3xl
               border border-border/60 bg-card/60 backdrop-blur
               shadow-lg shadow-black/5 dark:shadow-black/30
               p-5 flex flex-col items-center text-center
               transition-all duration-300
               hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40"
  >
    <Image
      className="w-20 h-20 rounded-full object-cover mb-3
                 ring-2 ring-primary/30 border border-border/60
                 transition-transform duration-300 hover:scale-105"
      src={img}
      alt={name}
      width={80}
      height={80}
    />
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-muted-foreground">{title}</p>

      {phone && (
        <div className="flex items-center justify-center gap-2 text-sm">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <a
            href={`tel:${phone}`}
            className="rounded-md px-2 py-1 text-primary transition-colors hover:bg-primary/10"
          >
            {phone}
          </a>
        </div>
      )}

      {mail && (
        <div className="flex items-center justify-center gap-2 text-sm">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <a
            href={`mailto:${mail}`}
            className="rounded-md px-2 py-1 text-primary transition-colors hover:bg-primary/10"
          >
            {mail}
          </a>
        </div>
      )}
    </div>
  </Card>
);

const Contact: React.FC = () => (
  <section id="contact" className="flex flex-wrap justify-center gap-6 p-6">
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

    {/* Google map */}
    <div className="w-full mt-8 rounded-3xl overflow-hidden border border-border/60 shadow-lg shadow-black/5 dark:shadow-black/30">
      <div className="w-full h-96">
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?f=q&source=embed&hl=sv&q=58.386333,15.085444&output=embed"
          frameBorder={0}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contact;