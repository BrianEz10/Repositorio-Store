import { Link } from 'react-router-dom'
export default function NotFoundPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-6 bg-black text-white'>

      <h1 className='text-7xl font-black'>
        404
      </h1>

      <p className='text-[#d1c3c1]/70'>
        Página no encontrada
      </p>

      <Link
        to='/'
        className='border border-[#ffb3ae] bg-[#ffb3ae] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black'
      >
        Volver al inicio
      </Link>

    </div>
  )
}