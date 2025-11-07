import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Have something to{" "}
              <span className="gradient-text">troubleshoot?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's diagnose the problem and build a solution together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card className="bg-card/50 border-border p-8 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Email Us</h3>
                </div>
                <p className="text-muted-foreground">praveen@troubleshootermedia.com</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Quick Response</h3>
                </div>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours during business days
                </p>
              </div>

              <div className="pt-6">
                <h4 className="font-semibold mb-3">What We Can Help With:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Campaign strategy & execution</li>
                  <li>• Marketing automation setup</li>
                  <li>• Content systems & frameworks</li>
                  <li>• Performance analytics</li>
                  <li>• Creative collaborations</li>
                </ul>
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="bg-card/50 border-border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="bg-background/50" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="bg-background/50" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" className="bg-background/50" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or challenge..." rows={4} required className="bg-background/50" />
                </div>

                <Button type="submit" className="w-full glow-blue group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;