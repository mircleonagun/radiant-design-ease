import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, ImageIcon, Sparkles } from "lucide-react";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
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
              Special Effects
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
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card
                  key={item}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 relative flex items-center justify-center">
                    <ImageIcon
                      className="text-accent group-hover:scale-110 transition-transform"
                      size={48}
                    />
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/0 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Design {item}</h3>
                    <p className="text-sm text-muted-foreground">
                      Brand visual & campaign
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="effects" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card
                  key={item}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/30 relative flex items-center justify-center">
                    <Sparkles
                      className="text-primary group-hover:scale-110 group-hover:rotate-12 transition-all"
                      size={48}
                    />
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/0 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Effect {item}</h3>
                    <p className="text-sm text-muted-foreground">
                      Motion graphics & animation
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
