import { Link } from 'react-router-dom'
import type { Product } from '../types'
import { useCartStore } from '../../../store/useCartStore'
import { useState } from 'react'

import Toast from '../../../shared/Toast'
interface ProductCardProps {
  product: Product
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const addItem = useCartStore(
    (state) => state.addItem
  )
  const handleAddToCart = () => {
  addItem(product)

  setShowToast(true)

  setTimeout(() => {
    setShowToast(false)
  }, 2000)
}
  const [showToast, setShowToast] =
  useState(false)
  return (
    <article className='group overflow-hidden border border-[#5b403e]/20 bg-[#1a1a1a] transition duration-300 hover:border-[#ffb3ae]/50'>
      <div className='overflow-hidden'>
        <img
          src={product.image}
          alt={product.name}
          className='aspect-square w-full object-cover transition duration-700 group-hover:scale-105'
        />
      </div>

      <div className='space-y-4 p-5'>
        <div className='flex items-center justify-between'>
          <span className='text-xs uppercase tracking-[0.3em] text-[#ab8986]'>
            {product.category}
          </span>

          <span className='text-lg font-bold text-[#ffb3ae]'>
            ${product.price}
          </span>
        </div>

        <div>
          <h3 className='mb-2 text-2xl font-bold text-white transition group-hover:text-[#ffb3ae]'>
            {product.name}
          </h3>

          <p className='text-sm leading-7 text-[#d1c3c1]/70'>
            {product.description}
          </p>
        </div>

        <div className='flex flex-wrap gap-2'>
          {product.ingredients.map((ingredient) => (
            <span
              key={ingredient}
              className='border border-[#5b403e]/30 bg-[#222222] px-3 py-1 text-xs text-[#e4beba]'
            >
              {ingredient}
            </span>
          ))}
        </div>

        <div className='space-y-3'>
          <button
  onClick={handleAddToCart}
  className='w-full border border-[#ffb3ae] py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb3ae] transition hover:bg-[#ffb3ae] hover:text-black'
>
  Agregar al carrito
</button>

          <Link
            to={`/products/${product.id}`}
            className='block w-full border border-[#5b403e]/40 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#e4beba] transition hover:border-[#ffb3ae] hover:text-white'
          >
            Ver detalle
          </Link>
        </div>
      </div>
      {showToast && (
  <Toast message='Producto agregado al carrito' />
)}
    </article>
  )
}