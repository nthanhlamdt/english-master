import { ObjectId } from "mongoose";
import { UserTopicProgress } from "../models/UserTopicProgress.model";
import { IVocabularyTopic, VocabularyTopic } from "../models/vocabularyTopic.model";
import ErrorHandler from "../utils/ErrorHandler";
import { MediaService } from "./media.service";
import { IVocabulary, Vocabulary } from "../models/vocabulary.model";

interface ITopicVocabularyUserResponse extends IVocabularyTopic {
  isCompleted: boolean;
  point: number;
}

interface ITopicData {
  name: string;
  image: string;
}

interface IVocabularyData {
  word: string;
  transcription: string;
  partOfSpeech: 'Noun' | 'Verb' | 'Adjective' | 'Adverb' | 'Preposition' | 'Conjunction' | 'Interjection'; //Từ loại
  definition: string;
  vietnameseMeaning: string;
  example: string;
  image: string;
  vocabularyTopicId: string;
  quizId: string;
}

interface IVocabularyResult {
  vocabulary: IVocabulary[];
  vocabularyTopic: IVocabularyTopic
}

export class VocabularyService {
  /*====================================== CHỦ ĐỀ TỪ VỰNG ======================================*/
  // (ADMIN) LẤY TẤT CẢ CHỦ ĐỀ TỪ VỰNG
  static async getAllTopics(): Promise<IVocabularyTopic[]> {
    const topics = await VocabularyTopic.find()
      .sort({ orderIndex: 1 })
      .populate({
        path: 'image',
        select: 'url'
      });
    return topics
  }

  //(USER) LẤY TẤT CẢ CHỦ ĐỀ TỪ VỰNG
  static async getAllTopicsVocabularyUser(userId: string): Promise<ITopicVocabularyUserResponse[]> {
    const topics = await VocabularyTopic.find({ isActive: true })
      .sort({ orderIndex: 1 })
      .populate({
        path: 'image',
        select: 'url'
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

  //(ADMIN) XÓA CHỦ ĐỀ TỪ VỰNG
  static async deleteTopicVocabulary(topicId: string): Promise<IVocabularyTopic> {
    const vocabularyTopic = await VocabularyTopic.findByIdAndDelete(topicId);
    if (!vocabularyTopic) throw new ErrorHandler('Chủ đề từ vựng không tồn tại', 404);

    await VocabularyTopic.updateMany({ orderIndex: { $gt: vocabularyTopic.orderIndex } }, { $inc: { orderIndex: -1 } });

    return vocabularyTopic;
  }

  //(ADMIN) SỬA CHỦ ĐỀ TỪ VỰNG
  static async updateTopicVocabulary(topicId: string, topicData: ITopicData): Promise<IVocabularyTopic> {
    const { name, image } = topicData;
    const vocabularyTopic = await VocabularyTopic.findById(topicId);
    if (!vocabularyTopic) throw new ErrorHandler('Chủ đề từ vựng không tồn tại', 404);

    if (image) {
      const imageExist = await MediaService.getMediaById(image);
      if (!imageExist) throw new ErrorHandler('Ảnh không tồn tại', 404);
    }

    vocabularyTopic.name = name;
    vocabularyTopic.image = image as unknown as ObjectId;
    await vocabularyTopic.save();

    return vocabularyTopic;
  }

  //(ADMIN) CẬP NHẬT TRẠNG THÁI XUẤT BẢN
  static async updateTopicVocabularyStatus(topicId: string): Promise<IVocabularyTopic> {
    const vocabularyTopic = await VocabularyTopic.findById(topicId);
    if (!vocabularyTopic) throw new ErrorHandler('Chủ đề từ vựng không tồn tại', 404);

    const vocabularysByTopic = await Vocabulary.find({ vocabularyTopicId: topicId })
    if (vocabularysByTopic.length <= 0) throw new ErrorHandler('Chủ đề cần hơn 10 từ vựng mới có thể xuất bản', 400);

    vocabularyTopic.isActive = !vocabularyTopic.isActive;
    await vocabularyTopic.save();

    return vocabularyTopic;
  }





  /*====================================== TỪ VỰNG ======================================*/
  //(ADMIN) LẤY TẤT CẢ TỪ VỰNG THEO CHỦ ĐỀ
  static async getAllVocabularyByTopic(topicId: string): Promise<IVocabularyResult> {
    const vocabularyTopic = await VocabularyTopic.findById(topicId);
    if (!vocabularyTopic) throw new ErrorHandler('Chủ đề từ vựng không tồn tại', 404);

    const vocabulary = await Vocabulary.find({ vocabularyTopicId: topicId }).populate({
      path: 'image',
      select: 'url'
    })
    return {
      vocabulary,
      vocabularyTopic
    }
  }

  //(ADMIN) TẠO TỪ VỰNG
  static async createVocabulary(vocabularyData: IVocabularyData): Promise<IVocabulary> {
    const vocabularyTopicExist = await VocabularyTopic.findById(vocabularyData.vocabularyTopicId);
    if (!vocabularyTopicExist) throw new ErrorHandler('Chủ đề từ vựng không tồn tại', 404);

    const vocabularyExist = await Vocabulary.findOne({ word: vocabularyData.word });
    if (vocabularyExist) throw new ErrorHandler('Từ vựng đã tồn tại', 400);

    const imageExist = await MediaService.getMediaById(vocabularyData.image);
    if (!imageExist) throw new ErrorHandler('Ảnh không tồn tại', 404);

    const vocabulary = await Vocabulary.create(vocabularyData);
    return vocabulary;
  }

  //(ADMIN) SỬA TỪ VỰNG
  static async updateVocabulary(vocabularyId: string, vocabularyData: IVocabularyData): Promise<IVocabulary> {
    const vocabulary = await Vocabulary.findByIdAndUpdate(vocabularyId, vocabularyData, { new: true });
    if (!vocabulary) throw new ErrorHandler('Từ vựng không tồn tại', 404);
    return vocabulary;
  }

  //(ADMIN) XÓA TỪ VỰNG
  static async deleteVocabulary(vocabularyId: string): Promise<IVocabulary> {
    const vocabulary = await Vocabulary.findByIdAndDelete(vocabularyId);
    if (!vocabulary) throw new ErrorHandler('Từ vựng không tồn tại', 404);
    return vocabulary;
  }
}