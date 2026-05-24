import api from '../../../lib/axios'
import type { Product } from '../types'

import { mockProducts } from './mockProducts'

export async function getProducts(): Promise<Product[]> {

  // TODO: reemplazar por backend real

  /*
  const { data } = await api.get('/productos')

  return data
  */

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts)
    }, 800)
  })
}
export async function getProductById(
  id: number
): Promise<Product> {

  // TODO: conectar backend

  /*
  const { data } = await api.get(
    `/productos/${id}`
  )

  return data
  */

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const product = mockProducts.find(
        (p) => p.id === id
      )

      if (!product) {
        reject(
          new Error('Producto no encontrado')
        )

        return
      }

      resolve(product)

    }, 500)

  })
}