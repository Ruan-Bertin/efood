import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 472px;
  width: 100%;
  height: 398px;
  background-color: ${cores.branca};
  margin-bottom: 48px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 420px;
    height: 450px;
  }
`
export const Back = styled.div`
  max-width: 472px;
  width: 100%;
  height: 181px;
  border-style: solid;
  border-color: ${cores.rosa};
  border-width: 0px 1px 1px 1px;
  color: ${cores.branca};
  padding: 8px;

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    position: absolute;
    left: 8px;
  }
`

export const Tag = styled.span`
  height: 26px;
  font-weight: 700;
  line-height: 14.06px;
  text-align: center;
  font-size: 12px;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 10px;
`
export const Image = styled.img`
  width: 472px;
  height: 217px;
  margin-bottom: -4px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 420px;
    height: 210px;
  }
`
export const Title = styled.h3`
  font-size: 18px;
  line-height: 21.09px;
  font-weight: 700;
  color: ${cores.rosa};
`
export const Note = styled.div`
  width: 55px;
  height: 21px;

  img {
    width: 21px;
    height: 21px;
  }

  span {
    font-size: 18px;
    line-height: 21.09px;
    font-weight: 700;
    color: ${cores.rosa};
  }
`
export const Description = styled.p`
  max-width: 456px;
  width: 100%;
  height: 88px;
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0px;
  color: ${cores.rosa};

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 25px;
  }
`
export const ButtonMore = styled(Link)`
  width: 82px;
  height: 24px;
  padding: 4px 6px;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  border: none;
  cursor: pointer;
  text-decoration: none;
`
