import type { Order } from '../types'

export const mockOrders: Order[] = [
  {
    id: 1,

    status: 'confirmado',

    total: 24500,

    createdAt: '2026-05-20',

    items: [
      {
        id: 1,

        productId: 1,

        name: 'Hamburguesa Clásica',

        quantity: 2,

        price: 12000,
      },

      {
        id: 2,

        productId: 2,

        name: 'Papas Fritas',

        quantity: 1,

        price: 500,
      },
    ],
  },

  {
    id: 2,

    status: 'pendiente',

    total: 18000,

    createdAt: '2026-05-22',

    items: [
      {
        id: 3,

        productId: 3,

        name: 'Pizza Especial',

        quantity: 1,

        price: 18000,
      },
    ],
  },

  {
    id: 3,

    status: 'entregado',

    total: 32000,

    createdAt: '2026-05-24',

    items: [
      {
        id: 4,

        productId: 4,

        name: 'Combo Hamburguesa',

        quantity: 2,

        price: 16000,
      },
    ],
  },
]