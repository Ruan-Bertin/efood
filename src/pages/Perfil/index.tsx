import Footer from '../../components/Footer'
import Product from '../../components/Product'
import ProductLIst from '../../components/ProductList'
import ProductModel from '../../models/Product'
import productImage from '../../assets/images/itemImage.png'

const products: ProductModel[] = [
  {
    id: 1,
    image: productImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tonate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 2,
    image: productImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tonate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    image: productImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tonate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    image: productImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tonate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    image: productImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tonate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    image: productImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tonate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  }
]

const perfil = () => (
  <>
    <Product>
      <ProductLIst products={products} />
    </Product>
    <Footer />
  </>
)

export default perfil
