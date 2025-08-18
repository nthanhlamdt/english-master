import mongoose, { Document, Schema } from "mongoose";

export interface IVocabularyTopic extends Document {
  name: string;
  image: Schema.Types.ObjectId;
  orderIndex: number;
  isActive: boolean;
}

const vocabularyTopicSchema = new Schema<IVocabularyTopic>({
  name: {
    type: String,
    required: [true, 'Vui lòng nhập tên chủ đề'],
    trim: true,
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: 'Media',
    required: [true, 'Vui lòng tải ảnh lên'],
  },
  orderIndex: {
    type: Number,
    required: [true, 'Vui lòng nhập thứ tự'],
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})

vocabularyTopicSchema.index({ orderIndex: 1 });
vocabularyTopicSchema.index({ isActive: 1 });

export const VocabularyTopic = mongoose.model<IVocabularyTopic>('VocabularyTopic', vocabularyTopicSchema);