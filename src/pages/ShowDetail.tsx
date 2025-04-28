
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { animeShows, kdramaShows } from '@/data/shows';

const ShowDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the show details based on id from all shows
  const allShows = [...animeShows, ...kdramaShows];
  const show = allShows.find(show => show.id === id);
  
  if (!show) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Show not found</h1>
        <Link to="/" className="text-anime-primary hover:underline">
          Return to homepage
        </Link>
      </div>
    );
  }

  // Mock data for reviews
  const reviews = [
    {
      id: 1,
      user: {
        name: 'AnimeExpert',
        avatar: 'https://i.pravatar.cc/150?img=1'
      },
      rating: 9.2,
      comment: 'This show is absolutely amazing! The character development is top-notch and the animation quality is stunning.',
      likes: 42,
      dislikes: 3,
      timestamp: '2 weeks ago'
    },
    {
      id: 2,
      user: {
        name: 'DramaLover2023',
        avatar: 'https://i.pravatar.cc/150?img=2'
      },
      rating: 8.7,
      comment: 'Great show, but the pacing in the middle episodes could be better. Overall though, it\'s a must-watch!',
      likes: 28,
      dislikes: 5,
      timestamp: '1 month ago'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative">
          {/* Background gradient instead of image */}
          <div className="absolute inset-0 bg-gradient-to-b from-anime-primary/30 to-background"></div>
          
          {/* Content */}
          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Show placeholder instead of poster */}
              <div className="flex-shrink-0">
                <div 
                  className="w-full max-w-[300px] h-[400px] rounded-lg shadow-lg mx-auto md:mx-0 bg-anime-primary/20 flex items-center justify-center"
                >
                  <span className="text-3xl font-bold text-anime-primary">
                    {show.title.charAt(0)}
                  </span>
                </div>
              </div>
              
              {/* Details */}
              <div className="flex-grow">
                <div className="mb-4">
                  <span className="inline-block bg-anime-primary/90 text-white text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-md mb-2">
                    {show.type === 'anime' ? 'Anime' : 'K-Drama'}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold">{show.title}</h1>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{show.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-muted-foreground">|</span>
                  <span>{show.year}</span>
                  <span className="text-muted-foreground">|</span>
                  <span>{show.genres?.join(', ')}</span>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {/* Placeholder description */}
                  This popular {show.type === 'anime' ? 'anime' : 'K-drama'} has captured the hearts of many fans worldwide. With its compelling story and memorable characters, it continues to be highly rated in the community.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <Button className="bg-anime-primary hover:bg-anime-primary/90">
                    <Heart className="h-4 w-4 mr-2" /> Add to Watchlist
                  </Button>
                  <Button variant="outline" className="border-anime-secondary text-anime-secondary hover:bg-anime-secondary/10">
                    <Star className="h-4 w-4 mr-2" /> Rate Show
                  </Button>
                </div>
                
                {/* Status tracking (for demonstration) */}
                <div className="bg-card p-4 rounded-lg border border-anime-primary/10">
                  <h3 className="font-medium mb-2">Your Progress</h3>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">-</div>
                      <div className="text-xs text-muted-foreground">Status</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">-</div>
                      <div className="text-xs text-muted-foreground">Episodes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">-</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs section */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="about">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="recommendations">Similar Shows</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-3">Synopsis</h2>
                <p className="text-muted-foreground">
                  {/* Placeholder synopsis */}
                  This is a placeholder synopsis for {show.title}. In a real application, this would contain a detailed description of the show's plot without spoilers, setting the context for potential viewers.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-xl font-bold mb-3">Characters</h2>
                <p className="text-muted-foreground">
                  Character information would be displayed here, including main characters, voice actors, and their roles in the show.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-xl font-bold mb-3">Details</h2>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  <div className="text-muted-foreground">Type:</div>
                  <div>{show.type === 'anime' ? 'Anime' : 'K-Drama'}</div>
                  
                  <div className="text-muted-foreground">Year:</div>
                  <div>{show.year}</div>
                  
                  <div className="text-muted-foreground">Genres:</div>
                  <div>{show.genres?.join(', ')}</div>
                  
                  <div className="text-muted-foreground">Rating:</div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    {show.rating.toFixed(1)}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Community Reviews</h2>
                <Button>Write a Review</Button>
              </div>
              
              <div className="space-y-6">
                {reviews.map(review => (
                  <div key={review.id} className="bg-card p-4 rounded-lg border border-anime-primary/10">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={review.user.avatar} alt={review.user.name} />
                        <AvatarFallback>{review.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-grow space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.user.name}</span>
                            <span className="text-xs text-muted-foreground">{review.timestamp}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-anime-dark px-2 py-1 rounded-full">
                            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{review.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground">{review.comment}</p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <button className="flex items-center gap-1 text-muted-foreground hover:text-white transition-colors">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{review.likes}</span>
                          </button>
                          
                          <button className="flex items-center gap-1 text-muted-foreground hover:text-white transition-colors">
                            <ThumbsDown className="h-4 w-4" />
                            <span>{review.dislikes}</span>
                          </button>
                          
                          <button className="flex items-center gap-1 text-muted-foreground hover:text-white transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span>Reply</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-4">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="recommendations" className="space-y-6">
              <h2 className="text-xl font-bold mb-4">Similar Shows</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {/* Show similar shows based on genre match */}
                {(show.type === 'anime' ? animeShows : kdramaShows)
                  .filter(s => s.id !== show.id)
                  .slice(0, 5)
                  .map(similarShow => (
                    <Link 
                      key={similarShow.id} 
                      to={`/${similarShow.id}`}
                      className="p-4 bg-card rounded-lg border border-anime-primary/10 hover:border-anime-primary/30 transition-colors"
                    >
                      <div className="space-y-2">
                        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {similarShow.type === 'anime' ? 'Anime' : 'K-Drama'}
                        </span>
                        <h3 className="font-medium line-clamp-1">{similarShow.title}</h3>
                        <div className="flex items-center">
                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm">{similarShow.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShowDetail;
