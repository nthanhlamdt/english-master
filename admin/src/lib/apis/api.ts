import { ImageData, Quiz, User, Vocabulary, VocabularyResult, VocabularyTopic } from "@/types"
import AuthorizedAxios from "./authorizrAxios"

interface Response<T> {
  success: boolean
  message?: string
  data?: T
}

/*=============== AUTH - USER ==============*/
// login
interface DataLogin {
  email: string;
  password: string;
}
export async function login(data: DataLogin): Promise<Response<User>> {
  const response = await AuthorizedAxios.post('/auth/login', { ...data, role: 'admin' })
  return response.data as Response<User>
}

//Logout api
export async function logout(): Promise<Response<User>> {
  const response = await AuthorizedAxios.post<Response<User>>('/auth/admin/logout', { role: 'admin' })
  return response.data as Response<User>
}

/*=============== VOCABULARY TOPIC ==============*/
//get vocabulary topics admin
export async function getVocabularyTopics(): Promise<Response<VocabularyTopic[]>> {
  const response = await AuthorizedAxios.get('/vocabulary/topics-admin')
  return response.data as Response<VocabularyTopic[]>
}

//create vocabulary topic admin
interface DataCreateVocabularyTopic {
  name: string
  image: string
}

export async function createVocabularyTopic(data: DataCreateVocabularyTopic): Promise<Response<VocabularyTopic>> {
  const response = await AuthorizedAxios.post('/vocabulary/create-topic', data)
  return response.data as Response<VocabularyTopic>
}

//delete vocabulary topic admin
export async function deleteVocabularyTopic(id: string): Promise<Response<VocabularyTopic>> {
  const response = await AuthorizedAxios.delete(`/vocabulary/topic/${id}`)
  return response.data as Response<VocabularyTopic>
}

//update vocabulary topic admin
interface DataUpdateVocabularyTopic {
  name: string
  image: string
}

export async function updateVocabularyTopic(id: string, data: DataUpdateVocabularyTopic): Promise<Response<VocabularyTopic>> {
  const response = await AuthorizedAxios.put(`/vocabulary/topic/${id}`, data)
  return response.data as Response<VocabularyTopic>
}

//update isActive vocabulary topic admin
export async function updateIsActiveVocabularyTopic(id: string): Promise<Response<VocabularyTopic>> {
  const response = await AuthorizedAxios.put(`/vocabulary/topic/${id}/status`)
  return response.data as Response<VocabularyTopic>
}

/*=============== VOCABULARY ==============*/
//get all vocabulary by topic id
export async function getVocabularyByTopicId(id: string): Promise<Response<VocabularyResult>> {
  const response = await AuthorizedAxios.get(`/vocabulary/${id}`)
  return response.data as Response<VocabularyResult>
}

// create vocabulary
interface DataCreateVocabulary {
  word: string;
  transcription: string;
  partOfSpeech: string;
  definition: string;
  vietnameseMeaning: string;
  example: string;
  image: string;
  vocabularyTopicId: string;
  quizId: string;
}
export async function createVocabulary(data: DataCreateVocabulary): Promise<Response<Vocabulary>> {
  const response = await AuthorizedAxios.post('/vocabulary/create', data)
  return response.data as Response<Vocabulary>
}

// Delete vocabulary
export async function deleteVocabulary(id: string): Promise<Response<Vocabulary>> {
  const response = await AuthorizedAxios.delete(`/vocabulary/${id}`)
  return response.data as Response<Vocabulary>
}

/*=============== MEDIA ==============*/
//get media list
export async function getMediaList(): Promise<Response<ImageData[]>> {
  const response = await AuthorizedAxios.get('/media/')
  return response.data as Response<ImageData[]>
}

//upload image single
export async function uploadImageSingle(file: File): Promise<Response<ImageData>> {
  const formData = new FormData()
  formData.append('file', file)
  const response = await AuthorizedAxios.post('/media/upload/single', formData)
  return response.data as Response<ImageData>
}

/*=============== QUIZ ==============*/
//get quiz list
export async function getQuizList(): Promise<Response<Quiz[]>> {
  const response = await AuthorizedAxios.get('/quiz/')
  return response.data as Response<Quiz[]>
}

//create quiz
interface DataCreateQuiz {
  assignment: string;
  question: string;
  type: "Multiple Choice" | "Fill in the blank";
  options?: string[];
  answer: string;
  explanation: string;
}
export async function createQuiz(data: DataCreateQuiz) {
  const response = await AuthorizedAxios.post('/quiz/create', data)
  return response.data as Response<Quiz>
}