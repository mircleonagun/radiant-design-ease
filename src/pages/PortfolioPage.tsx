import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Portfolio } from "@/components/Portfolio";
import { FloatingShapes } from "@/components/3D/Scene3D";

const PortfolioPage = () => {
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
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our creative work across video, graphics, and special effects
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Component */}
      <Portfolio />

      <Footer />
    </div>
  );
};

export default PortfolioPage;
