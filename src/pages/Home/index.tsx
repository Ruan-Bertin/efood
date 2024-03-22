import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantList from '../../containers/RestaurantList'
import { useEffect, useState } from 'react'

export type Restaurant = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  })

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
