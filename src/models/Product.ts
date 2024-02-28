class Product {
  id: number
  title: string
  image: string
  description: string
  button: string

  constructor(
    id: number,
    title: string,
    image: string,
    description: string,
    button: string
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.description = description
    this.button = button
  }
}

export default Product
