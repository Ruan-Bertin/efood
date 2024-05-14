import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const List = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 120px;
  margin-top: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 16px;
    justify-items: center;
  }
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
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const Modal = styled.div`
  width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  background-color: ${cores.rosa};
  color: ${cores.branca};

  Header {
    display: flex;
    justify-content: flex-end;

    img {
      width: 16px;
      height: 16px;
      margin-top: 8px;
      margin-right: 8px;
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: auto;
  }
`

export const ModalContent = styled.div`
  display: flex;
  padding: 8px 32px 32px 32px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      height: auto;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    letter-spacing: 0em;
    padding-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 10px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }

  div {
    display: flex;
    flex-direction: column;
    padding-left: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      padding-left: 0;
    }
  }

  button {
    width: 218px;
    height: 24px;
    color: ${cores.rosa};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-top: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`
