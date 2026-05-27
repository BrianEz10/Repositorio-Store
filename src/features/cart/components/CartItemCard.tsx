import type { CartItem } from '@/features/cart/types'

interface CartItemCardProps {
  item: CartItem
  onIncrease: (id: number) => void
  onDecrease: (id: number) => void
  onRemove: (id: number) => void
}

export default function CartItemCard({ item, onIncrease, onDecrease, onRemove }: CartItemCardProps) {
  return (
    <article className='flex flex-col gap-6 border border-[#5b403e]/20 bg-[#1a1a1a] p-5 md:flex-row md:items-center'>
      <div className='h-32 w-full overflow-hidden bg-[#222222] md:w-32'>
        <img
          src={item.imagenes_url?.[0] || 'https://placehold.co/200x200'}
          alt={item.nombre}
          className='h-full w-full object-cover'
        />
      </div>

      <div className='flex-1 space-y-3'>
        <span className='text-xs uppercase tracking-[0.3em] text-[#ab8986]'>
          {item.disponible ? 'Disponible' : 'Sin stock'}
        </span>
        <h2 className='text-2xl font-bold text-white'>{item.nombre}</h2>

        <div className='flex w-fit items-center border border-[#5b403e]/30 bg-[#1c1b1b]'>
          <button onClick={() => onDecrease(item.id)} className='px-4 py-2 text-[#ffb3ae] cursor-pointer'>-</button>
          <span className='px-4 font-bold text-white'>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)} className='px-4 py-2 text-[#ffb3ae] cursor-pointer'>+</button>
        </div>
      </div>

      <div className='flex items-center justify-between gap-6 md:flex-col md:items-end'>
        <span className='text-2xl font-bold text-[#ffb3ae]'>${item.precio_base * item.quantity}</span>
        <button onClick={() => onRemove(item.id)} className='border border-red-500 px-4 py-2 text-sm uppercase tracking-[0.2em] text-red-500 transition hover:bg-red-500 hover:text-white cursor-pointer'>
          Eliminar
        </button>
      </div>
    </article>
  )
}
