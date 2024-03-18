import { Restaurant } from '../../pages/Home'
import RestaurantCard from '../Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          title={restaurant.titulo}
          image={restaurant.capa}
          category={restaurant.tipo}
          note={restaurant.avaliacao}
          description={restaurant.descricao}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantList
