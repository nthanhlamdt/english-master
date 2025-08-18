import mongoose, { Document, Schema } from "mongoose";

export interface IMedia extends Document {
  type: 'image' | 'audio' | 'video';
  url: string;
  publicId: string;
  format: string;
  size: number;
  duration: number;
  width?: number; // Cho image/video
  height?: number; // Cho image/video
  userId: mongoose.Types.ObjectId
}

const mediaSchema = new Schema<IMedia>({
  type: {
    type: String, enum: ['image', 'audio', 'video'],
    default: 'image'
  },
  url: {
    type: String,
    required: [true, 'Vui lòng nhập đường dẫn media']
  },
  publicId: {
    type: String,
    required: [true, 'Vui lòng nhập publicId media']
  },
  format: {
    type: String,
    required: [true, 'Vui lòng nhập định dạng media']
  },
  size: {
    type: Number,
    required: [true, 'Vui lòng nhập kích thước media']
  },
  duration: {
    type: Number,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Vui lòng nhập người tải lên media']
  }
}, { timestamps: true })

mediaSchema.index({ url: 1 })

export const Media = mongoose.model<IMedia>('Media', mediaSchema)

