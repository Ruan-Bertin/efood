import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  padding-top: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`
export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
