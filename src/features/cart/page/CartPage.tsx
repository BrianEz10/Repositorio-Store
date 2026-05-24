import { Link } from 'react-router-dom'


import Layout from '../../../shared/Layout'

import { useCartStore } from '../../../store/useCartStore'

import { useCreateOrder } from '../../orders/hooks/useCreateOrder'
export default function CartPage() {
  const items = useCartStore(
    (state) => state.items
  )

  const removeItem = useCartStore(
    (state) => state.removeItem
  )

  const clearCart = useCartStore(
    (state) => state.clearCart
  )

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  )

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  )

  const total = items.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  )

  const payload = {
  items: items.map((item) => ({
    producto_id: item.id,
    cantidad: item.quantity,
  })),
}
  const mutation = useCreateOrder()

  if (items.length === 0) {
    return (
      <Layout>
        <div className='flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center'>
          <h1 className='text-5xl font-black uppercase text-white'>
            Carrito vacío
          </h1>

          <p className='text-[#d1c3c1]/70'>
            Agregá productos para comenzar
            tu pedido.
          </p>

          <Link
            to='/'
            className='border border-[#ffb3ae] bg-[#ffb3ae] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:opacity-90'
          >
            Volver al menú
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <main className='mx-auto max-w-7xl px-6 py-14'>
        <div className='mb-14'>
          <h1 className='text-5xl font-black uppercase tracking-tight text-white md:text-7xl'>
            Tu Pedido
          </h1>
        </div>

        <div className='grid grid-cols-1 gap-10 lg:grid-cols-12'>
          <section className='space-y-4 lg:col-span-8'>
            {items.map((item) => (
              <article
                key={item.id}
                className='flex flex-col gap-6 border border-[#5b403e]/20 bg-[#1a1a1a] p-5 md:flex-row md:items-center'
              >
                <div className='h-32 w-full overflow-hidden bg-[#222222] md:w-32'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='h-full w-full object-cover'
                  />
                </div>

                <div className='flex-1 space-y-3'>
                  <span className='text-xs uppercase tracking-[0.3em] text-[#ab8986]'>
                    {item.category}
                  </span>

                  <h2 className='text-2xl font-bold text-white'>
                    {item.name}
                  </h2>

                  <div className='flex w-fit items-center border border-[#5b403e]/30 bg-[#1c1b1b]'>
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className='px-4 py-2 text-[#ffb3ae]'
                    >
                      -
                    </button>

                    <span className='px-4 font-bold text-white'>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className='px-4 py-2 text-[#ffb3ae]'
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className='flex items-center justify-between gap-6 md:flex-col md:items-end'>
                  <span className='text-2xl font-bold text-[#ffb3ae]'>
                    $
                    {item.price * item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      removeItem(item.id)
                    }
                    className='border border-red-500 px-4 py-2 text-sm uppercase tracking-[0.2em] text-red-500 transition hover:bg-red-500 hover:text-white'
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))}
          </section>

          <aside className='lg:col-span-4'>
            <div className='sticky top-28 space-y-8 border border-[#5b403e]/20 bg-[#1a1a1a] p-8'>
              <h2 className='border-b border-[#5b403e]/20 pb-4 text-3xl font-black uppercase text-white'>
                Resumen
              </h2>

              <div className='space-y-4'>
                <div className='flex items-center justify-between text-[#d1c3c1]/70'>
                  <span>Productos</span>

                  <span>{items.length}</span>
                </div>

                <div className='flex items-center justify-between text-2xl font-bold text-[#ffb3ae]'>
                  <span>Total</span>

                  <span>${total}</span>
                </div>
              </div>

              <div className='space-y-4'>
                <button
                  onClick={() =>
                    mutation.mutate(payload, {
  onSuccess: () => {
    clearCart()

    alert(
      'Pedido realizado correctamente'
    )
  },
})
                  }
                  disabled={
                    mutation.isPending
                  }
                  className='w-full border border-[#ffb3ae] bg-[#ffb3ae] py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:opacity-90 disabled:opacity-50'
                >
                  {mutation.isPending
                    ? 'Procesando...'
                    : 'Confirmar pedido'}
                </button>

                <button
                  onClick={clearCart}
                  className='w-full border border-red-500 py-4 text-sm font-bold uppercase tracking-[0.2em] text-red-500 transition hover:bg-red-500 hover:text-white'
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  )
}