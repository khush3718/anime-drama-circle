
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
