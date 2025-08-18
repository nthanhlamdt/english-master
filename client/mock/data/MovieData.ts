export interface IMovie {
  id: string;
  title: string;
  originalTitle?: string;
  description: string;
  poster: string;
  backdrop?: string;
  year: number;
  duration: string;
  rating: number;
  genre: string[];
  director: string;
  cast: string[];
  language: string;
  country: string;
  isWatched: boolean;
  isFavorite: boolean;
  isNew: boolean;
  isTrending: boolean;
  trailerUrl?: string;
  imdbRating?: number;
  rottenTomatoes?: number;
  metacritic?: number;
}

export const movieData: IMovie[] = [
  {
    id: "1",
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=225&fit=crop",
    year: 2010,
    duration: "2h 28m",
    rating: 8.8,
    genre: ["Sci-Fi", "Action", "Thriller"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    language: "English",
    country: "USA",
    isWatched: false,
    isFavorite: true,
    isNew: false,
    isTrending: true
  },
  {
    id: "2",
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop",
    year: 1994,
    duration: "2h 22m",
    rating: 9.3,
    genre: ["Drama"],
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    language: "English",
    country: "USA",
    isWatched: true,
    isFavorite: true,
    isNew: false,
    isTrending: false
  },
  {
    id: "3",
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=400&h=225&fit=crop",
    year: 2008,
    duration: "2h 32m",
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    language: "English",
    country: "USA",
    isWatched: false,
    isFavorite: false,
    isNew: false,
    isTrending: true
  },
  {
    id: "4",
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=225&fit=crop",
    year: 1994,
    duration: "2h 34m",
    rating: 8.9,
    genre: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    language: "English",
    country: "USA",
    isWatched: true,
    isFavorite: false,
    isNew: false,
    isTrending: false
  },
  {
    id: "5",
    title: "Forrest Gump",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=225&fit=crop",
    year: 1994,
    duration: "2h 22m",
    rating: 8.8,
    genre: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    language: "English",
    country: "USA",
    isWatched: false,
    isFavorite: true,
    isNew: false,
    isTrending: false
  },
  {
    id: "6",
    title: "The Matrix",
    description: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop",
    year: 1999,
    duration: "2h 16m",
    rating: 8.7,
    genre: ["Sci-Fi", "Action"],
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    language: "English",
    country: "USA",
    isWatched: true,
    isFavorite: false,
    isNew: false,
    isTrending: true
  },
  {
    id: "7",
    title: "Goodfellas",
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",
    year: 1990,
    duration: "2h 26m",
    rating: 8.7,
    genre: ["Biography", "Crime", "Drama"],
    director: "Martin Scorsese",
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    language: "English",
    country: "USA",
    isWatched: false,
    isFavorite: false,
    isNew: false,
    isTrending: false
  },
  {
    id: "8",
    title: "The Silence of the Lambs",
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=225&fit=crop&sat=-50",
    year: 1991,
    duration: "1h 58m",
    rating: 8.6,
    genre: ["Crime", "Drama", "Thriller"],
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    language: "English",
    country: "USA",
    isWatched: true,
    isFavorite: true,
    isNew: false,
    isTrending: false
  },
  {
    id: "9",
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=225&fit=crop",
    year: 2014,
    duration: "2h 49m",
    rating: 8.6,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    language: "English",
    country: "USA",
    isWatched: false,
    isFavorite: false,
    isNew: false,
    isTrending: true
  },
  {
    id: "10",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop&sat=20",
    year: 2001,
    duration: "2h 58m",
    rating: 8.8,
    genre: ["Action", "Adventure", "Drama"],
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    language: "English",
    country: "New Zealand",
    isWatched: true,
    isFavorite: true,
    isNew: false,
    isTrending: false
  },
  {
    id: "11",
    title: "Fight Club",
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop&sat=-30",
    year: 1999,
    duration: "2h 19m",
    rating: 8.8,
    genre: ["Drama"],
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    language: "English",
    country: "USA",
    isWatched: false,
    isFavorite: false,
    isNew: false,
    isTrending: true
  },
  {
    id: "12",
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant son.",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=225&fit=crop&sat=-20",
    year: 1972,
    duration: "2h 55m",
    rating: 9.2,
    genre: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    language: "English",
    country: "USA",
    isWatched: true,
    isFavorite: true,
    isNew: false,
    isTrending: false
  }
]; 