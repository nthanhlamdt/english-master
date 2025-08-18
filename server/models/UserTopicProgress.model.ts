import mongoose, { Document, Schema } from "mongoose";

export interface IUserTopicProgress extends Document {
  userId: mongoose.Types.ObjectId;
  vocabularyTopicId: mongoose.Types.ObjectId;
  isCompleted: boolean;
  point: number;
}

const userTopicProgressSchema = new Schema<IUserTopicProgress>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  vocabularyTopicId: {
    type: Schema.Types.ObjectId,
    ref: 'VocabularyTopic',
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  point: {
    type: Number,
    default: 0,
  },
}, { timestamps: true })

userTopicProgressSchema.index({ userId: 1, vocabularyTopicId: 1 }, { unique: true });

//Index để tìm kiếm nhanh
userTopicProgressSchema.index({ userId: 1, isCompleted: 1 });
userTopicProgressSchema.index({ vocabularyTopicId: 1 });

export const UserTopicProgress = mongoose.model<IUserTopicProgress>('UserTopicProgress', userTopicProgressSchema);