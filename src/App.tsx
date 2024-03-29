import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import Header from './components/Header'
import Home from './pages/Home'
import Rotas from './routes'
import { store } from './store'
import Cart from './components/cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
