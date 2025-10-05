import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign, Calendar, CheckCircle2, Palette, FileVideo } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Hero3D } from "@/components/3D/Scene3D";

const LandingPage = () => {
  const navigate = useNavigate();

  const partnerLogos = [
    { name: "Google", icon: "🔍" },
    { name: "Trello", icon: "📋" },
    { name: "Monday", icon: "📊" },
    { name: "Notion", icon: "📝" },
    { name: "Slack", icon: "💬" },
  ];

  const stats = [
    { icon: FileVideo, value: "100 +", label: "Completed Project" },
    { icon: Users, value: "20 %", label: "Customer Satisfaction" },
    { icon: DollarSign, value: "$10M", label: "Raised by Clients" },
    { icon: Calendar, value: "2 yrs", label: "Years in Business" },
  ];

  const portfolioItems = [
    { title: "Digital Marketing Agency Website", description: "This is a great project built by a very talented person..." },
    { title: "Digital Marketing Agency Website", description: "This is a great project built by a very talented person..." },
    { title: "Digital Marketing Agency Website", description: "This is a great project built by a very talented person..." },
    { title: "Digital Marketing Agency Website", description: "This is a great project built by a very talented person..." },
  ];

  const testimonials = [
    { name: "Emily Stones", role: "CEO, Marketing Corp", text: "Thank You for your service. I am very pleased with the result. It's really awesome & modern design." },
    { name: "Emily Stones", role: "CEO, Marketing Corp", text: "Thank You for your service. I am very pleased with the result. It's really awesome & modern design." },
    { name: "Emily Stones", role: "CEO, Marketing Corp", text: "Thank You for your service. I am very pleased with the result. It's really awesome & modern design." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <Hero3D />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-left max-w-2xl animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Increase Your Customers{" "}
              <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                Loyalty and Satisfaction
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We help customers feel more loyal and happy customers standout from competitors, make more money
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Partner Logos */}
          <div className="mt-16 flex flex-wrap justify-center md:justify-start gap-8 items-center opacity-60">
            {partnerLogos.map((partner, index) => (
              <div 
                key={partner.name} 
                className="flex items-center gap-2 text-2xl hover:opacity-100 transition-opacity animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span>{partner.icon}</span>
                <span className="text-foreground font-semibold">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-4 text-sm text-primary font-semibold uppercase tracking-wider">
            WHAT WE DO
          </div>
          <h2 className="text-4xl font-bold text-center mb-4">
            We provide the Perfect Solution to your business growth
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="p-8 bg-card hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Grow Your Business</h3>
              <p className="text-muted-foreground mb-4">
                We help identify the best ways to improve your business
              </p>
              <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </button>
            </Card>

            <Card className="p-8 bg-card hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Palette className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Improve brand loyalty</h3>
              <p className="text-muted-foreground mb-4">
                We help identify the best ways to improve your business
              </p>
              <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </button>
            </Card>

            <Card className="p-8 bg-card hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in group" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <CheckCircle2 className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Improve Business Model</h3>
              <p className="text-muted-foreground mb-4">
                We help identify the best ways to improve your business
              </p>
              <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </button>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-4 text-sm text-primary font-semibold uppercase tracking-wider">
            OUR PORTFOLIO
          </div>
          <h2 className="text-4xl font-bold text-center mb-16">
            We provide the Perfect Solution to your business growth
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-orange-500/20 group-hover:from-primary/30 group-hover:to-orange-500/30 transition-all" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-4 text-sm text-primary font-semibold uppercase tracking-wider">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl font-bold text-center mb-16">
            See What Our Customer Say About Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-orange-500/30" />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Subscribe To Get The Latest{" "}
            <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
              News About Us
            </span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Please drop your email below to get daily update about what we do
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter Your Email" 
              className="flex-1 bg-input border-border rounded-full px-6 focus:ring-2 focus:ring-primary transition-all"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 hover:scale-105 transition-all shadow-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
