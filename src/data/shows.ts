import { ShowProps } from '@/components/ShowCard';

// Mock data for anime shows
export const animeShows: ShowProps[] = [
  {
    id: 'attack-on-titan',
    title: 'Attack on Titan',
    type: 'anime',
    rating: 9.4,
    year: 2013,
    genres: ['Action', 'Drama', 'Fantasy']
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer',
    type: 'anime',
    rating: 9.2,
    year: 2019,
    genres: ['Action', 'Fantasy']
  },
  {
    id: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    type: 'anime',
    rating: 9.0,
    year: 2020,
    genres: ['Action', 'Fantasy']
  },
  {
    id: 'one-piece',
    title: 'One Piece',
    type: 'anime',
    rating: 9.3,
    year: 1999,
    genres: ['Action', 'Adventure', 'Comedy']
  },
  {
    id: 'fullmetal-alchemist',
    title: 'Fullmetal Alchemist: Brotherhood',
    type: 'anime',
    rating: 9.5,
    year: 2009,
    genres: ['Action', 'Adventure', 'Drama']
  },
  {
    id: 'spy-x-family',
    title: 'Spy x Family',
    type: 'anime',
    rating: 8.8,
    year: 2022,
    genres: ['Action', 'Comedy']
  }
];

// Mock data for K-drama shows
export const kdramaShows: ShowProps[] = [
  {
    id: 'squid-game',
    title: 'Squid Game',
    type: 'kdrama',
    rating: 9.0,
    year: 2021,
    genres: ['Drama', 'Thriller', 'Mystery']
  },
  {
    id: 'crash-landing-on-you',
    title: 'Crash Landing on You',
    type: 'kdrama',
    rating: 8.9,
    year: 2019,
    genres: ['Comedy', 'Drama', 'Romance']
  },
  {
    id: 'extraordinary-attorney-woo',
    title: 'Extraordinary Attorney Woo',
    type: 'kdrama',
    rating: 8.8,
    year: 2022,
    genres: ['Drama', 'Life', 'Law']
  },
  {
    id: 'all-of-us-are-dead',
    title: 'All of Us Are Dead',
    type: 'kdrama',
    rating: 8.6,
    year: 2022,
    genres: ['Action', 'Drama', 'Horror']
  },
  {
    id: 'vincenzo',
    title: 'Vincenzo',
    type: 'kdrama',
    rating: 8.7,
    year: 2021,
    genres: ['Comedy', 'Crime', 'Drama']
  },
  {
    id: 'business-proposal',
    title: 'Business Proposal',
    type: 'kdrama',
    rating: 8.5,
    year: 2022,
    genres: ['Comedy', 'Romance']
  }
];

// Combined trending shows
export const trendingShows: ShowProps[] = [
  animeShows[0],
  kdramaShows[0],
  animeShows[1],
  kdramaShows[1],
  animeShows[2],
  kdramaShows[2],
];

// Combined recently added shows
export const recentlyAddedShows: ShowProps[] = [
  animeShows[5],
  kdramaShows[3],
  animeShows[3],
  kdramaShows[4],
  animeShows[4],
  kdramaShows[5],
];
