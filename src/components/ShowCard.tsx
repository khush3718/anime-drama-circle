
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';

export interface ShowProps {
  id: string;
  title: string;
  type: 'anime' | 'kdrama';
  rating: number;
  year?: number;
  genres?: string[];
}

const ShowCard: React.FC<ShowProps> = ({ 
  id, 
  title, 
  type, 
  rating, 
  year, 
  genres 
}) => {
  return (
    <Link to={`/${id}`} className="block p-4 bg-card rounded-lg border border-anime-primary/10 hover:border-anime-primary/30 transition-colors">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {type === 'anime' ? 'Anime' : 'K-Drama'}
          </span>
          <button className="p-1.5 bg-black/40 hover:bg-anime-secondary rounded-full transition-colors">
            <Heart className="h-3.5 w-3.5 text-white" />
          </button>
        </div>
        
        <h3 className="font-medium line-clamp-1">{title}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
          {year && <span className="text-xs text-muted-foreground">{year}</span>}
        </div>
        
        {genres && (
          <div className="flex flex-wrap gap-1">
            {genres.map(genre => (
              <span key={genre} className="text-xs bg-anime-primary/10 px-2 py-0.5 rounded">
                {genre}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ShowCard;
