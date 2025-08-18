import mongoose, { Document, Schema } from "mongoose";

export interface IVocabulary extends Document {
  word: string;
  transcription: string;
  partOfSpeech: 'Noun' | 'Verb' | 'Adjective' | 'Adverb' | 'Preposition' | 'Conjunction' | 'Interjection'; //Từ loại
  Definition: string;
  vietNameseMeaning: string;
  example: string;
  image: {
    public_id: string;
    url: string;
  };
  vocabularyTopicId: mongoose.Types.ObjectId;
  quizId: mongoose.Types.ObjectId;
}

const vocabularySchema = new Schema<IVocabulary>({
  word: {
    type: String,
    required: [true, 'Vui lòng nhập từ'],
    trim: true,
  },
  transcription: {
    type: String,
    required: [true, 'Vui lòng nhập phiên âm'],
    trim: true,
  },
  partOfSpeech: {
    type: String,
    enum: ['Noun', 'Verb', 'Adjective', 'Adverb', 'Preposition', 'Conjunction', 'Interjection'],
    required: [true, 'Vui lòng chọn từ loại'],
  },
  Definition: {
    type: String,
    required: [true, 'Vui lòng nhập định nghĩa'],
    trim: true,
  },
  vietNameseMeaning: {
    type: String,
    required: [true, 'Vui lòng nhập nghĩa tiếng Việt'],
    trim: true,
  },
  example: {
    type: String,
    required: [true, 'Vui lòng nhập ví dụ'],
    trim: true,
  },
  image: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  vocabularyTopicId: {
    type: Schema.Types.ObjectId,
    ref: 'VocabularyTopic',
    required: [true, 'Vui lòng chọn chủ đề'],
  },
  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'Quizz',
  },
}, { timestamps: true })

// Index để tìm kiếm nhanh
vocabularySchema.index({ word: 1 });
vocabularySchema.index({ vocabularyTopicId: 1 });
vocabularySchema.index({ quizId: 1 });

export const Vocabulary = mongoose.model<IVocabulary>('Vocabulary', vocabularySchema);