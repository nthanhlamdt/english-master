export interface IListeningTopic {
  _id: string;
  title: string;
  description: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  duration: string;
  category: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  isTested: boolean;
  completed: number;
  total: number;
}