import { ImageData, User, VocabularyTopic } from "@/types"
import AuthorizedAxios from "./authorizrAxios"

interface Response<T> {
  success: boolean
  message?: string
  data?: T
}

/*----------- AUTH - USER ------------ */
// login
interface DataLogin {
  email: string;
  password: string;
}
export async function login(data: DataLogin): Promise<Response<User>> {
  const response = await AuthorizedAxios.post('/auth/login', data)
  return response.data as Response<User>
}

//Logout api
export async function logout(): Promise<Response<User>> {
  const response = await AuthorizedAxios.post<Response<User>>('/auth/logout')
  return response.data as Response<User>
}

/*--------VOCABULARY TOPIC-----------*/
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


/*------------- MEDIA --------------*/
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