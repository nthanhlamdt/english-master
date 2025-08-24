import axios, { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify'

const API_BASE_URL = 'http://localhost:8000/api'

interface QueueItem {
  resolve: (value?: unknown) => void
  reject: (error?: unknown) => void
}

interface AxiosResponseData<T> {
  success: boolean
  message: string
  data?: T
}

class AuthorizedAxios {
  private axiosInstance: AxiosInstance
  private isRefreshing = false
  private failedQueue: QueueItem[] = []

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      timeout: 30000,
      withCredentials: true, // Gửi cookies tự động
    })

    this.setupInterceptors()
  }

  private setupInterceptors(): void {
    // Response interceptor - CHỈ XỬ LÝ REFRESH TOKEN, KHÔNG XỬ LÝ LỖI KHÁC
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<AxiosResponseData<unknown>>) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }

        // CHỈ XỬ LÝ 410 VÀ REFRESH TOKEN
        if (error.response?.status === 410 && !originalRequest._retry) {
          if (this.isRefreshing) {
            return new Promise((resolve, reject) => {
              this.failedQueue.push({ resolve, reject })
            }).then(() => {
              return this.axiosInstance(originalRequest)
            }).catch(err => {
              return Promise.reject(err)
            })
          }

          originalRequest._retry = true
          this.isRefreshing = true

          try {
            // Gọi refresh token
            await this.axiosInstance.post('/auth/refresh-token', { role: 'user' })

            // Thành công, thực hiện lại các request đang chờ
            this.processQueue(null)
            return this.axiosInstance(originalRequest)

          } catch (refreshError) {
            // Refresh thất bại - CHỈ XỬ LÝ LOGOUT
            this.processQueue(refreshError)
            this.handleAuthError()
            return Promise.reject(refreshError)
          } finally {
            this.isRefreshing = false
          }
        }

        return Promise.reject(error)
      }
    )
  }

  private processQueue(error: unknown): void {
    this.failedQueue.forEach(({ resolve, reject }) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })

    this.failedQueue = []
  }

  private handleAuthError(): void {
    toast.error('Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.')
    localStorage.removeItem('userData')

    // Redirect về login
    if (typeof window !== 'undefined') {
      window.location.href = '/login'
    }
  }

  // API methods với proper typing
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config)
  }

  post<T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config)
  }

  put<T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config)
  }

  patch<T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.patch<T>(url, data, config)
  }

  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config)
  }
}

export const authorizedAxios = new AuthorizedAxios()
export default authorizedAxios