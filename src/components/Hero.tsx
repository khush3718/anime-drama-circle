
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-anime-dark via-anime-primary/10 to-anime-dark z-0" />
      
      {/* Hero content */}
      <div className="container mx-auto relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="anime-title">Track and discover</span>
              <br />
              <span className="text-white">your next favorite show</span>
            </h1>
            
            <p className="text-lg text-anime-light max-w-md">
              Join our community to track your anime and K-drama journey, discover new shows, and share recommendations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-anime-primary hover:bg-anime-primary/90 text-white">
                Browse Shows
              </Button>
              <Button variant="outline" className="border-anime-secondary text-anime-secondary hover:bg-anime-secondary/10">
                Join Community
              </Button>
            </div>
          </div>
          
          {/* Floating images */}
          <div className="relative h-[300px] md:h-[400px] hidden md:block">
            {/* Image placeholders */}
            <div className="absolute top-0 right-0 w-48 h-64 bg-anime-primary/90 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute top-20 right-32 w-48 h-64 bg-anime-secondary/90 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-40 right-16 w-48 h-64 bg-anime-accent/90 rounded-lg shadow-lg animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
