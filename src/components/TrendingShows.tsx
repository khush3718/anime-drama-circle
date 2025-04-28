
import React from 'react';
import ShowCard, { ShowProps } from './ShowCard';

interface TrendingShowsProps {
  title: string;
  shows: ShowProps[];
}

const TrendingShows: React.FC<TrendingShowsProps> = ({ title, shows }) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {shows.map((show) => (
            <ShowCard key={show.id} {...show} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingShows;
