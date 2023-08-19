import { Photo } from '../models/Photo'

export type PhotosDTO = {
  photos: Photo[]
  totalPages: number
}
