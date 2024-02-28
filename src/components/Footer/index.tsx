import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/Instagram.png'
import facebook from '../../assets/images/Facebook.png'
import twiter from '../../assets/images/Twiter.png'

import { FooterContainer, Copy, Logo, SocialList, SocialIcon } from './styles'

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="Logo Efood" />
    <SocialList>
      <SocialIcon src={instagram} alt="Logo instagram" />
      <SocialIcon src={facebook} alt="Logo facebook" />
      <SocialIcon src={twiter} alt="Logo twiter" />
    </SocialList>
    <Copy>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Copy>
  </FooterContainer>
)

export default Footer
