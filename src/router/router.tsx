import {
  createBrowserRouter,
} from 'react-router-dom'
import ProductosPage from '../features/productos/page/ProductosPage'
import DetalleProductoPage from '../features/productos/page/DetalleProductoPage'
import CartPage from '../features/cart/page/CartPage'
import OrdersPage from '../features/orders/page/OrdersPage'
import NotFoundPage from '../shared/NotFoundPage'
export const router =
  createBrowserRouter([

    {
      path: '/',
      element: <ProductosPage />,
    },

    {
      path: '/products/:id',
      element: <DetalleProductoPage />,
    },

    {
      path: '/cart',
      element: <CartPage />,
    },

    {
      path: '/orders',
      element: <OrdersPage />,
    },

    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])