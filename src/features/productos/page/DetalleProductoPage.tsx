import { useParams } from 'react-router-dom'

import RelatedProducts from '../components/RelatedProducts'
import QuantitySelector from '../components/QuantitySelector'

import Layout from '../../../shared/Layout'

import { useCartStore } from '../../../store/useCartStore'

import { useProduct } from '../hooks/useProduct'
import { mockProducts } from '../services/mockProducts'
export default function DetalleProductoPage() {

  const { id } = useParams()

  const {
    data: product,
    isLoading,
    isError,
  } = useProduct(Number(id))

  const addItem = useCartStore(
    (state) => state.addItem
  )

  if (isLoading) {
    return (
      <Layout>
        <div className='flex min-h-[60vh] items-center justify-center text-2xl font-bold text-white'>
          Cargando producto...
        </div>
      </Layout>
    )
  }

  if (isError || !product) {
    return (
      <Layout>
        <div className='flex min-h-[60vh] items-center justify-center text-2xl font-bold text-white'>
          Producto no encontrado
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <main className='mx-auto max-w-7xl px-6 py-14'>

        <section className='grid grid-cols-1 gap-14 lg:grid-cols-2'>

          <div className='overflow-hidden border border-[#5b403e]/20 bg-[#1a1a1a]'>

            <img
              src={product.image}
              alt={product.name}
              className='h-full w-full object-cover'
            />

          </div>

          <div className='space-y-8'>

            <div>

              <span className='text-sm uppercase tracking-[0.3em] text-[#ab8986]'>
                {product.category}
              </span>

              <h1 className='mt-4 text-5xl font-black uppercase tracking-tight text-white'>
                {product.name}
              </h1>

              <p className='mt-4 text-3xl font-bold text-[#ffb3ae]'>
                ${product.price}
              </p>

            </div>

            <p className='text-lg leading-8 text-[#d1c3c1]/70'>
              {product.description}
            </p>

            <div>

              <h2 className='mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#ffb3ae]'>
                Ingredientes
              </h2>

              <div className='flex flex-wrap gap-3'>

                {product.ingredients.map((ingredient) => (

                  <span
                    key={ingredient}
                    className='border border-[#5b403e]/30 bg-[#222222] px-4 py-2 text-sm text-[#e4beba]'
                  >
                    {ingredient}
                  </span>

                ))}

              </div>

            </div>

            <div className='flex flex-col gap-4 md:flex-row md:items-center'>

              <QuantitySelector />

              <button
                onClick={() => addItem(product)}
                className='flex-1 border border-[#ffb3ae] bg-[#ffb3ae] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:opacity-90'
              >
                Agregar al carrito
              </button>

            </div>

          </div>

        </section>

        <RelatedProducts
  products={mockProducts.filter(
    (p) => p.id !== product.id
  )}
/>

      </main>
    </Layout>
  )
}