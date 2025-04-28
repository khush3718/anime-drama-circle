
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommunitySection from '@/components/CommunitySection';

const CommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-background">
        <div className="bg-anime-dark py-10 mb-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-3">Anime & K-Drama Community</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share your favorite shows and discover new recommendations from the community.
            </p>
          </div>
        </div>
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
