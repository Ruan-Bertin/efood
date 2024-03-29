import { useState } from 'react'
import * as s from './styles'

import fechar from '../../assets/images/close.png'
import Button from '../../components/Button'
import { Cardapio } from '../../pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  products: Cardapio[]
}

interface ModalState {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
export const ProductList: React.FC<Props> = ({ products }) => {
  console.log(products)
  const getDescricao = (descricao: string) => {
    if (descricao.length > 170) {
      return descricao.slice(0, 167) + '...'
    }

    return descricao
  }

  const [selectedProduct, setSelectedProduct] = useState<Cardapio>()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const openModal = (product: Cardapio) => {
    setSelectedProduct(product)
    setModal({
      isVisible: true
    })
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(selectedProduct!))
    dispatch(open())
  }

  return (
    <>
      <s.List>
        {products.map((product) => (
          <s.ListItem key={product.id}>
            <s.ItemImg src={product.foto} />
            <s.ItemTitle>{product.nome}</s.ItemTitle>
            <s.ItemDescription>
              {getDescricao(product.descricao)}
            </s.ItemDescription>
            <s.ItemButtom onClick={() => openModal(product)}>
              Adicionar ao carrinho
            </s.ItemButtom>
          </s.ListItem>
        ))}
      </s.List>
      <s.ModalContainer className={modal.isVisible ? 'visivel' : ''}>
        <s.Modal className="Container">
          <header>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                setModal({
                  isVisible: false
                })
              }}
            />
          </header>
          <s.ModalContent>
            <img src={selectedProduct?.foto} alt="teste" />
            <div>
              <h4>{selectedProduct?.nome}</h4>
              <p>
                {selectedProduct?.descricao}
                <br />
                <br />
                Serve: de {selectedProduct?.porcao}
              </p>
              <Button
                type="button"
                title="adicionar ao carrinho"
                onClick={addToCart}
              >
                {[
                  'Adicionar ao carrinho - ',
                  formataPreco(selectedProduct?.preco)
                ].join('')}
              </Button>
            </div>
          </s.ModalContent>
        </s.Modal>
        <div
          className="overlay"
          onClick={() => {
            setModal({
              isVisible: false
            })
          }}
        ></div>
      </s.ModalContainer>
    </>
  )
}

export default ProductList
