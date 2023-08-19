export class Photo {
  id: number
  description: string
  regularUrl: string
  smallUrl: string
  creationDate: Date

  constructor(obj: any) {
    const { id, description, created_at, urls } = obj
    this.id = id
    this.description = description
    this.creationDate = new Date(created_at)
    this.regularUrl = urls.regular
    this.smallUrl = urls.small
  }
}
