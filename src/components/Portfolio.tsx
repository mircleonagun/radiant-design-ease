import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, Sparkles, Download, Eye } from "lucide-react";
import { toast } from "sonner";

// Import video thumbnails
import videoThumbAcefx from "@/assets/video-thumbnail-acefx.png";
import videoThumbPapaJones from "@/assets/video-thumbnail-papa-jones.png";
import videoThumb3 from "@/assets/video-thumbnail-3.jpg";
import videoThumb4 from "@/assets/video-thumbnail-4.jpg";

// Import portfolio images
import guidanceJourney from "@/assets/portfolio/guidance_makes_the_journey_short.png";
import carvenGaming from "@/assets/portfolio/carven_gaming_arena.png";
import clanWar from "@/assets/portfolio/clan_war_invite.png";
import crimsonVibe from "@/assets/portfolio/crimson_vibe_cocktail.png";
import mangoCooler from "@/assets/portfolio/mango_cooler.png";
import mentalHealth from "@/assets/portfolio/mental_health_convo.png";
import strategyMindset from "@/assets/portfolio/strategy_mindset.png";
import swiftpay from "@/assets/portfolio/swiftpay_business.png";
import mentalHealthNew from "@/assets/portfolio/100_talents_mental_health.png";
import prettyBouji from "@/assets/portfolio/wax_pretty_bouji.png";
import swiftpayChristmas from "@/assets/portfolio/swiftpay_christmas.png";
import tecnoBattle from "@/assets/portfolio/tecno_battle_royale.png";

// Import social media management images
import img6832 from "@/assets/portfolio/img_6832.png";
import img6833 from "@/assets/portfolio/img_6833.png";
import img7640 from "@/assets/portfolio/img_7640.png";
import img7639 from "@/assets/portfolio/img_7639.png";
import img7638 from "@/assets/portfolio/img_7638.png";

// Import ACEFX Academy graphics
import acefxJuly from "@/assets/portfolio/acefx_happy_new_month_july.png";
import acefxJune from "@/assets/portfolio/acefx_happy_new_month_june.png";
import acefxMay from "@/assets/portfolio/acefx_happy_new_month_may.png";
import acefxTraders from "@/assets/portfolio/acefx_best_traders.png";
import acefxCharts from "@/assets/portfolio/acefx_charts_fundamentals.jpg";

// Import Chale and NASENI graphics
import chaleLetsGo from "@/assets/portfolio/chale_lets_go_new.png";
import naseni04Days from "@/assets/portfolio/naseni_04_days.jpg";
import naseni02Days from "@/assets/portfolio/naseni_02_days.jpg";

// Import VerasityLabs and Daper graphics
import verasityReplies from "@/assets/portfolio/verasity_faster_replies.jpg";
import verasityMessages from "@/assets/portfolio/verasity_stop_missing.jpg";
import daperSeptember from "@/assets/portfolio/daper_september_friendship.jpg";
import daperAugust from "@/assets/portfolio/daper_august.jpg";

const graphicsPortfolio = [
  { title: "100 Talents - Men's Mental Health", description: "Social Awareness Campaign", image: mentalHealthNew, brand: "Jollof Creative" },
  { title: "WAX Cocktail Bar - Pretty & Bouji", description: "Event Promotion Design", image: prettyBouji, brand: "Jollof Creative" },
  { title: "SwiftPay - Christmas Campaign", description: "Holiday Marketing Design", image: swiftpayChristmas, brand: "Jollof Creative" },
  { title: "TECNO - Battle Royale Gaming", description: "Gaming Event Promotion", image: tecnoBattle, brand: "Jollof Creative" },
  { title: "Carven Gaming Arena", description: "Gaming Event Branding", image: carvenGaming, brand: "Jollof Creative" },
  { title: "Spartan League", description: "Esports Tournament Design", image: clanWar, brand: "Jollof Creative" },
  { title: "Crush Cocktails", description: "Beverage Marketing", image: crimsonVibe, brand: "Jollof Creative" },
  { title: "Wax Cocktail Bar", description: "Menu & Promotion Design", image: mangoCooler, brand: "Jollof Creative" },
  { title: "Swiftpay Business", description: "Fintech App Marketing", image: swiftpay, brand: "Jollof Creative" },
  { title: "Guidance Makes The Journey Short", description: "Motivational Design", image: guidanceJourney, brand: "Jollof Creative" },
  { title: "Mental Health Awareness", description: "Community Initiative", image: mentalHealth, brand: "Jollof Creative" },
  { title: "Strategy & Mindset", description: "Leadership Content", image: strategyMindset, brand: "Jollof Creative" },
  { title: "ACEFX - Happy New Month July", description: "Monthly Greeting Design", image: acefxJuly, brand: "ACEFX Academy" },
  { title: "ACEFX - Happy New Month June", description: "Monthly Greeting Design", image: acefxJune, brand: "ACEFX Academy" },
  { title: "ACEFX - Happy New Month May", description: "Monthly Greeting Design", image: acefxMay, brand: "ACEFX Academy" },
  { title: "ACEFX - Best Traders", description: "Trading Achievement Showcase", image: acefxTraders, brand: "ACEFX Academy" },
  { title: "ACEFX - Charts & Fundamentals", description: "Educational Content Design", image: acefxCharts, brand: "ACEFX Academy" },
  { title: "Chale Wote - Let's Go", description: "Festival Promotion", image: chaleLetsGo, brand: "Chale Wote Festival" },
  { title: "NASENI Innovate - 4 Days", description: "Innovation Summit Countdown", image: naseni04Days, brand: "NASENI" },
  { title: "NASENI Innovate - 2 Days", description: "Innovation Summit Countdown", image: naseni02Days, brand: "NASENI" },
  { title: "Verasity - Faster Replies", description: "Communication Feature Highlight", image: verasityReplies, brand: "VerasityLabs" },
  { title: "Verasity - Stop Missing Messages", description: "App Feature Promotion", image: verasityMessages, brand: "VerasityLabs" },
  { title: "Daper - September Friendship", description: "Monthly Theme Design", image: daperSeptember, brand: "Daper" },
  { title: "Daper - August Theme", description: "Monthly Design", image: daperAugust, brand: "Daper" },
];

const socialMediaPortfolio = [
  { title: "Social Media Campaign 1", description: "Engagement-focused content", image: img6832 },
  { title: "Social Media Campaign 2", description: "Brand awareness content", image: img6833 },
  { title: "Social Media Campaign 3", description: "Product showcase", image: img7640 },
  { title: "Social Media Campaign 4", description: "Community engagement", image: img7639 },
  { title: "Social Media Campaign 5", description: "Seasonal campaign", image: img7638 },
];

export const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; description: string } | null>(null);

  const handleDownload = async (imageUrl: string, fileName: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("Image downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download image");
      console.error("Download error:", error);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="videos" className="gap-2">
              <Play className="w-4 h-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="graphics" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Graphics
            </TabsTrigger>
            <TabsTrigger value="social" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Social Media
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img 
                    src={videoThumbAcefx} 
                    alt="AceFX Trading Video"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="lg"
                      className="rounded-full"
                      onClick={() => window.open("https://youtu.be/sX3yQsUDLMw?si=zIE4JscBPB-yZM0P", "_blank")}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Now
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img 
                    src={videoThumbPapaJones}
                    alt="Papa Jones Showroom Video"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="lg"
                      className="rounded-full"
                      onClick={() => window.open("https://youtube.com/shorts/XNJWv_qDkxc?si=LD6JxeUl5P2S-9-Q", "_blank")}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Now
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img 
                    src={videoThumb3}
                    alt="Creative Video 3"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="lg"
                      className="rounded-full"
                      onClick={() => window.open("#", "_blank")}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Now
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img 
                    src={videoThumb4}
                    alt="Creative Video 4"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="lg"
                      className="rounded-full"
                      onClick={() => window.open("#", "_blank")}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Now
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="graphics" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {graphicsPortfolio.map((item, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedImage({ image: item.image, title: item.title, description: item.description })}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleDownload(item.image, `${item.title}.png`)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {socialMediaPortfolio.map((item, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedImage({ image: item.image, title: item.title, description: item.description })}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleDownload(item.image, `${item.title}.png`)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogTitle>{selectedImage?.title}</DialogTitle>
          {selectedImage && (
            <div className="space-y-4">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full rounded-lg"
              />
              <p className="text-muted-foreground">{selectedImage.description}</p>
              <Button
                className="w-full"
                onClick={() => handleDownload(selectedImage.image, `${selectedImage.title}.png`)}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Image
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
