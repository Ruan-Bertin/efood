import { useState } from 'react'
import {
  List,
  ListItem,
  ItemImg,
  ItemTitle,
  ItemDescription,
  ItemButtom,
  ModalContainer,
  Modal,
  ModalContent
} from './styles'

import fechar from '../../assets/images/close.png'
import Button from '../Button'
import { Cardapio } from '../../pages/Home'

type Props = {
  products: Cardapio[]
}

interface ModalState {
  isVisible: boolean
  image: string
  title: string
  description: string
}

export const ProductList: React.FC<Props> = ({ products }) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    image: '',
    title: '',
    description: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      image: '',
      title: '',
      description: ''
    })
  }

  return (
    <>
      <List>
        {products.map((product) => (
          <ListItem key={product.cardapio.id}>
            <ItemImg src={product.cardapio.foto} />
            <ItemTitle>{product.cardapio.nome}</ItemTitle>
            <ItemDescription>{product.cardapio.descricao}</ItemDescription>
            <ItemButtom
              onClick={() => {
                setModal({
                  isVisible: true,
                  image: `${product.cardapio.foto}`,
                  title: `${product.cardapio.nome}`,
                  description: `${product.cardapio.descricao}`
                })
              }}
            >
              {product.cardapio.preco}
            </ItemButtom>
          </ListItem>
        ))}
      </List>
      <ModalContainer className={modal.isVisible ? 'visivel' : ''}>
        <Modal className="Container">
          <header>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          <ModalContent>
            <img src={modal.image} alt="teste" />
            <div>
              <h4>{modal.title}</h4>
              <p>{modal.description}</p>
              <Button type="button" title="adicionar ao carrinho">
                Adicionar ao carrinho - R$ 60,90
              </Button>
            </div>
          </ModalContent>
        </Modal>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </ModalContainer>
    </>
  )
}

export default ProductList
