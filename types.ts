
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: string;
  type: 'post' | 'historia' | 'video';
  imageUrl: string;
  title: string;
  videoUrl?: string; 
  category: string;
}

export interface BeforeAfterPair {
  id: string;
  before: string;
  after: string;
  title: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
