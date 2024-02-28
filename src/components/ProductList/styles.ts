import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 120px;
  margin-top: 56px;
`
export const ListItem = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  padding: 8px;
  display: flex;
  flex-direction: column;
`
export const ItemImg = styled.img`
  width: 304px;
  height: 167px;
  padding-bottom: 8px;
`
export const ItemTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 8px;
`
export const ItemDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 8px;
`
export const ItemButtom = styled.button`
  width: 304px;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  background-color: ${cores.beje};
  color: ${cores.rosa};
  border: none;
  cursor: pointer;
`
