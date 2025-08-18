import { UserTopicProgress } from "../models/UserTopicProgress.model";
import { IVocabularyTopic, VocabularyTopic } from "../models/vocabularyTopic.model";
import ErrorHandler from "../utils/ErrorHandler";
import { MediaService } from "./media.service";

interface ITopicVocabularyUserResponse extends IVocabularyTopic {
  isCompleted: boolean;
  point: number;
}

interface ITopicData {
  name: string;
  image: string;
}

export class VocabularyService {
  // (ADMIN) LẤY TẤT CẢ CHỦ ĐỀ TỪ VỰNG
  static async getAllTopics(): Promise<IVocabularyTopic[]> {
    const topics = await VocabularyTopic.find()
      .sort({ orderIndex: 1 })
      .populate({
        path: 'image',
        select: 'url',
        transform: (doc) => doc ? doc.url : null
      });
    return topics
  }

  //(USER) LẤY TẤT CẢ CHỦ ĐỀ TỪ VỰNG
  static async getAllTopicsVocabularyUser(userId: string): Promise<ITopicVocabularyUserResponse[]> {
    const topics = await VocabularyTopic.find({ isActive: true })
      .sort({ orderIndex: 1 })
      .populate({
        path: 'image',
        select: 'url',
        transform: (doc) => doc ? doc.url : null
      });

    const topicsResult = await Promise.all(topics.map(async (topic) => {
      const topicProgress = await UserTopicProgress.findOne({ userId: userId, vocabularyTopicId: topic._id });
      return {
        ...topic.toObject(),
        isCompleted: topicProgress?.isCompleted || false,
        point: topicProgress?.point || 0,
      } as unknown as ITopicVocabularyUserResponse
    }))
    return topicsResult;
  }

  //(ADMIN) TẠO CHỦ ĐỀ TỪ VỰNG
  static async createTopicVocabulary(topicData: ITopicData): Promise<IVocabularyTopic> {
    const { name, image } = topicData;
    // Tìm orderIndex lớn nhất hiện tại
    const lastTopic = await VocabularyTopic.findOne().sort({ orderIndex: -1 });
    const nextOrderIndex = (lastTopic?.orderIndex || 0) + 1;

    const imageExist = await MediaService.getMediaById(image);
    if (!imageExist) throw new ErrorHandler('Ảnh không tồn tại', 404);

    const newTopic = await VocabularyTopic.create({
      name,
      image,
      orderIndex: nextOrderIndex
    })
    await newTopic.save();

    return newTopic;
  }
}