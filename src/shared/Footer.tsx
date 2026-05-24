import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className='mt-24 border-t border-[#5b403e]/20 bg-[#111111]'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-16 md:grid-cols-3'>
        <div className='space-y-5'>
          <span className='text-sm uppercase tracking-[0.3em] text-[#ffb3ae]'>
            Store Online
          </span>

          <h2 className='text-4xl font-black uppercase text-white'>
            FoodStore
          </h2>

          <p className='max-w-sm leading-7 text-[#d1c3c1]/70'>
            Experiencia gastronómica online
            moderna con pedidos rápidos y
            productos destacados.
          </p>
        </div>

        <div>
          <h3 className='mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#ffb3ae]'>
            Navegación
          </h3>

          <div className='flex flex-col gap-4'>
            <Link
              to='/'
              className='text-[#d1c3c1]/70 transition hover:text-white'
            >
              Productos
            </Link>

            <Link
              to='/cart'
              className='text-[#d1c3c1]/70 transition hover:text-white'
            >
              Carrito
            </Link>

            <Link
              to='/orders'
              className='text-[#d1c3c1]/70 transition hover:text-white'
            >
              Pedidos
            </Link>
          </div>
        </div>

        <div>
          <h3 className='mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#ffb3ae]'>
            Seguinos
          </h3>

          <div className='flex gap-4'>
            <button className='border border-[#5b403e]/30 px-4 py-3 text-[#ffb3ae] transition hover:border-[#ffb3ae] hover:text-white'>
              Instagram
            </button>

            <button className='border border-[#5b403e]/30 px-4 py-3 text-[#ffb3ae] transition hover:border-[#ffb3ae] hover:text-white'>
              Facebook
            </button>

            <button className='border border-[#5b403e]/30 px-4 py-3 text-[#ffb3ae] transition hover:border-[#ffb3ae] hover:text-white'>
              X
            </button>
          </div>

          <div className='mt-8 space-y-2 text-sm text-[#d1c3c1]/60'>
            <p>foodstore@email.com</p>

            <p>+54 11 5555 5555</p>
          </div>
        </div>
      </div>

      <div className='border-t border-[#5b403e]/20 py-6 text-center text-sm text-[#d1c3c1]/50'>
        © 2026 FoodStore — Todos los
        derechos reservados.
      </div>
    </footer>
  )
}