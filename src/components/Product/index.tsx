import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  HeaderProduct,
  Logo,
  ButtonCart,
  ButtonHome,
  ProductBanner,
  Container,
  Category,
  Title
} from './styles'
import logo from '../../assets/images/logo.png'

interface ProductProps {
  children: ReactNode // Tipo explicitamente definido como ReactNode
}

const Product = ({ children }: ProductProps) => (
  <>
    <HeaderProduct>
      <Link to="/">
        <ButtonHome>Restaurantes</ButtonHome>
      </Link>
      <Logo src={logo} />
      <ButtonCart>0 produto(s) no carrinho</ButtonCart>
    </HeaderProduct>
    <ProductBanner>
      <Container>
        <Category>Italiana</Category>
        <Title>La Dolce Vita trattoria</Title>
      </Container>
    </ProductBanner>
    {children}
  </>
)

export default Product
