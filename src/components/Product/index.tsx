import React, { ReactNode, useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import * as s from './styles'
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
      <s.HeaderProduct>
        <Link to="/">
          <s.ButtonHome>Restaurantes</s.ButtonHome>
        </Link>
        <s.Logo src={logo} />
        <s.ButtonCart>0 produto(s) no carrinho</s.ButtonCart>
      </s.HeaderProduct>
      {restaurante && (
        <s.ProductBanner
          style={{ backgroundImage: `url(${restaurante.capa})` }}
        >
          <s.Container>
            <s.Category>{restaurante.tipo}</s.Category>
            <s.Title>{restaurante.titulo}</s.Title>
          </s.Container>
        </s.ProductBanner>
      )}
      {children}
    </>
  )
}

export default Product
