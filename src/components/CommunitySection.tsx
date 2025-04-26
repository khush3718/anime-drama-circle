
import React, { useState } from 'react';
import { Star, MessageCircle, Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AddRecommendationSheet from './AddRecommendationSheet';
import AddNoteSheet from './AddNoteSheet';

interface RecommendationProps {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  show: {
    title: string;
    type: 'anime' | 'kdrama';
    image: string;
  };
  comment: string;
  rating: number;
  timestamp: string;
  notes?: { text: string; user: string }[];
}

const CommunityRecommendation: React.FC<RecommendationProps> = ({
  user,
  show,
  comment,
  rating,
  timestamp,
  notes
}) => {
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);

  return (
    <Card className="bg-card border-anime-primary/10 hover:border-anime-primary/30 transition-colors">
      <CardContent className="p-4 space-y-4">
        {/* User and Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-anime-primary/20">
                {user.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{user.name}</span>
          </div>
          <div className="flex items-center gap-1 bg-anime-dark px-2 py-1 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}/10</span>
          </div>
        </div>

        {/* Show Info */}
        <div className="flex gap-4">
          <img 
            src={show.image} 
            alt={show.title} 
            className="w-24 h-32 object-cover rounded"
          />
          <div>
            <h3 className="font-medium mb-1">{show.title}</h3>
            <span className="text-xs text-muted-foreground">{show.type}</span>
            <p className="text-sm mt-2 text-muted-foreground">{comment}</p>
          </div>
        </div>

        {/* Notes/Comments Section */}
        {notes && notes.length > 0 && (
          <div className="border-t pt-3 mt-3">
            <div className="text-sm font-medium mb-2">Notes:</div>
            <div className="space-y-2">
              {notes.map((note, i) => (
                <div key={i} className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{note.user}:</span> {note.text}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-muted-foreground">{timestamp}</span>
          <Button variant="ghost" size="sm" className="gap-1" onClick={() => setIsAddNoteOpen(true)}>
            <MessageCircle className="h-4 w-4" />
            Add Note
          </Button>
        </div>

        <AddNoteSheet open={isAddNoteOpen} onOpenChange={setIsAddNoteOpen} />
      </CardContent>
    </Card>
  );
};

const CommunitySection = () => {
  const [isAddRecommendationOpen, setIsAddRecommendationOpen] = useState(false);

  // Sample data
  const recommendations: RecommendationProps[] = [
    {
      id: "1",
      user: {
        name: "AnimeEnjoyer",
        avatar: "https://i.pravatar.cc/150?img=1"
      },
      show: {
        title: "Attack on Titan",
        type: "anime",
        image: "https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"
      },
      comment: "Must-watch series with amazing plot twists",
      rating: 9.5,
      timestamp: "2 hours ago",
      notes: [
        { user: "KDramaFan", text: "Started watching because of this recommendation - loving it!" },
        { user: "NewToAnime", text: "Is this good for beginners to anime?" }
      ]
    },
    {
      id: "2",
      user: {
        name: "DramaQueen"
      },
      show: {
        title: "Squid Game",
        type: "kdrama",
        image: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
      },
      comment: "A thrilling series that will keep you on the edge of your seat",
      rating: 9.0,
      timestamp: "1 day ago"
    }
  ];

  return (
    <section className="py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Community Recommendations</h2>
          <Button className="gap-2" onClick={() => setIsAddRecommendationOpen(true)}>
            <Plus className="h-4 w-4" />
            Add Recommendation
          </Button>
        </div>
        
        <div className="space-y-4">
          {recommendations.map(rec => (
            <CommunityRecommendation key={rec.id} {...rec} />
          ))}
        </div>

        <AddRecommendationSheet open={isAddRecommendationOpen} onOpenChange={setIsAddRecommendationOpen} />
      </div>
    </section>
  );
};

export default CommunitySection;
