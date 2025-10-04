import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { FloatingShapes } from "@/components/3D/Scene3D";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive creative solutions tailored to elevate your brand and engage your audience
            </p>
          </div>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in">
              Let's discuss how we can bring your creative vision to life
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 animate-scale-in"
            >
              Contact Us Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
