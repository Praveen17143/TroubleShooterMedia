import { ExternalLink, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WorkSection = () => {
  const projects = [
    {
      name: "B2B SaaS Growth Campaign",
      client: "TechStart Inc.",
      metric: "+247% Lead Generation",
      description: "Implemented product-led growth strategy with automated nurture sequences",
      category: "Performance Marketing",
    },
    {
      name: "Content Marketing Automation",
      client: "Digital Dynamics",
      metric: "65% Time Saved",
      description: "Built scalable content system with repeatable frameworks and templates",
      category: "Process Optimization",
    },
    {
      name: "Analytics Dashboard Build",
      client: "GrowthCo",
      metric: "Real-time Reporting",
      description: "Custom performance tracking dashboard for C-level stakeholders",
      category: "Analytics",
    },
    {
      name: "NightShift Episode 12",
      client: "Filmable",
      metric: "50K+ Views",
      description: "Business culture deep-dive with a tech entrepreneur",
      category: "Creative Studio",
    },
    {
      name: "Things Troubleshooter S2",
      client: "Internal Creative",
      metric: "25K+ Listeners",
      description: "Conversational podcast exploring modern work and creativity",
      category: "Creative Studio",
    },
    {
      name: "Product Launch Campaign",
      client: "InnovateTech",
      metric: "+180% Conversions",
      description: "Full-funnel campaign strategy with performance tracking and optimization",
      category: "Performance Marketing",
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Turning Problems into{" "}
            <span className="gradient-text">Playbooks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real troubleshooting
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-scale group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant="outline" 
                    className={
                      project.category === "Creative Studio"
                        ? "border-secondary text-secondary"
                        : "border-primary text-primary"
                    }
                  >
                    {project.category}
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <CardTitle className="text-2xl mb-2">{project.name}</CardTitle>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-muted-foreground">{project.client}</span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-primary font-semibold text-lg">
                  <TrendingUp className="w-5 h-5" />
                  {project.metric}
                </div>

                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-4">
            Every project is an unoptimized system waiting to be fixed
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
