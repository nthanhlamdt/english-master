import mongoose, { Document, Schema } from "mongoose";

export interface IResultUserVocabulary extends Document {
  userId: mongoose.Types.ObjectId;
  vocabularyId: mongoose.Types.ObjectId;
  isCorrect: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const resultUserVocabularySchema = new Schema<IResultUserVocabulary>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  vocabularyId: {
    type: Schema.Types.ObjectId,
    ref: 'Vocabulary',
    required: true,
  },
  isCorrect: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true })

// Compound index để đảm bảo mỗi user chỉ có một record cho mỗi word
resultUserVocabularySchema.index({ userId: 1, wordId: 1 }, { unique: true });

// Index để tìm kiếm nhanh
resultUserVocabularySchema.index({ userId: 1, learningStatus: 1 });
resultUserVocabularySchema.index({ wordId: 1 });

export const ResultUserVocabulary = mongoose.model<IResultUserVocabulary>('ResultUserVocabulary', resultUserVocabularySchema);