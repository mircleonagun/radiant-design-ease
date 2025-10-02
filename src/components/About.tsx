import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Innovation in every project",
  "Quality without compromise",
  "Deadline-driven delivery",
  "Client satisfaction first",
  "Creative excellence",
  "Transparent communication",
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Jollof Creative
              </span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                We are a dynamic creative agency specializing in transforming ideas into 
                captivating visual experiences. From video editing to graphic design and 
                special effects, we bring your vision to life with precision and passion.
              </p>
              <p>
                Our team combines technical expertise with artistic flair to deliver content 
                that not only looks stunning but also drives real results for your brand. 
                Whether you're creating social media content or launching a full campaign, 
                we're here to make it extraordinary.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="animate-scale-in">
            <Card className="p-8 bg-gradient-card border-border shadow-lg">
              <div className="space-y-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">150+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
