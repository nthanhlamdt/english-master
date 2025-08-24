import { IQuiz, Quiz } from "../models/quiz.model";

interface IQuizData {
  assignment: string;
  question: string;
  type: 'Multiple Choice' | 'Fill in the blank';
  options?: string[];
  answer: string;
  explanation: string;
}

export class QuizService {
  //(ADMIN) LẤY TẤT CẢ CÂU HỎI
  static async getAllQuiz(): Promise<IQuiz[]> {
    const quiz = await Quiz.find();
    return quiz;
  }

  //(ADMIN) TẠO CÂU HỎI
  static async createQuiz(quizData: IQuizData): Promise<IQuiz> {
    const quiz = await Quiz.create(quizData);
    return quiz;
  }
}