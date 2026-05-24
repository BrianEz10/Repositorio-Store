import { Link } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'
export default function Navbar() {
  const totalItems = useCartStore(
    (state) => state.totalItems()
  )

  return (
    <header className='sticky top-0 z-50 border-b border-[#5b403e]/20 bg-[#131313]/95 backdrop-blur'>

      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-5'>

        <Link to='/'>

          <h1 className='text-2xl font-black uppercase tracking-tight text-[#ffb3ae]'>
            FoodStore
          </h1>

          <span className='text-xs uppercase tracking-[0.3em] text-[#ab8986]'>
            Store Online
          </span>

        </Link>

        <nav className='hidden items-center gap-8 lg:flex'>

          <Link
            to='/'
            className='text-sm uppercase tracking-[0.2em] text-[#e4beba] transition hover:text-white'
          >
            Inicio
          </Link>

          <Link
            to='/'
            className='text-sm uppercase tracking-[0.2em] text-[#e4beba] transition hover:text-white'
          >
            Productos
          </Link>

          <Link
            to='/orders'
            className='text-sm uppercase tracking-[0.2em] text-[#e4beba] transition hover:text-white'
          >
            Pedidos
          </Link>

        
          

        </nav>

        <div className='flex items-center gap-4'>

          <Link
            to='/cart'
            className='relative flex h-12 w-12 items-center justify-center border border-[#5b403e]/40 bg-[#1c1b1b] text-xl text-[#ffb3ae] transition hover:border-[#ffb3ae]'
          >

            🛒

            <span className='absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffb3ae] text-xs font-bold text-black'>
              {totalItems}
            </span>

          </Link>

        </div>

      </div>

    </header>
  )
}