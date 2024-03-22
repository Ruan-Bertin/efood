import Footer from '../../components/Footer'
import Product from '../../components/Product'
import ProductLIst from '../../containers/ProductList'
import { Cardapio } from '../Home'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res.cardapio))
  }, [id])

  return (
    <>
      <Product>
        <ProductLIst products={cardapio} />
      </Product>
      <Footer />
    </>
  )
}

export default Perfil
