export interface SanityPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string; // ISO date string, e.g. "2024-03-15T00:00:00Z"
  category: 'berita' | 'pengumuman';
  excerpt?: string;
  image?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  body?: any[]; // Portable Text blocks — typed loosely for now
}
