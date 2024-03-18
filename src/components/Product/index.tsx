import React, { ReactNode, useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
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
import { Restaurant } from '../../pages/Home'

type Props = {
  children: ReactNode
}

const Product = ({ children }: Props) => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurant | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  return (
    <>
      <HeaderProduct>
        <Link to="/">
          <ButtonHome>Restaurantes</ButtonHome>
        </Link>
        <Logo src={logo} />
        <ButtonCart>0 produto(s) no carrinho</ButtonCart>
      </HeaderProduct>
      {restaurante && (
        <ProductBanner style={{ backgroundImage: `url(${restaurante.capa})` }}>
          <Container>
            <Category>{restaurante.tipo}</Category>
            <Title>{restaurante.titulo}</Title>
          </Container>
        </ProductBanner>
      )}
      {children}
    </>
  )
}

export default Product
