import styled from 'styled-components'
import fechar from '../../assets/images/lixeira.png'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  button {
    border: none;
    color: ${cores.rosa};
    width: 100%;
    cursor: pointer;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px 16px 8px;
  max-width: 360px;
  width: 100%;

  &.is-closed {
    display: none;
  }
  label {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: ${cores.beje};
    display: block;
    margin-bottom: 8px;
  }
  input {
    background-color: ${cores.beje};
    height: 32px;
    padding: 8px;
    border: none;
    width: 100%;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: black;

    &.error {
      border: 2px solid red;
      color: red;
    }
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${cores.beje};
    margin-bottom: 16px;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
  color: ${cores.branca};
  margin-top: 40px;
  margin-bottom: 16px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.branca};
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.beje};
  border-bottom: 1px solid ${cores.beje};
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }

  h3 {
    color: ${cores.rosa};
    font-weight: bold;
    font-size: 16px;
    padding-top: 8px;
    padding-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.rosa};
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 75px;
    left: 320px;
  }
`
export const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${cores.beje};
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 34px;
  #cardNumber {
    width: 228px;
  }
`
export const Button = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  background-color: ${cores.beje};
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
`
