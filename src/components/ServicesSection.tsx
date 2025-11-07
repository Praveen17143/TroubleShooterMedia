import { Card } from "@/components/ui/card";
import serviceImage from "@/assets/workspace-hat-person.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Video Production",
      description: "High-quality videos that blend with your brand"
    },
    {
      title: "Content Research",
      description: "Discover valuable content for your brand"
    },
    {
      title: "Meme Creation",
      description: "Express yourself through creative memes"
    },
    {
      title: "Video Editing",
      description: "Animations and illustrations for your audience"
    },
    {
      title: "Graphic Designing",
      description: "Proper thumbnail strategy for better performance"
    },
    {
      title: "Social Media Campaigns",
      description: "Grow your presence through strategic content"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-4xl md:text-5xl text-muted-foreground">Here's What We Offer</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="relative">
            <img
              src={serviceImage}
              alt="Our Services"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* Right: Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-2 border-primary/30 p-6 hover:border-primary transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
