import { Target, Layers, TrendingUp, Zap, BarChart3, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

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
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            We Diagnose. We Fix. <span className="gradient-text">We Scale.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our services bridge the gap between creative execution and measurable performance
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left: Marketing Services */}
          <div className="space-y-6 animate-slide-in">
            <h3 className="text-3xl font-bold text-primary mb-8">Marketing Services</h3>
            {marketingServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover-scale"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse-glow" />
            <img
              src={dashboardMockup}
              alt="Performance Dashboard"
              className="relative rounded-lg shadow-2xl hover-scale"
            />
          </div>
        </div>

        {/* Creative Studio */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center">
            Creative Studio
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {creativeServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border hover:border-secondary/50 transition-all duration-300 hover-scale"
              >
                <CardHeader>
                  <div className="text-secondary mb-4">{service.icon}</div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-24">
          <p className="text-2xl md:text-3xl font-semibold text-foreground">
            We don't run campaigns. We run{" "}
            <span className="gradient-text">systems that perform</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
