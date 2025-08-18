export interface IMusic {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration: string;
  thumbnail: string;
  genre: string[];
  releaseYear: number;
  isLiked: boolean;
  isPlaying: boolean;
  isNew: boolean;
  isTrending: boolean;
  views?: number;
  explicit?: boolean;
  featured?: string[];
}

export const musicData: IMusic[] = [
  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    genre: ["Pop", "Synth-pop"],
    releaseYear: 2020,
    isLiked: true,
    isPlaying: false,
    isNew: false,
    isTrending: true,
    views: 2500000000,
    explicit: false
  },
  {
    id: "2",
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    duration: "3:53",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
    genre: ["Pop", "Dancehall"],
    releaseYear: 2017,
    isLiked: false,
    isPlaying: true,
    isNew: false,
    isTrending: false,
    views: 3000000000,
    explicit: false
  },
  {
    id: "3",
    title: "Dance Monkey",
    artist: "Tones and I",
    album: "The Kids Are Coming",
    duration: "3:29",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    genre: ["Pop", "Indie"],
    releaseYear: 2019,
    isLiked: true,
    isPlaying: false,
    isNew: false,
    isTrending: true,
    views: 1800000000,
    explicit: false
  },
  {
    id: "4",
    title: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&sat=-20",
    genre: ["Pop", "Alternative"],
    releaseYear: 2019,
    isLiked: false,
    isPlaying: false,
    isNew: false,
    isTrending: false,
    views: 1200000000,
    explicit: true
  },
  {
    id: "5",
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    album: "Uptown Special",
    duration: "4:30",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop&sat=20",
    genre: ["Funk", "Pop"],
    releaseYear: 2014,
    isLiked: true,
    isPlaying: false,
    isNew: false,
    isTrending: false,
    views: 3500000000,
    explicit: false,
    featured: ["Bruno Mars"]
  },
  {
    id: "6",
    title: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    album: "Vida",
    duration: "4:41",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop&sat=30",
    genre: ["Latin", "Pop"],
    releaseYear: 2017,
    isLiked: false,
    isPlaying: false,
    isNew: false,
    isTrending: false,
    views: 8000000000,
    explicit: false,
    featured: ["Daddy Yankee"]
  },
  {
    id: "7",
    title: "Old Town Road",
    artist: "Lil Nas X ft. Billy Ray Cyrus",
    album: "7",
    duration: "2:37",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&sat=-10",
    genre: ["Country", "Hip-hop"],
    releaseYear: 2019,
    isLiked: true,
    isPlaying: false,
    isNew: false,
    isTrending: true,
    views: 1500000000,
    explicit: true,
    featured: ["Billy Ray Cyrus"]
  },
  {
    id: "8",
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: "3:23",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop&sat=15",
    genre: ["Pop", "Disco"],
    releaseYear: 2020,
    isLiked: false,
    isPlaying: false,
    isNew: false,
    isTrending: false,
    views: 900000000,
    explicit: false
  },
  {
    id: "9",
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    album: "F*CK LOVE 3: OVER YOU",
    duration: "2:21",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop&sat=-15",
    genre: ["Pop", "Hip-hop"],
    releaseYear: 2021,
    isLiked: true,
    isPlaying: false,
    isNew: true,
    isTrending: true,
    views: 1200000000,
    explicit: true,
    featured: ["Justin Bieber"]
  },
  {
    id: "10",
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    duration: "2:47",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&sat=25",
    genre: ["Pop", "Rock"],
    releaseYear: 2022,
    isLiked: false,
    isPlaying: false,
    isNew: false,
    isTrending: true,
    views: 800000000,
    explicit: false
  },
  {
    id: "11",
    title: "Flowers",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    duration: "3:20",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop&sat=10",
    genre: ["Pop", "Disco"],
    releaseYear: 2023,
    isLiked: true,
    isPlaying: false,
    isNew: true,
    isTrending: true,
    views: 600000000,
    explicit: false
  },
  {
    id: "12",
    title: "Vampire",
    artist: "Olivia Rodrigo",
    album: "GUTS",
    duration: "3:40",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop&sat=-5",
    genre: ["Pop", "Rock"],
    releaseYear: 2023,
    isLiked: false,
    isPlaying: false,
    isNew: true,
    isTrending: true,
    views: 400000000,
    explicit: false
  }
]; 