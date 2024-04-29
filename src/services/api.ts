import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurant, Cardapio } from '../pages/Home' // Assuming these types are defined

export type Product = {
  id: number
  price: number
}

export type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export type CheckoutResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getCurrentRestaurants: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getProducts: builder.query<Cardapio[], string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (response: any) => response.cardapio
    }),
    purchase: builder.mutation<CheckoutResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetProductsQuery,
  useGetCurrentRestaurantsQuery,
  usePurchaseMutation
} = api

export default api
