import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Video, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Hero3D } from "@/components/3D/Scene3D";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/40 z-10" />
        
        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-20 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
                Transform Your Vision Into{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Creative Reality
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed max-w-2xl mx-auto">
                Professional video editing, stunning graphics, and captivating special effects 
                that elevate your brand.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in mb-16">
              <Button
                size="lg"
                onClick={() => navigate("/services")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 shadow-glow group"
              >
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/portfolio")}
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-10 py-7 backdrop-blur-sm"
              >
                <Sparkles className="mr-2" size={20} />
                View Portfolio
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in">
              <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-8 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-primary-foreground/80">Projects Completed</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-8 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2">150+</div>
                <div className="text-primary-foreground/80">Happy Clients</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-8 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-primary-foreground/80">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float z-20">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What We <span className="bg-gradient-hero bg-clip-text text-transparent">Create</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we bring your creative vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              onClick={() => navigate("/portfolio")}
              className="group cursor-pointer bg-gradient-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Video className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                Video Editing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Short-form and long-form content that captivates audiences
              </p>
            </div>

            <div
              onClick={() => navigate("/portfolio")}
              className="group cursor-pointer bg-gradient-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ImageIcon className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                Graphic Design
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Eye-catching visuals that make your brand unforgettable
              </p>
            </div>

            <div
              onClick={() => navigate("/portfolio")}
              className="group cursor-pointer bg-gradient-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                Special Effects
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Stunning animations and motion graphics that wow
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              onClick={() => navigate("/services")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in">
              Let's create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/about")}
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm px-8"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
