
export interface ShowProps {
  id: string;
  title: string;
  type: 'anime' | 'kdrama';
  rating: number;
}

// Sample recommendations for initial display
export const sampleRecommendations = [
  {
    id: "1",
    title: "Attack on Titan",
    type: "anime",
    rating: 9.5
  },
  {
    id: "2",
    title: "Squid Game",
    type: "kdrama",
    rating: 9.0
  }
];
