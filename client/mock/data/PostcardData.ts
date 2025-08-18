export interface IPostcard {
  id: string;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  location?: string;
  tags: string[];
  likes: number;
  comments: number;
  views: number;
  downloads: number;
  createdAt: string;
  isLiked: boolean;
  isSaved: boolean;
  isNew: boolean;
  isTrending: boolean;
  isFeatured: boolean;
  category: string;
  colorPalette?: string[];
  dimensions?: {
    width: number;
    height: number;
  };
}

export const postcardData: IPostcard[] = [
  {
    id: "1",
    title: "Sunset at Santorini",
    description: "Breathtaking sunset view over the iconic white buildings and blue domes of Santorini, Greece. Perfect for travel inspiration and Mediterranean vibes.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    location: "Santorini, Greece",
    tags: ["travel", "sunset", "greece", "santorini", "architecture"],
    likes: 15420,
    comments: 342,
    views: 89200,
    downloads: 1240,
    createdAt: "2 days ago",
    isLiked: true,
    isSaved: false,
    isNew: true,
    isTrending: true,
    isFeatured: false,
    category: "Travel"
  },
  {
    id: "2",
    title: "Mountain Lake Reflection",
    description: "Crystal clear mountain lake reflecting the majestic peaks and sky. Nature's perfect mirror showing the beauty of untouched wilderness.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
    author: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      verified: false
    },
    location: "Banff National Park, Canada",
    tags: ["nature", "mountains", "lake", "reflection", "wilderness"],
    likes: 8920,
    comments: 156,
    views: 45600,
    downloads: 890,
    createdAt: "1 week ago",
    isLiked: false,
    isSaved: true,
    isNew: false,
    isTrending: false,
    isFeatured: true,
    category: "Nature"
  },
  {
    id: "3",
    title: "Urban Street Photography",
    description: "Vibrant street scene capturing the energy and diversity of city life. Perfect blend of architecture, people, and urban culture.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop",
    author: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    location: "New York City, USA",
    tags: ["urban", "street", "photography", "city", "architecture"],
    likes: 12340,
    comments: 289,
    views: 67800,
    downloads: 1560,
    createdAt: "3 days ago",
    isLiked: true,
    isSaved: true,
    isNew: false,
    isTrending: true,
    isFeatured: false,
    category: "Street"
  },
  {
    id: "4",
    title: "Desert Sunset",
    description: "Stunning desert landscape bathed in golden hour light. The vast expanse of sand dunes creates a mesmerizing pattern under the warm sunset sky.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop&sat=20",
    author: {
      name: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    location: "Sahara Desert, Morocco",
    tags: ["desert", "sunset", "landscape", "morocco", "golden-hour"],
    likes: 9870,
    comments: 234,
    views: 54300,
    downloads: 720,
    createdAt: "5 days ago",
    isLiked: false,
    isSaved: false,
    isNew: false,
    isTrending: false,
    isFeatured: true,
    category: "Landscape"
  },
  {
    id: "5",
    title: "Cherry Blossom Spring",
    description: "Delicate cherry blossoms in full bloom creating a magical pink canopy. The essence of spring and renewal captured in nature's most beautiful season.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop&sat=30",
    author: {
      name: "Yuki Tanaka",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    location: "Tokyo, Japan",
    tags: ["cherry-blossom", "spring", "japan", "pink", "nature"],
    likes: 18760,
    comments: 456,
    views: 98700,
    downloads: 2340,
    createdAt: "1 day ago",
    isLiked: true,
    isSaved: true,
    isNew: true,
    isTrending: true,
    isFeatured: true,
    category: "Nature"
  },
  {
    id: "6",
    title: "Modern Architecture",
    description: "Contemporary glass and steel structure reflecting the sky and surrounding cityscape. A perfect example of modern architectural design.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=500&fit=crop",
    author: {
      name: "David Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      verified: false
    },
    location: "Dubai, UAE",
    tags: ["architecture", "modern", "glass", "steel", "urban"],
    likes: 6540,
    comments: 123,
    views: 34500,
    downloads: 450,
    createdAt: "4 days ago",
    isLiked: false,
    isSaved: false,
    isNew: false,
    isTrending: false,
    isFeatured: false,
    category: "Architecture"
  },
  {
    id: "7",
    title: "Ocean Waves",
    description: "Powerful ocean waves crashing against rocky cliffs. The raw energy of nature and the endless rhythm of the sea captured in a single moment.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop&sat=-10",
    author: {
      name: "Lisa Thompson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    location: "Big Sur, California",
    tags: ["ocean", "waves", "nature", "california", "coast"],
    likes: 11230,
    comments: 267,
    views: 62300,
    downloads: 980,
    createdAt: "6 days ago",
    isLiked: true,
    isSaved: false,
    isNew: false,
    isTrending: true,
    isFeatured: false,
    category: "Nature"
  },
  {
    id: "8",
    title: "Street Food Market",
    description: "Bustling street food market with colorful stalls and delicious aromas. The vibrant culture and culinary traditions of local street cuisine.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=500&fit=crop",
    author: {
      name: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      verified: false
    },
    location: "Bangkok, Thailand",
    tags: ["street-food", "market", "thailand", "culture", "culinary"],
    likes: 8760,
    comments: 198,
    views: 45600,
    downloads: 670,
    createdAt: "1 week ago",
    isLiked: false,
    isSaved: true,
    isNew: false,
    isTrending: false,
    isFeatured: false,
    category: "Food"
  },
  {
    id: "9",
    title: "Aurora Borealis",
    description: "Magical northern lights dancing across the night sky. The ethereal green and purple hues of the aurora borealis creating a natural light show.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=500&fit=crop",
    author: {
      name: "Ole Hansen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    location: "Tromsø, Norway",
    tags: ["aurora", "northern-lights", "norway", "night", "nature"],
    likes: 23450,
    comments: 567,
    views: 123400,
    downloads: 3450,
    createdAt: "2 days ago",
    isLiked: true,
    isSaved: true,
    isNew: true,
    isTrending: true,
    isFeatured: true,
    category: "Nature"
  },
  {
    id: "10",
    title: "Vintage Car Collection",
    description: "Classic vintage cars lined up in perfect condition. The timeless beauty and craftsmanship of automotive history preserved for future generations.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=500&fit=crop",
    author: {
      name: "James Miller",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      verified: false
    },
    location: "Detroit, Michigan",
    tags: ["vintage", "cars", "classic", "automotive", "history"],
    likes: 5430,
    comments: 89,
    views: 28900,
    downloads: 340,
    createdAt: "3 days ago",
    isLiked: false,
    isSaved: false,
    isNew: false,
    isTrending: false,
    isFeatured: false,
    category: "Automotive"
  },
  {
    id: "11",
    title: "Mountain Hiking Trail",
    description: "Scenic mountain trail winding through alpine meadows and rocky peaks. The perfect adventure for nature lovers and outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop&sat=15",
    author: {
      name: "Rachel Green",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    location: "Rocky Mountains, Colorado",
    tags: ["hiking", "mountains", "trail", "outdoor", "adventure"],
    likes: 9870,
    comments: 234,
    views: 52300,
    downloads: 890,
    createdAt: "4 days ago",
    isLiked: true,
    isSaved: false,
    isNew: false,
    isTrending: true,
    isFeatured: false,
    category: "Outdoor"
  },
  {
    id: "12",
    title: "City Skyline at Night",
    description: "Stunning city skyline illuminated by thousands of lights. The urban landscape transformed into a magical display of human achievement and progress.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop&sat=-20",
    author: {
      name: "Tom Anderson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      verified: true
    },
    location: "Hong Kong",
    tags: ["skyline", "city", "night", "urban", "lights"],
    likes: 15670,
    comments: 345,
    views: 78900,
    downloads: 1230,
    createdAt: "1 day ago",
    isLiked: false,
    isSaved: true,
    isNew: true,
    isTrending: true,
    isFeatured: false,
    category: "Urban"
  }
]; 