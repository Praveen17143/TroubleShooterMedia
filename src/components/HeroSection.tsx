import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hat-person.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative animate-fade-in">
            <img
              src={heroImage}
              alt="TroubleShooter Media Team"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              We Fix Your Digital Marketing
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Performance-driven marketing that turns creative chaos into scalable results
            </p>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
                asChild
              >
                <a href="#contact">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
