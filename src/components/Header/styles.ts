import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'

import { cores } from '../../styles'

export const HeaderBar = styled.header`
  height: 384px;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`
export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 138px;
`
export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: ${cores.rosa};
  max-width: 539px;
  width: 100%;
  text-align: center;

  @media (max-width: 615px) {
    font-size: 24px;
  }
`
