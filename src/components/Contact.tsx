import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters")
});

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters")
});

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast.error(firstError.message);
      return;
    }

    // In a real app, you would send this data to a backend service
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate newsletter email
    const validation = newsletterSchema.safeParse({ email: newsletterEmail });
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast.error(firstError.message);
      return;
    }

    // In a real app, you would send this to a newsletter service
    toast.success("Successfully subscribed to newsletter!");
    setNewsletterEmail("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your creative vision? Let's start a conversation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border shadow-md animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-6 bg-gradient-card border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <a
                    href="mailto:jollofcreative@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jollofcreative@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <a
                    href="tel:+2347077265685"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +234 707 726 5685
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Creative District<br />
                    Digital Avenue, CA 90210
                  </p>
                </div>
              </div>
            </Card>

            {/* Newsletter Signup */}
            <Card className="p-6 bg-gradient-hero border-0 shadow-glow">
              <h3 className="font-bold text-xl text-primary-foreground mb-3">
                Stay Updated
              </h3>
              <p className="text-primary-foreground/90 mb-4 text-sm">
                Subscribe to our newsletter for creative tips and industry trends
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                  required
                />
                <Button
                  type="submit"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 flex-shrink-0"
                >
                  Subscribe
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
