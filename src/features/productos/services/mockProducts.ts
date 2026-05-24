import type { Product } from '../types'

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Hamburguesa Doble',
    category: 'Hamburguesas',
    price: 12500,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    description:
      'Pan brioche artesanal con doble medallón de carne y cheddar.',
    ingredients: [
      'Cheddar',
      'Panceta',
      'Cebolla caramelizada',
    ],
  },

  {
    id: 2,
    name: 'Pizza Especial',
    category: 'Pizzas',
    price: 18000,
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',
    description:
      'Muzzarella premium, pepperoni y salsa de tomate italiana.',
    ingredients: [
      'Muzzarella',
      'Pepperoni',
      'Aceitunas',
    ],
  },

  {
    id: 3,
    name: 'Papas Cheddar',
    category: 'Entradas',
    price: 8500,
    image:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop',
    description:
      'Papas crocantes con cheddar fundido y panceta ahumada.',
    ingredients: [
      'Cheddar',
      'Panceta',
      'Verdeo',
    ],
  },

  {
    id: 4,
    name: 'Brownie Helado',
    category: 'Postres',
    price: 7000,
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop',
    description:
      'Brownie tibio acompañado de helado de crema americana.',
    ingredients: [
      'Chocolate',
      'Helado',
      'Nueces',
    ],
  },
]