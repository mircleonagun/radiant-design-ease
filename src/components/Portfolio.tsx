import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, ImageIcon, Sparkles, Download, Eye } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { toast } from "sonner";

// Import portfolio images
import guidanceJourney from "@/assets/portfolio/guidance_makes_the_journey_short.png";
import happyJuly from "@/assets/portfolio/happy_new_month_july.png";
import nigeriaAustralia from "@/assets/portfolio/nigeria_to_australia.png";
import carvenGaming from "@/assets/portfolio/carven_gaming_arena.png";
import clanWar from "@/assets/portfolio/clan_war_invite.png";
import crimsonVibe from "@/assets/portfolio/crimson_vibe_cocktail.png";
import mangoCooler from "@/assets/portfolio/mango_cooler.png";
import mentalHealth from "@/assets/portfolio/mental_health_convo.png";
import strategyMindset from "@/assets/portfolio/strategy_mindset.png";
import swiftpay from "@/assets/portfolio/swiftpay_business.png";

// Import social media management images
import img6832 from "@/assets/portfolio/img_6832.png";
import img6833 from "@/assets/portfolio/img_6833.png";
import img7640 from "@/assets/portfolio/img_7640.png";
import img7639 from "@/assets/portfolio/img_7639.png";
import img7638 from "@/assets/portfolio/img_7638.png";

const graphicsPortfolio = [
  { title: "ACEFX Academy - Guidance", description: "Educational Brand Campaign", image: guidanceJourney },
  { title: "Daper - July Campaign", description: "Monthly Celebration Design", image: happyJuly },
  { title: "African Connect", description: "International Delivery Service", image: nigeriaAustralia },
  { title: "Carven Gaming Arena", description: "Gaming Event Branding", image: carvenGaming },
  { title: "Spartan League", description: "Esports Tournament Design", image: clanWar },
  { title: "Crush Cocktails", description: "Beverage Marketing", image: crimsonVibe },
  { title: "Wax Cocktail Bar", description: "Menu & Promotion Design", image: mangoCooler },
  { title: "100 Talents Mental Health", description: "Social Awareness Campaign", image: mentalHealth },
  { title: "ACEFX Academy - Mindset", description: "Trading Psychology Branding", image: strategyMindset },
  { title: "Swiftpay Business", description: "Fintech App Marketing", image: swiftpay },
];

const socialMediaPortfolio = [
  { title: "Social Campaign 1", description: "Engaging Social Media Content", image: img6832 },
  { title: "Social Campaign 2", description: "Brand Storytelling", image: img6833 },
  { title: "Social Campaign 3", description: "Community Engagement", image: img7640 },
  { title: "Social Campaign 4", description: "Content Strategy", image: img7639 },
  { title: "Social Campaign 5", description: "Digital Marketing", image: img7638 },
];

const FloatingShape = () => {
  return (
    <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#ff6b35" wireframe />
    </Sphere>
  );
};

export const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; description: string } | null>(null);

  const handleDownload = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("Image downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download image");
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* 3D Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingShape />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our creative work across video, graphics, and special effects
          </p>
        </div>

        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="videos" className="text-base">
              <Play className="mr-2" size={18} />
              Videos
            </TabsTrigger>
            <TabsTrigger value="graphics" className="text-base">
              <ImageIcon className="mr-2" size={18} />
              Graphics
            </TabsTrigger>
            <TabsTrigger value="effects" className="text-base">
              <Sparkles className="mr-2" size={18} />
              Social Media
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card
                  key={item}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative flex items-center justify-center">
                    <Play
                      className="text-primary group-hover:scale-110 transition-transform"
                      size={48}
                    />
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/0 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Video Project {item}</h3>
                    <p className="text-sm text-muted-foreground">
                      Short-form creative content
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="graphics" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {graphicsPortfolio.map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setSelectedImage(item)}
                        className="gap-2"
                      >
                        <Eye size={16} />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(item.image, `${item.title.toLowerCase().replace(/\s+/g, '-')}.png`)}
                        className="gap-2"
                      >
                        <Download size={16} />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="effects" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialMediaPortfolio.map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setSelectedImage(item)}
                        className="gap-2"
                      >
                        <Eye size={16} />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(item.image, `${item.title.toLowerCase().replace(/\s+/g, '-')}.png`)}
                        className="gap-2"
                      >
                        <Download size={16} />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Image Viewer Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            <DialogTitle className="sr-only">
              {selectedImage?.title || "Portfolio Image"}
            </DialogTitle>
            {selectedImage && (
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
                <Button
                  onClick={() => handleDownload(selectedImage.image, `${selectedImage.title.toLowerCase().replace(/\s+/g, '-')}.png`)}
                  className="w-full gap-2"
                >
                  <Download size={18} />
                  Download Image
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
