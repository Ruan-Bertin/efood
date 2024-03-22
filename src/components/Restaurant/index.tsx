import * as s from './styles'
import star from '../../assets/images/estrela.png'

type Props = {
  id: number
  title: string
  image: string
  category: string
  note: number
  description: string
}

const RestaurantCard = ({
  id,
  title,
  image,
  category,
  note,
  description
}: Props) => (
  <s.Container>
    <s.Image src={image} alt={title} />
    <s.Back>
      <div>
        <s.Title>{title}</s.Title>
        <s.Note>
          <span>{note}</span>
          <img src={star} alt="Estrela" />
        </s.Note>
      </div>
      <s.Description>{description}</s.Description>
      <s.ButtonMore to={`/restaurant/${id}`}>Saiba mais</s.ButtonMore>
    </s.Back>
    <s.Tag>{category}</s.Tag>
  </s.Container>
)

export default RestaurantCard
