import narayana from "@/assets/client-narayana.png";
import quranium from "@/assets/client-quranium.png";
import givingTuesday from "@/assets/client-giving-tuesday.png";
import healthify from "@/assets/client-healthify.png";
import hyderabadKitchen from "@/assets/client-hyderabad-kitchen.jpg";
import codeUnion from "@/assets/client-code-union.jpg";
import filmable from "@/assets/client-filmable.png";

const ClientsSection = () => {
  const clients = [
    { name: "Narayana Group of Schools", logo: narayana },
    { name: "Quranium", logo: quranium },
    { name: "Giving Tuesday", logo: givingTuesday },
    { name: "Healthify", logo: healthify },
    { name: "Hyderabad Kitchen", logo: hyderabadKitchen },
    { name: "Code Union", logo: codeUnion },
    { name: "Filmable", logo: filmable },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Clients
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-32 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-32 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
