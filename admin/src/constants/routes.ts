import {
  BarChart3,
  BookOpen,
  Database,
  Eye,
  FileText,
  Film,
  Headphones,
  History,
  Image,
  LayoutDashboard,
  Library,
  LucideIcon,
  Mail,
  Megaphone,
  Mic,
  Music,
  PenTool,
  Route,
  Settings,
  Shield,
  Speaker,
  Trophy,
  TrendingUp,
  Type,
  Users,
  Video,
  Volume2,
  Wrench,
  Zap,
  Bell,
  Globe,
  CircleQuestionMarkIcon,
} from "lucide-react";

export interface ISidebarRoute {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface ISidebarRouteGroup {
  title: string;
  subItems: ISidebarRoute[];
  icon: LucideIcon;
}

const ROUTES_PATH = {
  // Dashboard
  DASHBOARD: '/admin/dashboard',
  OVERVIEW: '/admin/dashboard/overview',
  REPORTS: '/admin/dashboard/reports',
  ANALYTICS: '/admin/dashboard/analytics',
  USER_STATS: '/admin/dashboard/user-stats',
  CONTENT_STATS: '/admin/dashboard/content-stats',

  // Learning Management
  LEARNING_PATHS: '/admin/learning/paths',
  ACHIEVEMENTS: '/admin/learning/achievements',
  QUESTIONS: '/admin/learning/questions',

  // User Management
  USER_LIST: '/admin/user/list',
  ROLES_PERMISSIONS: '/admin/user/roles',

  // Content Library
  GRAMMAR: '/admin/content/grammar',
  VOCABULARY: '/admin/content/vocabulary',
  IPA: '/admin/content/ipa',
  LISTENING: '/admin/content/listening',
  SPEAKING: '/admin/content/speaking',
  READING: '/admin/content/reading',
  WRITING: '/admin/content/writing',

  // Entertainment
  MOVIES: '/admin/entertainment/movie',
  MUSIC: '/admin/entertainment/music',
  POSTCARDS: '/admin/entertainment/postcard',

  // AI & Technology
  AI_SETTINGS: '/admin/ai/settings',
  TEXT_GENERATION: '/admin/ai/text',
  IMAGE_GENERATION: '/admin/ai/image',
  AUDIO_GENERATION: '/admin/ai/audio',

  // Media Management
  IMAGES: '/admin/media/images',
  AUDIO: '/admin/media/audio',
  VIDEOS: '/admin/media/videos',

  // Communications
  EMAIL_TEMPLATES: '/admin/communications/email',
  PUSH_NOTIFICATIONS: '/admin/communications/push',
  GENERAL_NOTIFICATIONS: '/admin/communications/general',
  COMMUNICATION_HISTORY: '/admin/communications/history',

  // System & Settings
  GENERAL_SETTINGS: '/admin/system/settings',
  SECURITY: '/admin/system/security',
  SYSTEM_LOGS: '/admin/system/logs',
  BACKUP_RESTORE: '/admin/system/backup',
  MAINTENANCE: '/admin/system/maintenance',
  LOCALIZATION: '/admin/system/localization',
}

const ROUTES_NAME = {
  // Dashboard
  '/admin/dashboard': "Bảng điều khiển",
  '/admin/dashboard/overview': "Tổng quan",
  '/admin/dashboard/reports': "Báo cáo",
  '/admin/dashboard/analytics': "Phân tích",
  '/admin/dashboard/user-stats': "Thống kê người dùng",
  '/admin/dashboard/content-stats': "Thống kê nội dung",

  // Learning Management
  '/admin/learning/paths': "Lộ trình học",
  '/admin/learning/questions': "Ngân hàng câu hỏi",
  '/admin/learning/achievements': "Thành tích",

  // User Management
  '/admin/user/list': "Danh sách người dùng",
  '/admin/user/roles': "Vai trò & Phân quyền",

  // Content Library
  '/admin/content/grammar': "Ngữ pháp",
  '/admin/content/vocabulary': "Từ vựng",
  '/admin/content/ipa': "Phiên âm IPA",
  '/admin/content/listening': "Luyện nghe",
  '/admin/content/speaking': "Luyện nói",
  '/admin/content/reading': "Luyện đọc",
  '/admin/content/writing': "Luyện viết",

  // Entertainment
  '/admin/entertainment/movies': "Phim",
  '/admin/entertainment/music': "Âm nhạc",
  '/admin/entertainment/postcards': "Bưu thiếp",

  // AI & Technology
  '/admin/ai/settings': "Cài đặt AI",
  '/admin/ai/text': "Tạo văn bản",
  '/admin/ai/image': "Tạo hình ảnh",
  '/admin/ai/audio': "Tạo âm thanh",

  // Media Management
  '/admin/media/image': "Hình ảnh",
  '/admin/media/audio': "Âm thanh",
  '/admin/media/video': "Video",

  // Communications
  '/admin/communications/email': "Mẫu email",
  '/admin/communications/push': "Thông báo đẩy",
  '/admin/communications/general': "Thông báo chung",
  '/admin/communications/history': "Lịch sử thông báo",

  // System & Settings
  '/admin/system/settings': "Cài đặt chung",
  '/admin/system/security': "Bảo mật",
  '/admin/system/logs': "Nhật ký hệ thống",
  '/admin/system/backup': "Sao lưu & Khôi phục",
  '/admin/system/maintenance': "Bảo trì",
  '/admin/system/localization': "Đa ngôn ngữ",
}

const SIDEBAR_ROUTES: ISidebarRouteGroup[] = [
  {
    title: 'Bảng điều khiển',
    icon: LayoutDashboard,
    subItems: [
      {
        title: "Tổng quan",
        href: ROUTES_PATH.OVERVIEW,
        icon: BarChart3,
      },
      {
        title: "Báo cáo",
        href: ROUTES_PATH.REPORTS,
        icon: FileText,
      },
      {
        title: "Phân tích",
        href: ROUTES_PATH.ANALYTICS,
        icon: TrendingUp,
      },
      {
        title: "Thống kê người dùng",
        href: ROUTES_PATH.USER_STATS,
        icon: Users,
      },
      {
        title: "Thống kê nội dung",
        href: ROUTES_PATH.CONTENT_STATS,
        icon: BookOpen,
      },
    ],
  },
  {
    title: 'Quản lý học tập',
    icon: Library,
    subItems: [
      {
        title: "Lộ trình học",
        href: ROUTES_PATH.LEARNING_PATHS,
        icon: Route,
      },
      {
        title: "Thành tích",
        href: ROUTES_PATH.ACHIEVEMENTS,
        icon: Trophy,
      },
      {
        title: "Ngân hàng câu hỏi",
        href: ROUTES_PATH.QUESTIONS,
        icon: CircleQuestionMarkIcon,
      }
    ],
  },
  {
    title: 'Quản lý người dùng',
    icon: Users,
    subItems: [
      {
        title: "Danh sách người dùng",
        href: ROUTES_PATH.USER_LIST,
        icon: Users,
      },
      {
        title: "Vai trò & Phân quyền",
        href: ROUTES_PATH.ROLES_PERMISSIONS,
        icon: Shield,
      },
    ],
  },
  {
    title: 'Thư viện nội dung',
    icon: BookOpen,
    subItems: [
      {
        title: "Ngữ pháp",
        href: ROUTES_PATH.GRAMMAR,
        icon: FileText,
      },
      {
        title: "Từ vựng",
        href: ROUTES_PATH.VOCABULARY,
        icon: BookOpen,
      },
      {
        title: "Phiên âm IPA",
        href: ROUTES_PATH.IPA,
        icon: Volume2,
      },
      {
        title: "Luyện nghe",
        href: ROUTES_PATH.LISTENING,
        icon: Headphones,
      },
      {
        title: "Luyện nói",
        href: ROUTES_PATH.SPEAKING,
        icon: Mic,
      },
      {
        title: "Luyện đọc",
        href: ROUTES_PATH.READING,
        icon: Eye,
      },
      {
        title: "Luyện viết",
        href: ROUTES_PATH.WRITING,
        icon: PenTool,
      },
    ],
  },
  {
    title: 'Giải trí',
    icon: Zap,
    subItems: [
      {
        title: "Phim",
        href: ROUTES_PATH.MOVIES,
        icon: Film,
      },
      {
        title: "Âm nhạc",
        href: ROUTES_PATH.MUSIC,
        icon: Music,
      },
      {
        title: "Bưu thiếp",
        href: ROUTES_PATH.POSTCARDS,
        icon: Mail,
      },
    ],
  },
  {
    title: 'AI & Công nghệ',
    icon: Zap,
    subItems: [
      {
        title: "Cài đặt AI",
        href: ROUTES_PATH.AI_SETTINGS,
        icon: Settings,
      },
      {
        title: "Tạo văn bản",
        href: ROUTES_PATH.TEXT_GENERATION,
        icon: Type,
      },
      {
        title: "Tạo hình ảnh",
        href: ROUTES_PATH.IMAGE_GENERATION,
        icon: Image,
      },
      {
        title: "Tạo âm thanh",
        href: ROUTES_PATH.AUDIO_GENERATION,
        icon: Speaker,
      },
    ],
  },
  {
    title: 'Quản lý media',
    icon: Image,
    subItems: [
      {
        title: "Hình ảnh",
        href: ROUTES_PATH.IMAGES,
        icon: Image,
      },
      {
        title: "Âm thanh",
        href: ROUTES_PATH.AUDIO,
        icon: Music,
      },
      {
        title: "Video",
        href: ROUTES_PATH.VIDEOS,
        icon: Video,
      },
    ],
  },
  {
    title: 'Truyền thông',
    icon: Mail,
    subItems: [
      {
        title: "Mẫu email",
        href: ROUTES_PATH.EMAIL_TEMPLATES,
        icon: Mail,
      },
      {
        title: "Thông báo đẩy",
        href: ROUTES_PATH.PUSH_NOTIFICATIONS,
        icon: Bell,
      },
      {
        title: "Thông báo chung",
        href: ROUTES_PATH.GENERAL_NOTIFICATIONS,
        icon: Megaphone,
      },
      {
        title: "Lịch sử thông báo",
        href: ROUTES_PATH.COMMUNICATION_HISTORY,
        icon: History,
      },
    ],
  },
  {
    title: 'Hệ thống & Cài đặt',
    icon: Settings,
    subItems: [
      {
        title: "Cài đặt chung",
        href: ROUTES_PATH.GENERAL_SETTINGS,
        icon: Settings,
      },
      {
        title: "Bảo mật",
        href: ROUTES_PATH.SECURITY,
        icon: Shield,
      },
      {
        title: "Nhật ký hệ thống",
        href: ROUTES_PATH.SYSTEM_LOGS,
        icon: FileText,
      },
      {
        title: "Sao lưu & Khôi phục",
        href: ROUTES_PATH.BACKUP_RESTORE,
        icon: Database,
      },
      {
        title: "Bảo trì",
        href: ROUTES_PATH.MAINTENANCE,
        icon: Wrench,
      },
      {
        title: "Đa ngôn ngữ",
        href: ROUTES_PATH.LOCALIZATION,
        icon: Globe,
      },
    ],
  }
]

export const ROUTES = { SIDEBAR_ROUTES, ROUTES_PATH, ROUTES_NAME }