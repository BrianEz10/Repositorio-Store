import { useState } from 'react'

import FilterBar from '../components/FilterBar'
import Layout from '../../../shared/Layout'
import ProductCard from '../components/ProductCard'

import { useProducts } from '../hooks/useProducts'

export default function ProductosPage() {

  const [selectedCategory, setSelectedCategory] =
    useState('Todos')

  const [search, setSearch] = useState('')

  const [sort, setSort] =
    useState('default')

  const {
    data: products,
    isLoading,
    isError,
  } = useProducts()

  const filteredProducts = products
    ?.filter((product) => {

      const matchesCategory =
        selectedCategory === 'Todos'
          ? true
          : product.category ===
            selectedCategory

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())

      return (
        matchesCategory &&
        matchesSearch
      )
    })

    .sort((a, b) => {

      if (sort === 'asc') {
        return a.price - b.price
      }

      if (sort === 'desc') {
        return b.price - a.price
      }

      return 0
    })

  if (isLoading) {
    return (
      <Layout>
        <div className='flex min-h-[70vh] items-center justify-center text-3xl font-bold text-white'>
          Cargando productos...
        </div>
      </Layout>
    )
  }

  if (isError) {
    return (
      <Layout>
        <div className='flex min-h-[70vh] items-center justify-center text-3xl font-bold text-red-500'>
          Error al cargar productos
        </div>
      </Layout>
    )
  }

  return (
    <Layout>

      <main className='mx-auto max-w-7xl px-6 py-14'>

        <section className='mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between'>

          <div className='max-w-3xl'>

            <span className='mb-4 block text-sm uppercase tracking-[0.3em] text-[#ffb3ae]'>
              Store Online
            </span>

            <h1 className='mb-6 text-5xl font-black uppercase leading-none tracking-tight md:text-7xl'>
              Nuestro <span className='text-[#ffb3ae]'>Menú</span>
            </h1>

            <p className='max-w-2xl text-base leading-8 text-[#d1c3c1]/70 md:text-lg'>
              Descubrí nuestros productos y realizá tu pedido online.
            </p>

          </div>

        </section>

        <FilterBar
          selectedCategory={
            selectedCategory
          }
          onSelectCategory={
            setSelectedCategory
          }
          search={search}
          onSearch={setSearch}
          sort={sort}
          onSort={setSort}
        />

        {filteredProducts?.length === 0 ? (

          <div className='flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center'>

            <h2 className='text-4xl font-black uppercase text-white'>
              No se encontraron productos
            </h2>

            <p className='text-[#d1c3c1]/70'>
              Probá con otra búsqueda o categoría.
            </p>

          </div>

        ) : (

          <section className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4'>

            {filteredProducts?.map(
              (product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              )
            )}

          </section>

        )}

      </main>

    </Layout>
  )
}