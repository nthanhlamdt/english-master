export interface ImageData {
  _id: string
  type: string
  url: string
  publicId: string
  format: string
  size: number
  width: number
  height: number
  userId: {
    _id: string
    email: string
    fullName: string
  }
  createdAt: Date
  updatedAt: Date
}