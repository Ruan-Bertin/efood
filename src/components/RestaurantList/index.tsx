import RestaurantModel from '../../models/Restaurant'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurantsCard) => (
        <Restaurant
          key={restaurantsCard.id}
          id={restaurantsCard.id}
          title={restaurantsCard.title}
          image={restaurantsCard.image}
          category={restaurantsCard.category}
          note={restaurantsCard.note}
          description={restaurantsCard.description}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantList
