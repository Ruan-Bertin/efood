import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'
import bannerImg from '../../assets/images/restbanner1.png'

export const HeaderProduct = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 186px;
  background-image: url(${fundo});
  padding: 63px 171px 0px 171px;

  a {
    text-decoration: none;
    color: ${cores.rosa};
  }
`
export const Logo = styled.img`
  max-width: 125px;
  width: 100%;
  height: 57px;
`
export const ButtonHome = styled.a`
  width: 109px;
  height: 21px;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
`
export const ButtonCart = styled.button`
  width: 230px;
  height: 21px;
  font-weight: 900;
  font-size: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${cores.rosa};
`
export const ProductBanner = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background-image: url(${bannerImg});
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(48, 45, 46, 0.6);
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${cores.branca};
  padding: 24px 0 32px 0;
`
export const Category = styled.p`
  font-size: 32px;
  // font-weight: 100;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  z-index: 1;
  color: rgba(230, 240, 230, 0.9);
`
export const Title = styled.p`
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  z-index: 1;
`
