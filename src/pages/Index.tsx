
import React from 'react';
import Navbar from '@/components/Navbar';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-anime-dark py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-3">Community Recommendations</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share and discover recommendations from the community. No account needed!
            </p>
          </div>
        </div>
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
