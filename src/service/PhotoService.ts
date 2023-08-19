import { createApi, SearchOrderBy } from 'unsplash-js'
import { PhotosDTO } from '../data-transports/PhotosDTO'
import { Photo } from '../models/Photo'

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
})

export class PhotoService {
  async findPhotos(
    query: string,
    page: number,
    perPage: number,
    criteria: string
  ): Promise<PhotosDTO> {
    let photosDTO: PhotosDTO = {
      photos: [],
      totalPages: 0,
    }

    if (query) {
      const result = await unsplash.search.getPhotos({
        query,
        page,
        perPage,
        orientation: 'landscape',
        orderBy: criteria as SearchOrderBy,
      })

      const { response } = result
      if (response) {
        const { results, total_pages } = response
        const photos = results.map((r) => new Photo(r))
        photosDTO = {
          photos,
          totalPages: total_pages,
        }
      }
    }

    return photosDTO
  }
}
