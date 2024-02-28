import { Link } from 'react-router-dom'
import {
  Back,
  Container,
  Description,
  Image,
  Note,
  Tag,
  Title,
  ButtonMore
} from './styles'
import star from '../../assets/images/estrela.png'

type Props = {
  id: number
  title: string
  image: string
  category: string
  note: number
  description: string
}

const Restaurant = ({
  id,
  title,
  image,
  category,
  note,
  description
}: Props) => (
  <Container>
    <Image src={image} alt={title} />
    <Back>
      <div>
        <Title>{title}</Title>
        <Note>
          <span>{note}</span>
          <img src={star} alt="Estrela" />
        </Note>
      </div>
      <Description>{description}</Description>
      <Link to={`/restaurant/${id}`}>
        <ButtonMore>Saiba mais</ButtonMore>
      </Link>
    </Back>
    <Tag>{category}</Tag>
  </Container>
)

export default Restaurant
