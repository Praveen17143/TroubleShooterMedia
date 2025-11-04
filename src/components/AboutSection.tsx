import { Target, Lightbulb, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import studioWorkspace from "@/assets/studio-workspace.jpg";

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
            <h2 className="text-4xl md:text-6xl font-bold">
              Where Creativity Meets{" "}
              <span className="gradient-text">Process</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                TroubleShooter Media was born from a simple observation: most marketing 
                agencies are either too creative or too analytical. We refuse to choose.
              </p>
              
              <p>
                We're a hybrid marketing agency that partners with B2B tech, digital-first, 
                and modern consumer brands to deliver product-driven marketing execution.
              </p>
              
              <p>
                Our team blends creative DNA with operational rigor. We run our own creative 
                projects like <span className="text-secondary font-semibold">NightShift</span> and{" "}
                <span className="text-secondary font-semibold">Things Troubleshooter</span>, 
                keeping our pulse on culture while building high-performing systems for our clients.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
              <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-foreground">
                "Every marketing problem is just an unoptimized system waiting to be fixed."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">What Drives Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover-scale p-8 text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
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
