import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { FloatingShapes } from "@/components/3D/Scene3D";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get In{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your creative vision? Let's start a conversation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      <Footer />
    </div>
  );
};

export default ContactPage;
