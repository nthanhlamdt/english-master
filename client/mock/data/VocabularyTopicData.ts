export interface IVocabularyTopic {
  _id: string;
  title: string;
  image: string;
  completed: number;
  total: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  isTested: boolean;
}

export const vocabularyTopicData: IVocabularyTopic[] = [
  {
    _id: "1",
    title: "GIA ĐÌNH",
    image: "/images/family.jpg",
    completed: 8,
    total: 10,
    isUnlocked: true,
    isCompleted: false,
    isTested: true
  },
  {
    _id: "2",
    title: "CÔNG VIỆC",
    image: "/images/work.jpg",
    completed: 10,
    total: 10,
    isUnlocked: true,
    isCompleted: true,
    isTested: true
  },
  {
    _id: "3",
    title: "DU LỊCH",
    image: "/images/travel.jpg",
    completed: 0,
    total: 12,
    isUnlocked: false,
    isCompleted: false,
    isTested: false
  },
  {
    _id: "4",
    title: "ẨM THỰC",
    image: "/images/food.jpg",
    completed: 6,
    total: 8,
    isUnlocked: true,
    isCompleted: false,
    isTested: false
  },
  {
    _id: "5",
    title: "THỂ THAO",
    image: "/images/sports.jpg",
    completed: 12,
    total: 12,
    isUnlocked: true,
    isCompleted: true,
    isTested: true
  },
  {
    _id: "6",
    title: "CÔNG NGHỆ",
    image: "/images/technology.jpg",
    completed: 0,
    total: 15,
    isUnlocked: false,
    isCompleted: false,
    isTested: false
  },
  {
    _id: "7",
    title: "GIÁO DỤC",
    image: "/images/education.jpg",
    completed: 4,
    total: 10,
    isUnlocked: true,
    isCompleted: false,
    isTested: false
  },
  {
    _id: "8",
    title: "SỨC KHỎE",
    image: "/images/health.jpg",
    completed: 9,
    total: 10,
    isUnlocked: true,
    isCompleted: false,
    isTested: true
  },
  {
    _id: "9",
    title: "MUA SẮM",
    image: "/images/shopping.jpg",
    completed: 0,
    total: 8,
    isUnlocked: false,
    isCompleted: false,
    isTested: false
  },
  {
    _id: "10",
    title: "GIAO THÔNG",
    image: "/images/transport.jpg",
    completed: 7,
    total: 12,
    isUnlocked: true,
    isCompleted: false,
    isTested: false
  },
  {
    _id: "11",
    title: "THỜI TIẾT",
    image: "/images/weather.jpg",
    completed: 5,
    total: 8,
    isUnlocked: true,
    isCompleted: false,
    isTested: false
  },
  {
    _id: "12",
    title: "GIẢI TRÍ",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=200&h=200&fit=crop&crop=center",
    completed: 0,
    total: 10,
    isUnlocked: false,
    isCompleted: false,
    isTested: false
  }
]; 