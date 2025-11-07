import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-hat-person.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0" style={{
      background: "var(--gradient-radial)"
    }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            We turn your digital{" "}
            <span className="gradient-text">chaos</span> into scalable{" "}
            <span className="gradient-text">performance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            TroubleShooter Media blends creative storytelling with data-backed strategy 
            to make digital campaigns operate like high-performing products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="glow-blue text-lg px-8 py-6 group" asChild>
              <a href="#contact">
                Let's Fix It Together
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
          </div>

          {/* Tagline */}
          <p className="text-sm md:text-base text-muted-foreground pt-8">
            "Fixing the gaps between creativity and performance."
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;