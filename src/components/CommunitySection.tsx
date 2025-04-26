
import React from 'react';
import { Star, MessageCircle, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface RecommendationProps {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  show: {
    id: string;
    title: string;
    type: 'anime' | 'kdrama';
    image: string;
  };
  comment: string;
  rating: number;
  timestamp: string;
}

const CommunityRecommendation: React.FC<RecommendationProps> = ({
  user,
  show,
  comment,
  rating,
  timestamp
}) => {
  return (
    <Card className="bg-card border-anime-primary/10 hover:border-anime-primary/30 transition-colors overflow-hidden">
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Show image */}
          <div className="flex-shrink-0 w-16 h-24 rounded overflow-hidden">
            <img 
              src={show.image} 
              alt={show.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              {/* User info */}
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-anime-primary/20 text-anime-primary text-xs">
                    {user.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs text-anime-light">{user.name}</span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 bg-anime-dark px-1.5 py-0.5 rounded-full">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs">{rating}</span>
              </div>
            </div>
            
            {/* Show title */}
            <h4 className="font-medium text-sm mb-1 line-clamp-1">
              {show.title}
            </h4>
            
            {/* Comment */}
            <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
              {comment}
            </p>
            
            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-anime-light">
              <span>{timestamp}</span>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-3 w-3" />
                <span>Reply</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CommunitySection = () => {
  // Dummy data
  const recommendations: RecommendationProps[] = [
    {
      id: '1',
      user: {
        name: 'MangaLover',
        avatar: 'https://i.pravatar.cc/150?img=1'
      },
      show: {
        id: 'attack-on-titan',
        title: 'Attack on Titan',
        type: 'anime',
        image: 'https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg'
      },
      comment: 'This is a masterpiece! The story gets so complex and the character development is amazing.',
      rating: 9.5,
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      user: {
        name: 'KDramaQueen',
      },
      show: {
        id: 'squid-game',
        title: 'Squid Game',
        type: 'kdrama',
        image: 'https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg'
      },
      comment: 'Such a thrilling show! Every episode kept me on the edge of my seat.',
      rating: 9.0,
      timestamp: '5 hours ago'
    },
    {
      id: '3',
      user: {
        name: 'AnimeFan2023',
        avatar: 'https://i.pravatar.cc/150?img=3'
      },
      show: {
        id: 'demon-slayer',
        title: 'Demon Slayer',
        type: 'anime',
        image: 'https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg'
      },
      comment: "The animation quality is breathtaking! Some of the best action scenes I've ever watched.",
      rating: 9.2,
      timestamp: '1 day ago'
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-anime-dark to-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Community Picks</h2>
          <div className="text-sm text-anime-primary cursor-pointer hover:underline">View all</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map(rec => (
            <CommunityRecommendation key={rec.id} {...rec} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
