import { createGlobalStyle } from 'styled-components'

export const cores = {
  beje: '#FFEBD9',
  areia: '#FFF8F2',
  rosa: '#E66767',
  branca: '#FFFFFF'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: ${cores.areia}
  }
`
export default GlobalStyle
