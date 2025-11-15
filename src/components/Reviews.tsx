import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import adamZlyere from "@/assets/adam-zlyere.jpg";
import deejayEm from "@/assets/deejay-em.jpg";
import hannatu from "@/assets/hannatu.jpg";

const reviews = [
  {
    name: "Adam Zlyere",
    role: "Founder",
    company: "Crush Bar",
    review: "Working with Jollof Creative has been one of the best decisions I've made for my brand. The team understands my vision, brings fresh creative ideas, and delivers consistently high-quality content every single time. Their attention to detail, fast turnaround, and ability to translate concepts into powerful visuals is unmatched. Jollof Creative doesn't just execute — they elevate your brand. I highly recommend them to anyone who wants professional, reliable, and truly exceptional creative work.",
    rating: 5,
    image: adamZlyere,
  },
  {
    name: "Deejay Em",
    role: "Owner",
    company: "Wax Cocktail Bar",
    review: "Working with Jollof Creative feels like having my own in-house creative squad. They get my style, they understand the energy I want my brand to carry, and they always pull up with visuals that hit the mark. From quick promo flyers to full hype videos, they keep everything sharp, clean, and professional. No stress, no back-and-forth — just solid delivery every time. These guys know the entertainment game, and it shows.",
    rating: 5,
    image: deejayEm,
  },
  {
    name: "Hannatu",
    role: "Founder",
    company: "Wellpath",
    review: "For years, I had the vision for this platform, but bringing it to life felt impossible. I knew what I wanted, but I didn't know where to start or how to structure it. Everything changed when I met Jollof Creative. They didn't just design and build the platform — they understood my dream, shaped it, and guided me through every step. Working with them gave me the confidence, clarity, and support I had been searching for. Today, my idea is finally real, and I owe that to their dedication and creativity.",
    rating: 5,
    image: hannatu,
  },
  {
    name: "David Thompson",
    role: "Brand Manager",
    company: "Global Brands Co.",
    review: "Outstanding quality and attention to detail. Their graphic design work elevated our entire brand identity. We couldn't be happier with the results!",
    rating: 5,
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Client <span className="bg-gradient-hero bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-accent fill-accent"
                    size={20}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                {review.review}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {review.image ? (
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {review.role} at {review.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
