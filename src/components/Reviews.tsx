import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Tech Innovations Inc.",
    review: "Jollof Creative transformed our social media presence completely. Their video editing skills are exceptional, and they always deliver on time. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartUp Ventures",
    review: "The special effects and motion graphics they created for our product launch were absolutely stunning. Professional, creative, and a pleasure to work with.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator",
    company: "Creative Studios",
    review: "Working with Jollof Creative has been amazing! They understand our vision and bring it to life with their incredible design and editing expertise.",
    rating: 5,
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
                "{review.review}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
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
