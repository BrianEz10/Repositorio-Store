import api from '../../../lib/axios'

import type {
  Order,
  CreateOrderPayload,
} from '../types'

import { mockOrders } from './mockOrders'

export async function getOrders(): Promise<Order[]> {

  // TODO: conectar backend real

  /*
  const { data } = await api.get('/pedidos')

  return data
  */

  return new Promise((resolve) => {

    setTimeout(() => {
      resolve(mockOrders)
    }, 800)

  })
}

export async function createOrder(
  payload: CreateOrderPayload
  
) {console.log(payload)

  // TODO: conectar backend real

  /*
  const { data } = await api.post(
    '/pedidos',
    payload
  )

  return data
  */

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        success: true,
      })

    }, 1200)

  })
}