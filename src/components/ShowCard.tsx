
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';

export interface ShowProps {
  id: string;
  title: string;
  type: 'anime' | 'kdrama';
  image: string;
  rating: number;
  year?: number;
  genres?: string[];
}

const ShowCard: React.FC<ShowProps> = ({ 
  id, 
  title, 
  type, 
  image, 
  rating, 
  year, 
  genres 
}) => {
  return (
    <Link to={`/${type}/${id}`} className="anime-card group">
      <div className="relative h-full">
        {/* Image */}
        <img 
          src={image} 
          alt={title} 
          className="anime-card-image"
        />
        
        {/* Overlay */}
        <div className="anime-card-overlay flex flex-col justify-end p-3">
          <div className="space-y-1 text-white">
            <h3 className="text-sm font-medium line-clamp-1">{title}</h3>
            
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs">{rating.toFixed(1)}</span>
            </div>
            
            {year && <p className="text-xs opacity-70">{year}</p>}
          </div>
        </div>
        
        {/* Type badge */}
        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-xs uppercase font-semibold">
          {type === 'anime' ? 'Anime' : 'K-Drama'}
        </div>
        
        {/* Like button */}
        <button className="absolute top-2 right-2 p-1.5 bg-black/40 hover:bg-anime-secondary rounded-full transition-colors">
          <Heart className="h-3.5 w-3.5 text-white" />
        </button>
      </div>
    </Link>
  );
};

export default ShowCard;
