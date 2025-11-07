import { Target, Lightbulb, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import studioWorkspace from "@/assets/workspace-hat-person.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance-Driven",
      description: "We treat marketing like a scalable product — measurable, efficient, and optimized.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative at Core",
      description: "Our storytelling roots keep us connected to culture and what drives engagement.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Systems Thinking",
      description: "Every marketing problem is just an unoptimized system waiting to be fixed.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left: Image */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="absolute inset-0 bg-secondary/20 blur-3xl animate-pulse-glow" />
            <img
              src={studioWorkspace}
              alt="TroubleShooter Studio"
              className="relative rounded-lg shadow-2xl hover-scale"
            />
          </div>

          {/* Right: Story */}
          <div className="space-y-6 animate-slide-in order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Where Creativity Meets Performance
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                We're a hybrid marketing agency that blends creative storytelling with 
                data-driven strategy to deliver measurable results.
              </p>
              
              <p>
                Our approach combines operational rigor with creative excellence, 
                building systems that perform at scale.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card/50 border-2 border-primary/20 hover:border-primary transition-all p-8 text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
