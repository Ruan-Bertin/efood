import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.beje};
  height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Copy = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.72px;
  text-align: center;
  color: ${cores.rosa};
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
  margin-bottom: 32.5px;
`
export const SocialList = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
`
export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`
