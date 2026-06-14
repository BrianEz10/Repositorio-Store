interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({
  isOpen,
  onClose,
}: ProductModalProps) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6'>
      <div className='w-full max-w-2xl border border-[#5b403e]/20 bg-[#1a1a1a] p-8'>
        <div className='mb-8 flex items-center justify-between'>
          <h2 className='text-3xl font-black uppercase text-white'>
            Nuevo Producto
          </h2>

          <button
            onClick={onClose}
            className='text-2xl text-[#ffb3ae] cursor-pointer'
          >
            ✕
          </button>
        </div>

        <form className='space-y-6'>
          <div>
            <label className='mb-2 block text-sm uppercase tracking-[0.2em] text-[#ab8986]'>
              Nombre
            </label>

            <input
              type='text'
              className='w-full border border-[#5b403e]/30 bg-[#1c1b1b] px-4 py-3 text-white outline-none focus:border-[#ffb3ae]'
            />
          </div>

          <div>
            <label className='mb-2 block text-sm uppercase tracking-[0.2em] text-[#ab8986]'>
              Precio
            </label>

            <input
              type='number'
              className='w-full border border-[#5b403e]/30 bg-[#1c1b1b] px-4 py-3 text-white outline-none focus:border-[#ffb3ae]'
            />
          </div>

          <div>
            <label className='mb-2 block text-sm uppercase tracking-[0.2em] text-[#ab8986]'>
              Descripción
            </label>

            <textarea
              className='w-full border border-[#5b403e]/30 bg-[#1c1b1b] px-4 py-3 text-white outline-none focus:border-[#ffb3ae]'
              rows={4}
            />
          </div>

          <button className='w-full border border-[#ffb3ae] bg-[#ffb3ae] py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:opacity-90 cursor-pointer'>
            Guardar Producto
          </button>
        </form>
      </div>
    </div>
  )
}