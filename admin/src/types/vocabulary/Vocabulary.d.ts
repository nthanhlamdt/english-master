export interface VocabularyTopic {
  _id: string;
  orderIndex: number;
  name: string;
  image: {
    _id: string;
    url: string;
  };
  isActive: boolean;
}

export interface Vocabulary {
  _id: string;
  word: string;
  transcription: string;
  partOfSpeech: string;
  definition: string;
  vietnameseMeaning: string;
  example: string;
  image: {
    _id: string;
    url: string;
  };
  vocabularyTopicId: string;
  quizId: string;
}

export interface VocabularyResult {
  vocabulary: Vocabulary[],
  vocabularyTopic: VocabularyTopic
}