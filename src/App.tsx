import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import Header from './components/Header'
import Home from './pages/Home'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
