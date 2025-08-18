import mongoose, { Model, Schema } from "mongoose";

export interface IQuiz extends Document {
  Assignment: string;
  Question: string;
  Type: 'Multiple Choice' | 'Fill in the blank';
  Options?: string[];
  Answer: string;
  Explanation: string;
}

const quizSchema = new Schema<IQuiz>({
  Assignment: {
    type: String,
    required: [true, 'Vui lòng nhập đề bài'],
    trim: true,
  },
  Question: {
    type: String,
    required: [true, 'Vui lòng nhập câu hỏi'],
    trim: true,
  },
  Type: {
    type: String,
    enum: ['Multiple Choice', 'Fill in the blank'],
    required: [true, 'Vui lòng chọn loại câu hỏi'],
  },
  Options: {
    type: [String],
    trim: true,
  },
  Answer: {
    type: String,
    required: [true, 'Vui lòng nhập đáp án'],
    trim: true,
  },
  Explanation: {
    type: String,
    required: [true, 'Vui lòng nhập giải thích'],
    trim: true,
  }
})

// Index để tìm kiếm nhanh
quizSchema.index({ vocabularyTopicId: 1 });
quizSchema.index({ isActive: 1 });

export const Quiz = mongoose.model<IQuiz>('Quiz', quizSchema);



