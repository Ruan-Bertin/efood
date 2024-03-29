import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurant, Cardapio } from '../pages/Home'

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
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetProductsQuery,
  useGetCurrentRestaurantsQuery
} = api

export default api
