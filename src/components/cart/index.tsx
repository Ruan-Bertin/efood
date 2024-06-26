import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { formataPreco } from '../../containers/ProductList'
import * as s from './styles'
import InputMask from 'react-input-mask'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const [cart, setCart] = useState(true)
  const [purchaseData, setPurchaseData] = useState(false)
  const [paymentData, setPaymentData] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const [emptyCart, setEmptyCart] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      CEP: '',
      number: '',
      reference: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      address: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      city: Yup.string()
        .min(4, 'O campo precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatorio'),
      CEP: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      number: Yup.number()
        .min(2, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      cardName: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      cardNumber: Yup.string()
        .min(16, 'O campo precisa ter pelo menos 16 caracteres')
        .required('Campo obrigatorio'),
      cvv: Yup.number()
        .min(3, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      expiresMonth: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      expiresYear: Yup.string()
        .min(4, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 10
          }
        ],
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.CEP,
            number: Number(values.number),
            complement: values.reference
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInput = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const goToPurchase = () => {
    setCart(false)
    setPurchaseData(true)
  }

  const backToCart = () => {
    setCart(true)
    setPurchaseData(false)
    setPaymentData(false)
    setCheckout(false)
  }

  const goToPayment = () => {
    if (
      !form.errors.fullName &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.CEP &&
      !form.errors.number
    ) {
      setPurchaseData(false)
      setPaymentData(true)
    }
  }

  const backToPurchase = () => {
    setPaymentData(false)
    setPurchaseData(true)
  }

  const goToCheckout = () => {
    if (
      !form.errors.cardName &&
      !form.errors.cardNumber &&
      !form.errors.cvv &&
      !form.errors.expiresMonth &&
      !form.errors.expiresYear
    ) {
      setPaymentData(false)
      setCheckout(true)
      dispatch(clear())
    }
  }

  const finishPurchase = () => {
    setCart(true)
    setCheckout(false)
    closeCart()
    setEmptyCart(false)
    navigate('/')
  }

  return (
    <s.CartContainer className={isOpen ? 'is-open' : ''}>
      <s.Overlay onClick={closeCart} />
      <s.Sidebar className={cart ? '' : 'is-closed'}>
        {items.length < 1 ? (
          <div>
            <s.Title>Carrinho vazio</s.Title>
            <s.Button onClick={closeCart} type="button" title="fechar carrinho">
              fechar carrinho
            </s.Button>
          </div>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <s.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} />
                </s.CartItem>
              ))}
            </ul>
            <s.Prices>
              Valor total <span>{formataPreco(getTotalPrice())}</span>
            </s.Prices>
            <s.Button
              onClick={goToPurchase}
              type="button"
              title="continuar com a compra"
            >
              Continuar com a entrega
            </s.Button>
          </>
        )}
      </s.Sidebar>
      <s.Sidebar className={purchaseData ? '' : 'is-closed'}>
        <s.Title>Entrega</s.Title>
        <form className="margin-bottom" onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('fullName') ? 'error' : ''}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('address') ? 'error' : ''}
            />
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('city') ? 'error' : ''}
            />
          </div>
          <s.InputGroup>
            <div>
              <label htmlFor="CEP">CEP</label>
              <InputMask
                type="text"
                name="CEP"
                id="CEP"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('CEP') ? 'error' : ''}
                mask="99999-999"
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                name="number"
                id="number"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('number') ? 'error' : ''}
              />
            </div>
          </s.InputGroup>
          <div>
            <label htmlFor="reference">Complemento (opcional)</label>
            <input
              type="text"
              name="reference"
              id="reference"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
        </form>
        {form.dirty ? (
          <s.Button
            type="button"
            title="Continuar com o pagamento"
            onClick={goToPayment}
          >
            Continuar com pagamento
          </s.Button>
        ) : (
          ''
        )}
        <s.Button
          type="button"
          title="Voltar para o carrinho"
          onClick={backToCart}
        >
          Voltar para carrinho
        </s.Button>
      </s.Sidebar>
      <s.Sidebar className={paymentData ? '' : 'is-closed'}>
        <s.Title>
          Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
        </s.Title>
        <form onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('cardName') ? 'error' : ''}
            />
          </div>
          <s.InputGroup>
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                type="text"
                name="cardNumber"
                id="cardNumber"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('cardNumber') ? 'error' : ''}
                mask="9999 9999 9999 9999"
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <InputMask
                type="text"
                name="cvv"
                id="cvv"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('cvv') ? 'error' : ''}
                mask="999"
              />
            </div>
          </s.InputGroup>
          <s.InputGroup>
            <div>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <InputMask
                type="text"
                name="expiresMonth"
                id="expiresMonth"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('expiresMonth') ? 'error' : ''}
                mask="99"
              />
            </div>
            <div>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <InputMask
                type="text"
                name="expiresYear"
                id="expiresYear"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('expiresYear') ? 'error' : ''}
                mask="9999"
              />
            </div>
          </s.InputGroup>
          <s.Button
            type="submit"
            title="Finalizar pagamento"
            onClick={goToCheckout}
            className="margin-top"
          >
            Finalizar pagamento
          </s.Button>
          <s.Button
            title="Voltar para edição de endereço"
            type="button"
            onClick={backToPurchase}
          >
            Voltar para a edição de endereço
          </s.Button>
        </form>
      </s.Sidebar>
      {isSuccess && data ? (
        <s.Sidebar className={checkout ? '' : 'is-closed'}>
          <s.Title>Pedido realizado - {data.orderId}</s.Title>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <s.Button
            className="margin-top"
            title="Concluir"
            type="button"
            onClick={finishPurchase}
          >
            Concluir
          </s.Button>
        </s.Sidebar>
      ) : (
        <s.Sidebar className={checkout ? '' : 'is-closed'}>
          <h3>Erro na transação</h3>
          <s.Button
            type="button"
            title="Voltar para o carrinho"
            onClick={backToCart}
          >
            Voltar para carrinho
          </s.Button>
        </s.Sidebar>
      )}
    </s.CartContainer>
  )
}

export default Cart
