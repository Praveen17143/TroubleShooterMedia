import { Target, Layers, TrendingUp, Zap, BarChart3, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import serviceImage from "@/assets/workspace-hat-person.jpg";

const ServicesSection = () => {
  const marketingServices = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Strategy & Campaigns",
      description: "End-to-end B2B and digital campaign execution driven by KPIs.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Content Marketing Systems",
      description: "Build repeatable frameworks for video, copy, and storytelling that scale.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Product-Led Growth Consulting",
      description: "Help SaaS and tech companies align marketing with product adoption.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation & Process Optimization",
      description: "Improve operational efficiency and reduce execution gaps.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Custom dashboards to track performance and operational health in real time.",
    },
  ];

  const creativeServices = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "NightShift with TroubleShooter",
      description: "Business, work, and pop-culture stories with a twist.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Things Troubleshooter",
      description: "Conversational podcast with guests from all genres.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Experimental Projects (R&D)",
      description: "Social experiments, live events, and storytelling initiatives.",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-4xl md:text-5xl text-muted-foreground">Here's What We Offer</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          {/* Left: Image */}
          <div className="relative">
            <img
              src={serviceImage}
              alt="Our Services"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* Right: Marketing Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Marketing Services</h3>
            {marketingServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-2 border-primary/30 p-6 hover:border-primary transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Creative Studio */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Creative Studio
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {creativeServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-2 border-primary/30 hover:border-primary transition-all p-6"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-foreground mb-2">{service.title}</h4>
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
