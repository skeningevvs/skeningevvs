import Logo from "./Logo"; // Se till att din Logo-komponent är importerad

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-border/60 md:divide-y-0 md:divide-x md:divide-border/60">
          {/* Vänster kolumn: Logotyp och beskrivning */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pb-8 md:pb-0 md:pr-8">
            <Logo className="h-20 w-auto mb-4" />
            <p className="text-muted-foreground">
              Din lokala VVS-partner i Skänninge med omnejd. Små i storlek –
              stora på service sedan 1986.
            </p>
          </div>

          {/* Mitten kolumn: Adress och telefon */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left py-8 md:py-0 md:px-8">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Information
            </h3>
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">Postadress:</strong>{" "}
              Folkungagatan 35 E, 595 32 MJÖLBY
            </p>
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">Besöksadress:</strong>{" "}
              Fabriksgatan 6, 596 33 Skänninge
            </p>
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">E-post:</strong>{" "}
              skeningevvsab@msn.com
            </p>
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">Bosse Engelke:</strong>{" "}
              0708-417290
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Kristian Engelke:</strong>{" "}
              0735-358075
            </p>
          </div>

          {/* Höger kolumn: Karta */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-8 md:pt-0 md:pl-8">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Hitta hit!
            </h3>
            <div className="w-full rounded-2xl overflow-hidden border border-border/60 shadow-lg shadow-black/5 dark:shadow-black/30">
              <div className="w-full h-40">
                <iframe
                  className="w-full h-full"
                  src="https://maps.google.com/maps?f=q&source=embed&hl=sv&q=58.386333,15.085444&output=embed"
                  frameBorder={0}
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nedre bar: copyright och designinfo */}
      <div className="bg-foreground text-background">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Skeninge VVS AB. Alla rättigheter
            reserverade.
          </p>
          <p>
            <a
              href="https://www.kodochdesign.se"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              Kod & Design
            </a>{" "}
            av Josefine Eriksson
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
