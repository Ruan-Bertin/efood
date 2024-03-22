import { Restaurant } from '../../pages/Home'
import RestaurantCard from '../../components/Restaurant'
import * as s from './styles'

type Props = {
  restaurants: Restaurant[]
}

const getDescricao = (descricao: string) => {
  if (descricao.length > 250) {
    return descricao.slice(0, 247) + '...'
  }

  return descricao
}

const RestaurantList = ({ restaurants }: Props) => (
  <s.Container>
    <s.List>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          title={restaurant.titulo}
          image={restaurant.capa}
          category={restaurant.tipo}
          note={restaurant.avaliacao}
          description={getDescricao(restaurant.descricao)}
        />
      ))}
    </s.List>
  </s.Container>
)

export default RestaurantList
