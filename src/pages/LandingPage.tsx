import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Video, Sparkles, ImageIcon, MessageSquare, Star, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

// New portfolio images
import naseniInnovate2Days from "@/assets/portfolio/naseni_innovate_2days.jpg";
import naseniInnovate4Days from "@/assets/portfolio/naseni_innovate_4days.jpg";
import acefxWelcomeJune from "@/assets/portfolio/acefx_welcome_june.png";
import acefxWelcomeMay from "@/assets/portfolio/acefx_welcome_may.png";
import daperAugust from "@/assets/portfolio/daper_august.jpg";
import swiftpayCreateAccountNew from "@/assets/portfolio/swiftpay_create_account_new.png";
import jollofLogo from "@/assets/jollof-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import videoIcon from "@/assets/video-editing-icon-new.png";
import graphicsIcon from "@/assets/graphics-design-icon.png";
import socialIcon from "@/assets/social-media-management-icon.png";
import socialPlatformsIcon from "@/assets/social-platforms-icon.jpg";

// Import ACEFX Academy portfolio
import acefxJuly from "@/assets/portfolio/acefx_happy_new_month_july.png";
import acefxJune from "@/assets/portfolio/acefx_happy_new_month_june.png";
import acefxMay from "@/assets/portfolio/acefx_happy_new_month_may.png";
import acefxTraders from "@/assets/portfolio/acefx_best_traders.png";
import acefxCharts from "@/assets/portfolio/acefx_charts_fundamentals.jpg";

// Import SwiftPay portfolio
import swiftpayCreateAccount from "@/assets/portfolio/swiftpay_create_account.png";
import swiftpayVirtualAccount from "@/assets/portfolio/swiftpay_virtual_account.png";
import swiftpayStartWeek from "@/assets/portfolio/swiftpay_start_week.png";
import chaleLetsGo from "@/assets/portfolio/chale_lets_go.png";
import chaleRaffle from "@/assets/portfolio/chale_raffle.jpg";

// Import CRUSH/Africa Film Festival portfolio
import africaFilmFest2025 from "@/assets/portfolio/africa_film_fest_2025.jpg";
import africaFilmFestWhy from "@/assets/portfolio/africa_film_fest_why.jpg";
import whatIsCrush from "@/assets/portfolio/what_is_crush.png";
import crushCommunity from "@/assets/portfolio/crush_community.png";
import crushVibeMemories from "@/assets/portfolio/crush_vibe_memories.png";
import chaleLetsGoEvent from "@/assets/portfolio/chale_lets_go_event.png";
import chaleRaffleEvent from "@/assets/portfolio/chale_raffle_event.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  // Auto-slide carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Brand portfolios
  const brands = [
    {
      name: "ACEFX Academy",
      description: "Trading education platform branding",
      images: [acefxWelcomeJune, acefxWelcomeMay, acefxJuly, acefxTraders, acefxCharts]
    },
    {
      name: "SwiftPay",
      description: "Fintech banking and payment solutions",
      images: [swiftpayCreateAccountNew, swiftpayVirtualAccount, swiftpayStartWeek, chaleLetsGo, chaleRaffle]
    },
    {
      name: "NASENI Innovation Hub",
      description: "Innovation and technology initiatives",
      images: [naseniInnovate2Days, naseniInnovate4Days]
    },
    {
      name: "Daper",
      description: "Social messaging platform branding",
      images: [daperAugust]
    },
    {
      name: "CRUSH x Africa Film Festival",
      description: "Event branding and community engagement",
      images: [africaFilmFest2025, africaFilmFestWhy, whatIsCrush, crushCommunity, crushVibeMemories, chaleLetsGoEvent, chaleRaffleEvent]
    }
  ];

  const nextBrand = () => {
    setCurrentBrandIndex((prev) => (prev + 1) % brands.length);
  };

  const prevBrand = () => {
    setCurrentBrandIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  // Services
  const services = [
    {
      title: "Video Editing",
      icon: videoIcon,
      description: "From short-form social media content to documentary-style storytelling, we craft videos that captivate."
    },
    {
      title: "Graphics Design",
      icon: graphicsIcon,
      description: "Eye-catching designs that tell your brand's story and convert viewers into customers."
    },
    {
      title: "Social Media Management",
      icon: socialIcon,
      description: "We handle your online presence so you can focus on what you do best—building your business."
    }
  ];

  // Stats
  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "500+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "24/7", label: "Support Available" }
  ];

  // Featured portfolio items for preview
  const portfolioItems = [
    { title: "NASENI InnovateNaija", category: "Event Branding", image: naseniInnovate2Days },
    { title: "SwiftPay Account", category: "Product Design", image: swiftpayCreateAccountNew },
    { title: "ACEFX Welcome", category: "Social Media", image: acefxWelcomeJune },
    { title: "Daper August", category: "Social Media", image: daperAugust }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "Jollof Creative transformed our social media presence. The engagement rates have tripled!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, Tech Startup",
      content: "Outstanding video production quality. They understood our vision perfectly.",
      rating: 5
    },
    {
      name: "Aisha Williams",
      role: "Brand Manager",
      content: "Their graphics design work is phenomenal. Highly recommend their services!",
      rating: 5
    }
  ];

  // Features
  const features = [
    { icon: Video, title: "Professional Quality", description: "Studio-grade production values in every project" },
    { icon: Sparkles, title: "Creative Excellence", description: "Award-winning designs that stand out" },
    { icon: MessageSquare, title: "24/7 Support", description: "Always here when you need us" },
    { icon: CheckCircle2, title: "On-Time Delivery", description: "We respect deadlines and your time" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <img 
            src={jollofLogo} 
            alt="Jollof Creative" 
            className="w-32 h-32 mx-auto mb-8 object-contain"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Creative Excellence,<br />Delivered Daily
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Transform your brand with stunning visuals, compelling videos, and strategic social media management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8"
              onClick={() => navigate("/contact")}
            >
              Start Your Project <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white hover:bg-white/20 text-lg px-8"
              onClick={() => navigate("/portfolio")}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Jollof Creative?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another creative agency. We're your growth partner, combining artistic vision with data-driven strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive creative solutions for modern brands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-16 h-16 mb-6 object-contain"
                  />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button 
                    variant="outline"
                    onClick={() => navigate("/services")}
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
            <p className="text-xl text-muted-foreground">
              A glimpse of our recent projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-semibold">{item.category}</p>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => navigate("/portfolio")}
            >
              View Full Portfolio <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Brands Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Brands We've Powered</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leading organizations across industries
            </p>
          </div>

          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <h3 className="text-3xl font-bold mb-4">{brands[currentBrandIndex].name}</h3>
                    <p className="text-xl text-muted-foreground mb-6">
                      {brands[currentBrandIndex].description}
                    </p>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevBrand}
                        className="rounded-full"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextBrand}
                        className="rounded-full"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-4">
                    {brands[currentBrandIndex].images.slice(0, 4).map((image, idx) => (
                      <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`${brands[currentBrandIndex].name} work ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something amazing together. Get in touch for a free consultation.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8"
            onClick={() => navigate("/contact")}
          >
            Get Started Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get creative tips, industry insights, and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
