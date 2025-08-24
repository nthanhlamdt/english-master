'use client'

import { User } from "@/types";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, register } from "../apis/api";
import { toast } from "react-toastify";


interface LoginRequest {
  email: string
  password: string
}
interface RegisterRequest {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (credentials: LoginRequest) => Promise<void>
  logout: () => void
  register: (credentials: RegisterRequest) => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  login: async () => { },
  logout: () => { },
  register: async () => { }
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setIsLoading(false);
  }, []);

  const loginUser = async (credentials: LoginRequest) => {
    setIsLoading(true)
    await login(credentials)
      .then((res) => {
        localStorage.setItem('userData', JSON.stringify(res.data))
        setUser(res.data)
        toast.success('Đăng nhập thành công')
        router.push('/dashboard')
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || error?.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const logoutUser = async () => {
    await logout()
      .then(() => {
        localStorage.removeItem('userData')
        setUser(null)
        toast.success('Đăng xuất thành công')
        router.push('/')
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || error?.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const registerUser = async (credentials: RegisterRequest) => {
    setIsLoading(true)
    await register(credentials)
      .then((res) => {
        localStorage.setItem('userData', JSON.stringify(res.data))
        setUser(res.data)
        toast.success('Đăng kí tài khoản thành công')
        router.push('/dashboard')
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || error?.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login: loginUser, logout: logoutUser, register: registerUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}