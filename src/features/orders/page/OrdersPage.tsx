import Layout from '../../../shared/Layout'

import { useOrders } from '../hooks/useOrders'

export default function OrdersPage() {

  const {
    data: orders,
    isLoading,
    isError,
  } = useOrders()

  if (isLoading) {
    return (
      <Layout>

        <div className='flex min-h-[70vh] items-center justify-center text-3xl font-bold text-white'>
          Cargando pedidos...
        </div>

      </Layout>
    )
  }

  if (isError) {
    return (
      <Layout>

        <div className='flex min-h-[70vh] items-center justify-center text-3xl font-bold text-red-500'>
          Error al cargar pedidos
        </div>

      </Layout>
    )
  }

  if (orders?.length === 0) {
    return (
      <Layout>

        <div className='flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center'>

          <h1 className='text-5xl font-black uppercase text-white'>
            No hay pedidos
          </h1>

          <p className='text-[#d1c3c1]/70'>
            Todavía no realizaste pedidos.
          </p>

        </div>

      </Layout>
    )
  }

  return (
    <Layout>

      <main className='mx-auto max-w-7xl px-6 py-14'>

        <section className='mb-16'>

          <span className='mb-4 block text-sm uppercase tracking-[0.3em] text-[#ffb3ae]'>
            Historial
          </span>

          <h1 className='text-5xl font-black uppercase tracking-tight text-white md:text-7xl'>
            Mis Pedidos
          </h1>

        </section>

        <section className='space-y-8'>

          {orders?.map((order) => (

            <article
              key={order.id}
              className='border border-[#5b403e]/20 bg-[#1a1a1a] p-8'
            >

              <div className='mb-8 flex flex-col gap-4 border-b border-[#5b403e]/20 pb-6 md:flex-row md:items-center md:justify-between'>

                <div>

                  <span className='text-sm uppercase tracking-[0.2em] text-[#ab8986]'>
                    Pedido #{order.id}
                  </span>

                  <h2 className='mt-2 text-3xl font-black uppercase text-white'>
                    {order.status}
                  </h2>

                </div>

                <div className='text-left md:text-right'>

                  <p className='text-sm text-[#d1c3c1]/70'>
                    {order.createdAt}
                  </p>

                  <p className='mt-2 text-3xl font-bold text-[#ffb3ae]'>
                    ${order.total}
                  </p>

                </div>

              </div>

              <div className='space-y-4'>

                {order.items.map((item) => (

                  <div
                    key={item.id}
                    className='flex items-center justify-between border border-[#5b403e]/20 bg-[#1f1f1f] p-4'
                  >

                    <div>

                      <h3 className='font-bold text-white'>
                        {item.name}
                      </h3>

                      <p className='text-sm text-[#d1c3c1]/70'>
                        Cantidad: {item.quantity}
                      </p>

                    </div>

                    <span className='text-xl font-bold text-[#ffb3ae]'>
                      $
                      {item.price}
                    </span>

                  </div>

                ))}

              </div>

            </article>

          ))}

        </section>

      </main>

    </Layout>
  )
}