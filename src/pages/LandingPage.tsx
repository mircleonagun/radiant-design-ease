import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Video, Sparkles, ImageIcon, MessageSquare, Star, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import carvenGaming from "@/assets/portfolio/carven_gaming_arena.png";
import swiftpayBusiness from "@/assets/portfolio/swiftpay_business.png";
import crimsonCocktail from "@/assets/portfolio/crimson_vibe_cocktail.png";
import happyNewMonth from "@/assets/portfolio/happy_new_month_july.png";
import guidanceJourney from "@/assets/portfolio/guidance_makes_the_journey_short.png";
import nigeriaAustralia from "@/assets/portfolio/nigeria_to_australia.png";
import mangoCooler from "@/assets/portfolio/mango_cooler.png";
import strategyMindset from "@/assets/portfolio/strategy_mindset.png";
import jollofLogo from "@/assets/jollof-logo.png";
import videoThumb1 from "@/assets/video-thumbnail-1.jpg";
import img6832 from "@/assets/portfolio/img_6832.png";
import img6833 from "@/assets/portfolio/img_6833.png";
import heroAnimation from "@/assets/hero-animation.mp4";

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

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  // Brand portfolios - you can add 5 more brands here
  const brands = [
    {
      name: "ACEFX Academy",
      description: "Trading education platform branding",
      images: [acefxJuly, acefxJune, acefxMay, acefxTraders, acefxCharts]
    },
    {
      name: "SwiftPay",
      description: "Fintech banking and payment solutions",
      images: [swiftpayCreateAccount, swiftpayVirtualAccount, swiftpayStartWeek, chaleLetsGo, chaleRaffle]
    },
    // Add 4 more brands here with the same structure
  ];

  const nextBrand = () => {
    setCurrentBrandIndex((prev) => (prev + 1) % brands.length);
  };

  const prevBrand = () => {
    setCurrentBrandIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const services = [
    {
      icon: videoThumb1,
      title: "Video Editing",
      description: "Professional video editing for short-form (Reels, Shorts, TikTok) and long-form content (YouTube, IGTV). We bring your vision to life with engaging storytelling.",
      link: "/services"
    },
    {
      icon: swiftpayBusiness,
      title: "Graphic Design",
      description: "Branded visuals, logos, campaigns, and carousel designs that capture attention and communicate your brand message effectively.",
      link: "/services"
    },
    {
      icon: img6832,
      title: "Social Media Management",
      description: "Stunning animations, motion graphics, and creative edits that add that extra wow factor to your content.",
      link: "/services"
    },
    {
      icon: img6833,
      title: "Social Media Marketing",
      description: "Strategic social media management and content creation that drives engagement and grows your online presence.",
      link: "/services"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "50K+", label: "Social Media Reach" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  const portfolioItems = [
    { title: "Gaming Event Branding", category: "Video Editing", image: carvenGaming },
    { title: "Fintech Marketing", category: "Graphics Design", image: swiftpayBusiness },
    { title: "Beverage Marketing", category: "Social Media", image: crimsonCocktail },
    { title: "Monthly Campaign", category: "Marketing", image: happyNewMonth }
  ];

  const testimonials = [
    { 
      name: "Sarah Johnson", 
      role: "Marketing Director", 
      quote: "Jollof Creative transformed our social media presence with stunning visuals and engaging content. Highly recommended!",
      rating: 5
    },
    { 
      name: "Michael Chen", 
      role: "Business Owner", 
      quote: "The video editing quality is exceptional. They understand our brand and deliver exactly what we need, every time.",
      rating: 5
    },
    { 
      name: "Aisha Mohammed", 
      role: "Content Creator", 
      quote: "Working with Jollof Creative has been a game-changer. Their creativity and professionalism are unmatched.",
      rating: 5
    }
  ];

  const features = [
    "Fast turnaround times",
    "Creative and unique designs",
    "Unlimited revisions",
    "24/7 customer support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Logo with Overlay */}
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: `url(${jollofLogo})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="text-primary font-semibold text-lg">Creative Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                We don't just manage brands<br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">we make them unforgettable.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                From content that stops the scroll to strategies that spark conversions, Jollof Creative is your all-in-one creative kitchen for social growth, design, and storytelling.
              </p>
              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4 max-w-md">
                  Your brand deserves more than attention, it deserves results.
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => navigate("/contact")}
                    className="text-lg px-8"
                  >
                    Book a Free Brand Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => navigate("/portfolio")}
                    className="text-lg px-8"
                  >
                    Explore Our Creativity
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <video 
                  src={heroAnimation} 
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                We create digital experiences that inspire engagement
              </h2>
              <p className="text-lg text-muted-foreground">
                At Jollof Creative, we're passionate about bringing your creative vision to life. Our mission is to empower brands with stunning visuals, compelling videos, and strategic social media content that drives real results.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Button 
                  size="lg"
                  onClick={() => navigate("/about")}
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src={guidanceJourney} alt="Educational branding" loading="lazy" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src={nigeriaAustralia} alt="Delivery service design" loading="lazy" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
              <img src={mangoCooler} alt="Menu design" loading="lazy" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src={strategyMindset} alt="Trading psychology" loading="lazy" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Creative Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Everything Your Brand Needs To Stand Out<br />
              <span className="text-3xl text-muted-foreground">All In One Place</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all hover:-translate-y-2 duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto"
                    onClick={() => navigate(service.link)}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => navigate("/services")}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Portfolios.
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our latest creative works
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-elegant transition-all hover:-translate-y-2 duration-300 cursor-pointer group" 
                onClick={() => navigate("/portfolio")}
              >
                <CardContent className="p-0 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-primary text-sm font-semibold mb-1">{item.category}</p>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => navigate("/portfolio")}
            >
              Explore Our Creativity
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Brands Showcase */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Featured Brands</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Our Brand Partners
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Navigation Buttons */}
              {brands.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full w-12 h-12"
                    onClick={prevBrand}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full w-12 h-12"
                    onClick={nextBrand}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}

              {/* Brand Display */}
              <Card className="overflow-hidden shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-center">{brands[currentBrandIndex].name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    {brands[currentBrandIndex].description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {brands[currentBrandIndex].images.map((image, idx) => (
                      <div 
                        key={idx}
                        className="aspect-square rounded-lg overflow-hidden group"
                      >
                        <img 
                          src={image} 
                          alt={`${brands[currentBrandIndex].name} design ${idx + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Brand Indicator Dots */}
                  {brands.length > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                      {brands.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentBrandIndex(idx)}
                          className={`h-2 rounded-full transition-all ${
                            idx === currentBrandIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                          }`}
                          aria-label={`Go to brand ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">User Reviews</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Don't Believe Me?<br />Check What Clients Think Of Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Our happy customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => navigate("/reviews")}
            >
              View All Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Looking For An Innovative Idea For Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's collaborate and bring your creative vision to life. Get in touch with us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => navigate("/contact")}
                className="text-lg px-8"
              >
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate("/portfolio")}
                className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated With Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest creative tips, trend reports, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button 
                size="lg"
              >
                Subscribe
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
