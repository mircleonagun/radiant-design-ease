import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";
import { FloatingShapes } from "@/components/3D/Scene3D";

const values = [
  { icon: Zap, title: "Innovation", description: "Pushing creative boundaries in every project" },
  { icon: Target, title: "Quality", description: "Excellence without compromise" },
  { icon: Users, title: "Client First", description: "Your satisfaction is our priority" },
  { icon: CheckCircle2, title: "Deadline-Driven", description: "On-time delivery, every time" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Jollof Creative
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a dynamic creative agency transforming ideas into captivating visual experiences
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Jollof Creative, we believe that every brand has a unique story worth telling. 
                  Our mission is to bring those stories to life through innovative video editing, 
                  stunning graphic design, and mesmerizing special effects.
                </p>
                <p>
                  We combine technical expertise with artistic flair to deliver content that doesn't 
                  just look beautiful—it drives real results for your business. From social media 
                  content to full-scale campaigns, we're here to make your vision extraordinary.
                </p>
                <p>
                  With a passion for creativity and a commitment to excellence, we've helped over 
                  150 clients transform their digital presence and engage their audiences in meaningful ways.
                </p>
              </div>
            </div>

            <Card className="p-8 bg-gradient-card border-border shadow-lg animate-scale-in">
              <div className="space-y-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-primary mb-1">150+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-primary mb-1">5 Years</div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Core <span className="bg-gradient-hero bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                What Makes Us <span className="bg-gradient-hero bg-clip-text text-transparent">Different</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Personalized approach to every project",
                "Fast turnaround without sacrificing quality",
                "Unlimited revisions until you're satisfied",
                "Transparent pricing with no hidden fees",
                "Direct communication with your creative team",
                "Cutting-edge tools and techniques",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg hover:shadow-md transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="text-foreground font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
