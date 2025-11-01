import { Card } from "@/components/ui/card";
import carvenGaming from "@/assets/portfolio/carven_gaming_arena.png";
import swiftpayBusiness from "@/assets/portfolio/swiftpay_business.png";
import crimsonCocktail from "@/assets/portfolio/crimson_vibe_cocktail.png";
import happyNewMonth from "@/assets/portfolio/happy_new_month_july.png";

const services = [
  {
    title: "Social Media Marketing",
    description: "We help brands grow with strategy, storytelling, and campaigns that convert.",
    details: [
      "Strategy development (for 1–4 platforms)",
      "Audience research and targeting",
      "Content calendar planning",
      "Paid ads setup & management",
      "Influencer campaign management"
    ],
    icon: happyNewMonth,
  },
  {
    title: "Graphic Design",
    description: "Your brand's visual identity — done beautifully and consistently.",
    details: [
      "Logo design and brand identity",
      "Social media graphics",
      "Marketing materials",
      "Branded templates"
    ],
    icon: swiftpayBusiness,
  },
  {
    title: "Video Editing",
    description: "From reels to full productions, we make your brand move.",
    details: [
      "Short-form video editing (Reels, Shorts, TikToks)",
      "Long-form editing (YouTube, podcasts, product explainers)",
      "Motion graphics, intros/outros",
      "Animated text and transitions"
    ],
    icon: carvenGaming,
  },
  {
    title: "Content Strategy & Branding",
    description: "We give your brand direction, voice, and identity — from the ground up.",
    details: [
      "Brand discovery and messaging",
      "Tone of voice and storytelling guide",
      "Content strategy blueprint",
      "Social content planning"
    ],
    icon: crimsonCocktail,
  },
  {
    title: "Social Media Management",
    description: "We manage your accounts day-to-day to keep your brand consistent and active.",
    details: [
      "Daily posting and scheduling",
      "Trend-based content ideas",
      "Real-time response and engagement",
      "Monthly reporting and insights"
    ],
    icon: crimsonCocktail,
  },
  {
    title: "Web Design & Development",
    description: "We build sleek, modern websites that showcase your brand beautifully and perform seamlessly across all devices.",
    details: [
      "Custom website design (no templates, fully branded)",
      "Responsive development (optimized for mobile, tablet, and desktop)",
      "SEO-friendly structure and copy setup",
      "Integration with social media, email, and analytics tools",
      "Maintenance and performance updates"
    ],
    icon: swiftpayBusiness,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Creative Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything Your Brand Needs To Stand Out — All In One Place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border group animate-fade-in-up"
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
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-primary mb-2">Includes:</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
