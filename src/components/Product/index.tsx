import React, { ReactNode, useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import * as s from './styles'
import logo from '../../assets/images/logo.png'
import { Restaurant, Cardapio } from '../../pages/Home'
import { open } from '../../store/reducers/cart'
import {
  useGetProductsQuery,
  useGetCurrentRestaurantsQuery
} from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  children: ReactNode
}

const Product = ({ children }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const { id } = useParams()

  const { data: cardapio } = useGetCurrentRestaurantsQuery(id!)

  return (
    <>
      <s.HeaderProduct>
        <div className="container">
          <Link to="/">
            <s.ButtonHome to="/">Restaurantes</s.ButtonHome>
          </Link>
          <s.Logo src={logo} />
          <s.ButtonCart onClick={openCart}>
            {items.length} produto(s) no carrinho
          </s.ButtonCart>
        </div>
      </s.HeaderProduct>
      {cardapio && (
        <s.ProductBanner style={{ backgroundImage: `url(${cardapio.capa})` }}>
          <s.Container>
            <s.Category>{cardapio.tipo}</s.Category>
            <s.Title>{cardapio.titulo}</s.Title>
          </s.Container>
        </s.ProductBanner>
      )}
      {children}
    </>
  )
}

export default Product
