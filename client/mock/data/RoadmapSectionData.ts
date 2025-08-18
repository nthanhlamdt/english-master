import { roadmap } from "@/types";

export interface DetailedLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: "grammar" | "vocabulary" | "listening" | "speaking" | "reading" | "writing";
  difficulty: "beginner" | "intermediate" | "advanced";
  prerequisites: string[];
  learningObjectives: string[];
  isCompleted: boolean;
  isLocked: boolean;
  progress: number;
}

export interface WeekData {
  weekNumber: number;
  title: string;
  description: string;
  lessons: DetailedLesson[];
  progress: number;
  isCompleted: boolean;
  isLocked: boolean;
  totalLessons: number;
  completedLessons: number;
}

export interface DetailedRoadmap extends roadmap {
  weeks: WeekData[];
  totalProgress: number;
  estimatedDuration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

export const roadmapSectionData: roadmap[] = [
  {
    title: "Giai đoạn 1: Khởi động",
    description: "Làm quen phát âm, từ vựng cơ bản và các câu giao tiếp nền tảng.",
    sub_description: "Tập trung học IPA, 100 từ vựng phổ biến nhất và các câu giao tiếp đầu tiên.",
    items: [
      { title: "Nắm vững bảng IPA và phát âm chuẩn." },
      { title: "Học và ghi nhớ 100 từ vựng cơ bản nhất." },
      { title: "Biết tự giới thiệu, chào hỏi và nói các câu cơ bản." },
      { title: "Hình thành phản xạ nghe và lặp lại qua shadowing." },
      { title: "Tạo thói quen luyện tập tiếng Anh hàng ngày." }
    ],
    week: 1,
    lesson: 1
  },
  {
    title: "Giai đoạn 2: Tăng tốc",
    description: "Mở rộng kiến thức ngữ pháp, tăng vốn từ và phát triển toàn diện kỹ năng nghe, nói, đọc, viết.",
    sub_description: "Bao gồm 12 tuần luyện tập các thì cơ bản, câu hỏi, danh từ, so sánh và cấu trúc giao tiếp thực tế.",
    items: [
      { title: "Sử dụng thành thạo các thì cơ bản và cấu trúc câu chính." },
      { title: "Biết đặt câu hỏi và trả lời linh hoạt trong giao tiếp." },
      { title: "Phát triển kỹ năng nghe hiểu và luyện shadowing hàng tuần." },
      { title: "Viết được đoạn văn đơn giản về bản thân, gia đình, kế hoạch." },
      { title: "Tăng vốn từ vựng và tự tin hơn khi nói về nhiều chủ đề cơ bản." }
    ],
    week: 2,
    lesson: 12
  },
  {
    title: "Giai đoạn 3: Về đích",
    description: "Giao tiếp thực tế, mở rộng vốn từ vựng và tự tin sử dụng tiếng Anh trong các tình huống đời sống.",
    sub_description: "Tập trung 13 tuần với các chủ đề đa dạng, giúp củng cố và ứng dụng toàn diện.",
    items: [
      { title: "Mở rộng thêm hơn 900 từ vựng theo các chủ đề đời sống thực tế." },
      { title: "Giao tiếp tự tin trong các tình huống hàng ngày và chuyên ngành." },
      { title: "Viết được bài luận, đoạn văn dài và chia sẻ quan điểm cá nhân." },
      { title: "Nâng cao kỹ năng nghe hiểu và phản xạ tự nhiên khi nói." },
      { title: "Tự đánh giá và tổng ôn kiến thức, sẵn sàng sử dụng tiếng Anh thực tế." }
    ],
    week: 14,
    lesson: 13
  }
];

// Generate detailed roadmap data with lessons
export const generateDetailedRoadmap = (): DetailedRoadmap[] => {
  return roadmapSectionData.map((level, levelIndex) => {
    const weeks: WeekData[] = [];
    const lessonTypes: DetailedLesson["type"][] = ["grammar", "vocabulary", "listening", "speaking", "reading", "writing"];
    
    for (let week = 1; week <= level.week; week++) {
      const lessons: DetailedLesson[] = [];
      const lessonsPerWeek = Math.ceil(level.lesson / level.week);
      
      for (let lesson = 1; lesson <= lessonsPerWeek; lesson++) {
        const lessonType = lessonTypes[(lesson - 1) % lessonTypes.length];
        const isCompleted = Math.random() > 0.7; // Mock completion status
        const isLocked = week > 1 && !weeks[week - 2]?.isCompleted;
        
        lessons.push({
          id: `level-${levelIndex + 1}-week-${week}-lesson-${lesson}`,
          title: `Bài ${lesson}: ${getLessonTitle(lessonType)}`,
          description: getLessonDescription(lessonType),
          duration: `${Math.floor(Math.random() * 30) + 15} phút`,
          type: lessonType,
          difficulty: levelIndex === 0 ? "beginner" : levelIndex === 1 ? "intermediate" : "advanced",
          prerequisites: week > 1 ? [`Hoàn thành tuần ${week - 1}`] : [],
          learningObjectives: getLearningObjectives(lessonType),
          isCompleted,
          isLocked,
          progress: isCompleted ? 100 : Math.floor(Math.random() * 80)
        });
      }
      
      const completedLessons = lessons.filter(l => l.isCompleted).length;
      const progress = (completedLessons / lessons.length) * 100;
      const isCompleted = progress === 100;
      
      weeks.push({
        weekNumber: week,
        title: `Tuần ${week}`,
        description: `Hoàn thành ${lessonsPerWeek} bài học trong tuần này`,
        lessons,
        progress,
        isCompleted,
        isLocked: week > 1 && !weeks[week - 2]?.isCompleted,
        totalLessons: lessons.length,
        completedLessons
      });
    }
    
    const totalProgress = (weeks.filter(w => w.isCompleted).length / weeks.length) * 100;
    
    return {
      ...level,
      weeks,
      totalProgress,
      estimatedDuration: `${level.week} tuần`,
      difficulty: levelIndex === 0 ? "beginner" : levelIndex === 1 ? "intermediate" : "advanced"
    };
  });
};

const getLessonTitle = (type: DetailedLesson["type"]): string => {
  const titles = {
    grammar: "Ngữ pháp cơ bản",
    vocabulary: "Từ vựng mới",
    listening: "Luyện nghe",
    speaking: "Luyện nói",
    reading: "Đọc hiểu",
    writing: "Viết câu"
  };
  return titles[type];
};

const getLessonDescription = (type: DetailedLesson["type"]): string => {
  const descriptions = {
    grammar: "Học và thực hành các quy tắc ngữ pháp",
    vocabulary: "Mở rộng vốn từ vựng theo chủ đề",
    listening: "Rèn luyện kỹ năng nghe hiểu",
    speaking: "Thực hành giao tiếp và phát âm",
    reading: "Đọc và hiểu các đoạn văn bản",
    writing: "Viết câu và đoạn văn đơn giản"
  };
  return descriptions[type];
};

const getLearningObjectives = (type: DetailedLesson["type"]): string[] => {
  const objectives = {
    grammar: [
      "Hiểu và áp dụng quy tắc ngữ pháp",
      "Thực hành cấu trúc câu",
      "Làm bài tập ngữ pháp"
    ],
    vocabulary: [
      "Học từ vựng mới",
      "Thực hành sử dụng từ vựng",
      "Ghi nhớ và ôn tập"
    ],
    listening: [
      "Luyện nghe các đoạn hội thoại",
      "Hiểu nội dung chính",
      "Thực hành shadowing"
    ],
    speaking: [
      "Thực hành phát âm",
      "Luyện nói theo chủ đề",
      "Giao tiếp cơ bản"
    ],
    reading: [
      "Đọc hiểu văn bản",
      "Trả lời câu hỏi",
      "Tóm tắt nội dung"
    ],
    writing: [
      "Viết câu đơn giản",
      "Viết đoạn văn ngắn",
      "Thực hành viết"
    ]
  };
  return objectives[type];
};
