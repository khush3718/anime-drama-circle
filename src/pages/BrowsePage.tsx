
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShowCard from '@/components/ShowCard';
import { animeShows, kdramaShows } from '@/data/shows';

const BrowsePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  // Filter shows based on search query
  const filteredAnime = animeShows.filter(show => 
    show.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredKdrama = kdramaShows.filter(show => 
    show.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const allShows = [...animeShows, ...kdramaShows].filter(show => 
    show.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Search section */}
        <div className="bg-anime-dark py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Find Your Next Favorite Show</h1>
            
            {/* Search bar */}
            <div className="max-w-2xl mx-auto flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
              <Search className="h-5 w-5 ml-2 text-muted-foreground flex-shrink-0" />
              <Input 
                type="text"
                placeholder="Search shows..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
              />
              <Button>Search</Button>
            </div>
          </div>
        </div>
        
        {/* Browse content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="all">
            <TabsList className="w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="all">All Shows</TabsTrigger>
              <TabsTrigger value="anime">Anime</TabsTrigger>
              <TabsTrigger value="kdrama">K-Drama</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {allShows.map((show) => (
                  <ShowCard key={show.id} {...show} />
                ))}
              </div>
              
              {allShows.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No shows found matching your search.</p>
                  <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="anime" className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredAnime.map((show) => (
                  <ShowCard key={show.id} {...show} />
                ))}
              </div>
              
              {filteredAnime.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No anime found matching your search.</p>
                  <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="kdrama" className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredKdrama.map((show) => (
                  <ShowCard key={show.id} {...show} />
                ))}
              </div>
              
              {filteredKdrama.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No K-dramas found matching your search.</p>
                  <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BrowsePage;
