export interface OrderItem {
  id: number

  productId: number

  name: string

  quantity: number

  price: number
}

export interface Order {
  id: number

  status:
    | 'pendiente'
    | 'confirmado'
    | 'entregado'

  total: number

  createdAt: string

  items: OrderItem[]
}

export interface CreateOrderPayload {
  items: {
    producto_id: number
    cantidad: number
  }[]
}