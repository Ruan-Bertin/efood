import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonPerfil = styled(Link)`
  width: 82px;
  height: 24px;
  padding: 4px 6px;
  background-color: ${cores.rosa};
  font-color: ${cores.branca};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
`

export const ButtonCarrinho = styled.button`
  width: 304px;
  height: 24px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  letter-spacing: 0em;
  text-align: center;
  font-color: ${cores.rosa};
  background-color: ${cores.beje};
`
