import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../containers/ProductList'
import Button from '../Button'
import * as s from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <s.CartContainer className={isOpen ? 'is-open' : ''}>
      <s.Overlay onClick={closeCart} />
      <s.SideBar>
        <ul>
          {items.map((item) => (
            <s.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </s.CartItem>
          ))}
        </ul>
        <s.Prices>
          {' '}
          <span>Valor total</span>
          <span>{formataPreco(getTotalPrice())}</span>{' '}
        </s.Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a entrega
        </Button>
      </s.SideBar>
    </s.CartContainer>
  )
}

export default Cart
