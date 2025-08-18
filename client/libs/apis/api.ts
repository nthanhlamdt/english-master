import { User } from "@/types"
import authorizedAxios from "./authorizedAxios"

interface ApiResponse<T = unknown> {
  success: boolean
  data: T
  message: string
}

interface LoginRequest {
  email: string
  password: string
}

//Login api
export async function login(credentials: LoginRequest): Promise<ApiResponse<User>> {
  const response = await authorizedAxios.post<ApiResponse<User>>('/auth/login', credentials)
  return response.data
}

//Logout api
export async function logout(): Promise<ApiResponse> {
  const response = await authorizedAxios.post<ApiResponse>('/auth/logout')
  return response.data
}


interface RegisterRequest {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

//register api
export async function register(credentials: RegisterRequest): Promise<ApiResponse<User>> {
  const response = await authorizedAxios.post<ApiResponse<User>>('/auth/register', credentials)
  return response.data
}