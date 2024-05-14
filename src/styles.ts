import { createGlobalStyle } from 'styled-components'

export const cores = {
  beje: '#FFEBD9',
  areia: '#FFF8F2',
  rosa: '#E66767',
  branca: '#FFFFFF'
}

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px'
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

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 1000px;
    }
  }

  .margin-top{
    margin-top: 24px;
    margin-bottom: 8px;
}

  .margin-bottom{
    margin-bottom: 24px;
}
`
export default GlobalStyle
