import { Card } from "@/components/ui/card";
import carvenGaming from "@/assets/portfolio/carven_gaming_arena.png";
import swiftpayBusiness from "@/assets/portfolio/swiftpay_business.png";
import crimsonCocktail from "@/assets/portfolio/crimson_vibe_cocktail.png";
import happyNewMonth from "@/assets/portfolio/happy_new_month_july.png";

const services = [
  {
    title: "Video Editing",
    description: "Professional editing for short-form content (Reels, Shorts, TikTok) and long-form videos (YouTube, IGTV). We craft compelling stories that captivate your audience.",
    icon: carvenGaming,
  },
  {
    title: "Graphic Design",
    description: "Eye-catching branded visuals, logos, campaigns, and carousel posts that make your brand stand out and resonate with your target audience.",
    icon: swiftpayBusiness,
  },
  {
    title: "Social Media Management",
    description: "Stunning animations, motion graphics, and creative edits that add that 'wow' factor to your content and leave lasting impressions.",
    icon: crimsonCocktail,
  },
  {
    title: "Social Media Marketing",
    description: "Strategic content creation and management that grows your online presence, engages followers, and drives meaningful results.",
    icon: happyNewMonth,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand and engage your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
