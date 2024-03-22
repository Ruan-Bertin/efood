import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/Instagram.png'
import facebook from '../../assets/images/Facebook.png'
import twiter from '../../assets/images/Twiter.png'

import * as s from './styles'

const Footer = () => (
  <s.FooterContainer>
    <s.Logo src={logo} alt="Logo Efood" />
    <s.SocialList>
      <s.SocialIcon src={instagram} alt="Logo instagram" />
      <s.SocialIcon src={facebook} alt="Logo facebook" />
      <s.SocialIcon src={twiter} alt="Logo twiter" />
    </s.SocialList>
    <s.Copy>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </s.Copy>
  </s.FooterContainer>
)

export default Footer
