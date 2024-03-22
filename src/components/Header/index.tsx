import logo from '../../assets/images/logo.png'
import * as s from './styles'

const Header = () => (
  <s.HeaderBar>
    <s.Logo src={logo} alt="Efood" />
    <s.Title>Viva experiências gastronômicas no conforto da sua casa</s.Title>
  </s.HeaderBar>
)

export default Header
