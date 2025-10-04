import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reviews } from "@/components/Reviews";
import { FloatingShapes } from "@/components/3D/Scene3D";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReviewsPage = () => {
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
              Client{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Reviews
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See what our clients say about working with Jollof Creative
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Component */}
      <Reviews />

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Join our growing list of satisfied clients
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 animate-scale-in"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReviewsPage;
