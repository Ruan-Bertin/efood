class Restaurant {
  id: number
  title: string
  image: string
  category: string
  note: number
  description: string

  constructor(
    id: number,
    title: string,
    image: string,
    category: string,
    note: number,
    description: string
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.category = category
    this.note = note
    this.description = description
  }
}

export default Restaurant
