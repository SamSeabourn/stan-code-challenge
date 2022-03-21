export type Program = {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  rating: 'M' | 'MA 15+' | 'PG' | 'R 18+';
  genre: string;
  year: number;
  language: string;
};

export type Route = {
  pathName: string;
  component: React.ReactNode;
};
