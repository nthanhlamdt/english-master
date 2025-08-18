import { BarChart3, BookOpen, Eye, FileText, Film, Flame, Headphones, LayoutDashboardIcon, LucideIcon, Map, Mic, Music, PenTool, PlayCircle, Radio, Sparkles, Target, Trophy, Users, Volume2, Zap } from "lucide-react";

export interface ISidebarRoute {
  title: string;
  url: string;
  icon: LucideIcon;
  gradient: string;
}

export interface ISidebarRouteGroup {
  title: string;
  items: ISidebarRoute[];
  icon: LucideIcon;
}

const ROUTES_PATH = {
  HOME: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  DASHBOARD: '/dashboard',
  ROADMAP: '/roadmap',
  VOCABULARY: '/study/vocabulary',
  GRAMMAR: '/study/grammar',
  IPA: '/study/ipa',
  LISTENING: '/skills/listening',
  SPEAKING: '/skills/speaking',
  READING: '/skills/reading',
  WRITING: '/skills/writing',
  MOVIE: '/entertainment/movies',
  MUSIC: '/entertainment/music',
  POSTCARD: '/entertainment/postcard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
}

const ROUTES_NAME = {
  '/dashboard': "Dashboard",
  '/roadmap': "Lộ trình học",
  '/study/vocabulary': "Từ vựng",
  '/study/grammar': "Ngữ pháp",
  '/study/ipa': "Phiên âm IPA",
  '/skills/listening': "Luyện nghe",
  '/skills/speaking': "Luyện nói",
  '/skills/reading': "Luyện đọc",
  '/skills/writing': "Luyện viết",
  '/entertainment/movies': "Phim & Video",
  '/entertainment/music': "Âm nhạc",
  '/entertainment/postcard': "Postcard",
  '/profile': "Hồ sơ",
  '/settings': "Cài đặt",
}

const SIDEBAR_ROUTES: ISidebarRouteGroup[] = [
  {
    title: 'main',
    icon: Zap,
    items: [
      {
        title: "Dashboard",
        url: ROUTES_PATH.DASHBOARD,
        icon: LayoutDashboardIcon,
        gradient: "from-blue-500 to-blue-600",
      },
      {
        title: "Lộ trình học",
        url: ROUTES_PATH.ROADMAP,
        icon: Map,
        gradient: "from-emerald-500 to-emerald-700",
      },
    ],
  },
  {
    title: 'study',
    icon: BookOpen,
    items: [
      {
        title: "Từ vựng",
        url: ROUTES_PATH.VOCABULARY,
        icon: BookOpen,
        gradient: "from-orange-500 to-red-500",
      },
      {
        title: "Ngữ pháp",
        url: ROUTES_PATH.GRAMMAR,
        icon: FileText,
        gradient: "from-pink-500 to-rose-500",
      },
      {
        title: "Phiên âm IPA",
        url: ROUTES_PATH.IPA,
        icon: Volume2,
        gradient: "from-violet-500 to-purple-500",
      },
    ],
  },
  {
    title: 'skills',
    icon: Trophy,
    items: [
      {
        title: "Luyện nghe",
        url: ROUTES_PATH.LISTENING,
        icon: Headphones,
        gradient: "from-cyan-500 to-blue-500",
      },
      {
        title: "Luyện nói",
        url: ROUTES_PATH.SPEAKING,
        icon: Mic,
        gradient: "from-green-500 to-emerald-500",
      },
      {
        title: "Luyện đọc",
        url: ROUTES_PATH.READING,
        icon: Eye,
        gradient: "from-indigo-500 to-blue-600",
      },
      {
        title: "Luyện viết",
        url: ROUTES_PATH.WRITING,
        icon: PenTool,
        gradient: "from-amber-500 to-orange-500",
      },
    ],
  },
  {
    title: 'entertainment',
    icon: Sparkles,
    items: [
      {
        title: "Phim & Video",
        url: ROUTES_PATH.MOVIE,
        icon: Film,
        gradient: "from-red-500 to-pink-500",
      },
      {
        title: "Âm nhạc",
        url: ROUTES_PATH.MUSIC,
        icon: Music,
        gradient: "from-purple-500 to-indigo-500",
      },
      {
        title: "Podcast",
        url: ROUTES_PATH.POSTCARD,
        icon: Radio,
        gradient: "from-teal-500 to-cyan-500",
      },
    ],
  }
]

export interface IQuickAction {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  href: string;
}
const QUICK_ACTIONS: IQuickAction[] = [
  {
    title: "Tiếp tục học",
    description: "Từ vựng - Business English",
    Icon: PlayCircle,
    color: "from-green-500 to-emerald-500",
    href: "/study/vocabulary",
  },
  {
    title: "Luyện kỹ năng",
    description: "Luyện nghe - Podcast",
    Icon: Target,
    color: "from-blue-500 to-cyan-500",
    href: "/skills/listening",
  },
  {
    title: "Xem tiến độ",
    description: "Báo cáo chi tiết",
    Icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    href: "/roadmap",
  },
  {
    title: "Cộng đồng",
    description: "Thảo luận & chia sẻ",
    Icon: Users,
    color: "from-orange-500 to-red-500",
    href: "#",
  },
]

export interface IRecentActivity {
  title: string;
  subtitle: string;
  time: string;
  Icon: LucideIcon;
  color: string;
}

const RECENT_ACTIVITIES: IRecentActivity[] = [
  {
    title: "Hoàn thành bài học Từ vựng",
    subtitle: "Business English - Lesson 12",
    time: "2 giờ trước",
    Icon: BookOpen,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Luyện nghe Advanced",
    subtitle: "Podcast: Technology Trends",
    time: "5 giờ trước",
    Icon: Target,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Đạt chuỗi 15 ngày",
    subtitle: "Chúc mừng! Tiếp tục phát huy",
    time: "1 ngày trước",
    Icon: Flame,
    color: "from-red-500 to-pink-500",
  },
]

export const ROUTES = { SIDEBAR_ROUTES, ROUTES_PATH, ROUTES_NAME, QUICK_ACTIONS, RECENT_ACTIVITIES }