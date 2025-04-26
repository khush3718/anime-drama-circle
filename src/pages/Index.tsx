
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrendingShows from '@/components/TrendingShows';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';
import { trendingShows, recentlyAddedShows } from '@/data/shows';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrendingShows title="Trending Shows" shows={trendingShows} />
        <CommunitySection />
        <TrendingShows title="Recently Added" shows={recentlyAddedShows} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
