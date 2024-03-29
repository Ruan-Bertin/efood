import Footer from '../../components/Footer'
import Product from '../../components/Product'
import { ProductList } from '../../containers/ProductList'
import { useParams } from 'react-router-dom'

import { useGetProductsQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: cardapio, isLoading } = useGetProductsQuery(id!)

  if (isLoading) {
    return <h3>CARREGANDO...</h3>
  }

  return (
    <>
      {cardapio && cardapio.length > 0 ? (
        <>
          <Product>
            <ProductList products={cardapio} />
          </Product>
          <Footer />
        </>
      ) : (
        <h3>Nenhum item encontrado no cardápio.</h3>
      )}
    </>
  )
}

export default Perfil
