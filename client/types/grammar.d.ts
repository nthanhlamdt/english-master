export interface IGrammarLessonCardProps {
  _id: string;
  title: string;
  description: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  icon: string;
}

export interface IGrammarConceptCardProps {
  title: string;
  description: string;
  examples: string[];
  color: string;
}

export interface IStorySectionProps {
  title: string;
  story: string;
  grammarPoints: string[]
  questions: string[]
}

interface IPattern {
  pattern: string;
  explanation: string;
  examples: string[];
}

export interface IStructureSectionProps {
  title: string;
  description: string;
  patterns: IPattern[]
}

interface IContext {
  title: string;
  description: string;
  examples: string[];
}

export interface IUsegeSectionProps {
  title: string;
  description: string;
  contexts: IContext[];
}


interface IScenario {
  title: string;
  description: string;
  examples: {
    text: string;
    isCorrect: boolean;
  }[];
}

export interface IInteractiveSectionProps {
  title: string;
  description: string;
  scenarios: IScenario[];
}

export interface ITip {
  title: string;
  description: string;
  examples: string[];
}

export interface ITipsSectionProps {
  title: string;
  description: string;
  tips: ITip[];
}

interface IStory {
  title: string;
  story: string;
  grammarPoints: string[];
  questions: string[];
}

interface IStructure {
  title: string;
  description: string;
  patterns: IPattern[];
}

interface IUsage {
  title: string;
  description: string;
  contexts: IContext[];
}

interface IInteractive {
  title: string;
  description: string;
  scenarios: IScenario[];
}

interface ITips {
  title: string;
  description: string;
  tips: ITip[];
}

export interface IQuizResult {
  questionNumber: number;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
}

export interface IQuizz {
  assignment: string
  question: string
  options?: string[]
  answer: string
  type: "fill-in-the-blanks" | "multiple-choice"
  explanation: string
}

export interface IGrammarLesson {
  _id: string;
  title: string;
  description: string;
  icon: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  story: IStory;
  structure: IStructure;
  usage: IUsage;
  interactive: IInteractive;
  tips: ITips;
  quizz: IQuizz[]
}