import ProductModel from '../../models/Product'
import {
  List,
  ListItem,
  ItemImg,
  ItemTitle,
  ItemDescription,
  ItemButtom
} from './styles'

type Props = {
  products: ProductModel[]
}

export const ProductLIst = ({ products }: Props) => (
  <List>
    {products.map((product) => (
      <ListItem key={product.id}>
        <ItemImg src={product.image} />
        <ItemTitle>{product.title}</ItemTitle>
        <ItemDescription>{product.description}</ItemDescription>
        <ItemButtom>{product.button}</ItemButtom>
      </ListItem>
    ))}
  </List>
)

export default ProductLIst
