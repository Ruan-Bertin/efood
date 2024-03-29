import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantList from '../../containers/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: Cardapio[]
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
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (restaurantes) {
    return (
      <>
        <Header />
        <RestaurantList restaurants={restaurantes} />
        <Footer />
      </>
    )
  }

  return <h3>CARREGANDO...</h3>
}

export default Home
