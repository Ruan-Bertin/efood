import { useState } from 'react'
import * as s from './styles'

import fechar from '../../assets/images/close.png'
import Button from '../../components/Button'
import { Cardapio } from '../../pages/Home'

type Props = {
  products: Cardapio[]
}

interface ModalState {
  isVisible: boolean
  image: string
  title: string
  description: string
  porcao: string
  preco: number
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
export const ProductList: React.FC<Props> = ({ products }) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 170) {
      return descricao.slice(0, 167) + '...'
    }

    return descricao
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    image: '',
    title: '',
    description: '',
    porcao: '',
    preco: 0
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      image: '',
      title: '',
      description: '',
      porcao: '',
      preco: 0
    })
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
            <s.ItemButtom
              onClick={() => {
                setModal({
                  isVisible: true,
                  image: `${product.foto}`,
                  title: `${product.nome}`,
                  description: `${product.descricao}`,
                  porcao: `${product.porcao}`,
                  preco: product.preco
                })
              }}
            >
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
                closeModal()
              }}
            />
          </header>
          <s.ModalContent>
            <img src={modal.image} alt="teste" />
            <div>
              <h4>{modal.title}</h4>
              <p>
                {modal.description}
                <br />
                <br />
                Serve: de {modal.porcao}
              </p>
              <Button type="button" title="adicionar ao carrinho">
                {['Adicionar ao carrinho - ', formataPreco(modal.preco)].join(
                  ''
                )}
              </Button>
            </div>
          </s.ModalContent>
        </s.Modal>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </s.ModalContainer>
    </>
  )
}

export default ProductList
