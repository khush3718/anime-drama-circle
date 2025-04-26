import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MessageCircle, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { animeShows, kdramaShows } from '@/data/shows';

const CommunityPage = () => {
  // Mock community activity data
  const recommendations = [
    {
      id: '1',
      user: {
        name: 'AnimeWatcher42',
        avatar: 'https://i.pravatar.cc/150?img=1'
      },
      show: animeShows[0],
      comment: "This is one of the best anime series I've ever watched. The story gets incredibly deep and the action scenes are breathtaking.",
      rating: 9.5,
      timestamp: '3 hours ago',
      likes: 24
    },
    {
      id: '2',
      user: {
        name: 'DramaQueen',
        avatar: 'https://i.pravatar.cc/150?img=2'
      },
      show: kdramaShows[1],
      comment: 'Such a heartwarming romantic comedy. The chemistry between the leads is amazing and there are so many memorable scenes.',
      rating: 9.2,
      timestamp: '1 day ago',
      likes: 47
    },
    {
      id: '3',
      user: {
        name: 'OtakuMaster',
        avatar: 'https://i.pravatar.cc/150?img=3'
      },
      show: animeShows[2],
      comment: 'The animation quality is outstanding, and the fight choreography is on another level. Definitely a must-watch for any anime fan.',
      rating: 8.9,
      timestamp: '2 days ago',
      likes: 36
    },
    {
      id: '4',
      user: {
        name: 'K-Drama_Enthusiast',
      },
      show: kdramaShows[3],
      comment: "This show keeps you on the edge of your seat from beginning to end. It's thrilling, emotional, and has great performances.",
      rating: 8.7,
      timestamp: '3 days ago',
      likes: 29
    }
  ];
  
  // Mock discussions
  const discussions = [
    {
      id: '1',
      title: 'What anime should I watch next after Demon Slayer?',
      author: {
        name: 'NewAnimeViewer',
        avatar: 'https://i.pravatar.cc/150?img=4'
      },
      replies: 23,
      lastActivity: '1 hour ago',
      preview: 'I just finished Demon Slayer and loved it! Looking for recommendations for similar shows with great action and story.'
    },
    {
      id: '2',
      title: 'Opinions on the ending of Squid Game?',
      author: {
        name: 'ThrillSeeker',
        avatar: 'https://i.pravatar.cc/150?img=5'
      },
      replies: 47,
      lastActivity: '5 hours ago',
      preview: 'Just finished watching and I have so many thoughts about the ending. What did everyone else think? (Spoilers in discussion)'
    },
    {
      id: '3',
      title: 'Most underrated anime of 2023?',
      author: {
        name: 'AnimeConnoisseur',
      },
      replies: 18,
      lastActivity: '2 days ago',
      preview: "I feel like there are some real gems this year that aren't getting enough attention. What overlooked shows would you recommend?"
    }
  ];
  
  // Mock users to follow
  const suggestedUsers = [
    {
      id: '1',
      name: 'AnimeCritic',
      avatar: 'https://i.pravatar.cc/150?img=6',
      bio: 'Professional anime reviewer | 500+ shows watched',
      followers: 3254
    },
    {
      id: '2',
      name: 'K-DramaReviewer',
      avatar: 'https://i.pravatar.cc/150?img=7',
      bio: 'K-Drama enthusiast sharing honest reviews and recommendations',
      followers: 1879
    },
    {
      id: '3',
      name: 'OtakuLifestyle',
      avatar: 'https://i.pravatar.cc/150?img=8',
      bio: 'Daily anime & manga updates | Art collector | Cosplayer',
      followers: 2765
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-anime-dark py-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-3">Community Hub</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow anime and K-drama enthusiasts. Share recommendations, join discussions, and discover your next favorite show.
            </p>
          </div>
        </div>
        
        {/* Community content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="recommendations">
                <TabsList className="w-full max-w-md mb-6">
                  <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  <TabsTrigger value="discussions">Discussions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="recommendations" className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Latest Recommendations</h2>
                    <Button>Share a Recommendation</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {recommendations.map(rec => (
                      <div key={rec.id} className="bg-card rounded-lg border border-anime-primary/10 overflow-hidden">
                        <div className="p-4">
                          {/* User info */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={rec.user.avatar} alt={rec.user.name} />
                                <AvatarFallback className="bg-anime-primary/20 text-anime-primary text-xs">
                                  {rec.user.name.substring(0, 2).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium text-sm">{rec.user.name}</div>
                                <div className="text-xs text-muted-foreground">{rec.timestamp}</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-1 bg-anime-dark px-2 py-1 rounded-full">
                              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{rec.rating}</span>
                            </div>
                          </div>
                          
                          {/* Show info */}
                          <div className="flex gap-4 mb-4">
                            <div className="flex-shrink-0 w-20 h-28 overflow-hidden rounded">
                              <img 
                                src={rec.show.image} 
                                alt={rec.show.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <div>
                              <h3 className="font-medium mb-1">{rec.show.title}</h3>
                              <div className="text-xs text-muted-foreground mb-2">
                                {rec.show.type === 'anime' ? 'Anime' : 'K-Drama'} • {rec.show.year}
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-3">
                                {rec.comment}
                              </p>
                            </div>
                          </div>
                          
                          {/* Actions */}
                          <div className="flex items-center gap-4 text-sm">
                            <button className="flex items-center gap-1 text-muted-foreground hover:text-white transition-colors">
                              <Heart className="h-4 w-4" />
                              <span>{rec.likes}</span>
                            </button>
                            
                            <button className="flex items-center gap-1 text-muted-foreground hover:text-white transition-colors">
                              <MessageCircle className="h-4 w-4" />
                              <span>Comment</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button variant="outline">Load More</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="discussions" className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Recent Discussions</h2>
                    <Button>Start a Discussion</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {discussions.map(discussion => (
                      <div key={discussion.id} className="bg-card rounded-lg border border-anime-primary/10 p-4 transition-colors hover:border-anime-primary/30">
                        <div className="mb-3">
                          <h3 className="font-medium mb-1">{discussion.title}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                              <AvatarFallback className="bg-anime-primary/20 text-anime-primary text-xs">
                                {discussion.author.name.substring(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-muted-foreground">
                              {discussion.author.name} • {discussion.lastActivity}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {discussion.preview}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MessageCircle className="h-3.5 w-3.5" />
                            <span>{discussion.replies} replies</span>
                          </div>
                          
                          <Button variant="ghost" size="sm">View Discussion</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button variant="outline">View All Discussions</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Users to follow */}
              <div>
                <h3 className="font-medium mb-4">Suggested Users to Follow</h3>
                <div className="space-y-4">
                  {suggestedUsers.map(user => (
                    <div key={user.id} className="bg-card rounded-lg border border-anime-primary/10 p-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="bg-anime-primary/20 text-anime-primary">
                            {user.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-grow min-w-0">
                          <div className="font-medium mb-1">{user.name}</div>
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                            {user.bio}
                          </p>
                          <div className="text-xs text-muted-foreground">
                            {user.followers.toLocaleString()} followers
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <Button variant="outline" size="sm" className="w-full">Follow</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Popular tags */}
              <div>
                <h3 className="font-medium mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">#ActionAnime</Button>
                  <Button variant="outline" size="sm">#RomanticComedy</Button>
                  <Button variant="outline" size="sm">#MustWatch</Button>
                  <Button variant="outline" size="sm">#Recommendations</Button>
                  <Button variant="outline" size="sm">#NewReleases</Button>
                  <Button variant="outline" size="sm">#Classics</Button>
                  <Button variant="outline" size="sm">#Underrated</Button>
                  <Button variant="outline" size="sm">#Discussions</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CommunityPage;
