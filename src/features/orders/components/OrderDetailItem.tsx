interface OrderDetailItemProps {
  productoId: number
  nombreSnapshot: string | undefined
  cantidad: number
  precioSnapshot: number
  subtotalSnap: number
}

export default function OrderDetailItem({ productoId, nombreSnapshot, cantidad, precioSnapshot, subtotalSnap }: OrderDetailItemProps) {
  return (
    <div className='flex items-center justify-between border border-[#5b403e]/20 bg-[#1f1f1f] p-4'>
      <div className='flex items-center gap-4'>
        <div className='flex h-16 w-16 items-center justify-center bg-[#222222] text-sm text-[#ab8986]'>
          <span className='material-symbols-outlined'>restaurant_menu</span>
        </div>
        <div>
          <h3 className='font-bold text-white'>{nombreSnapshot || `Producto #${productoId}`}</h3>
          <p className='text-sm text-[#d1c3c1]/70'>Cantidad: {cantidad}</p>
        </div>
      </div>
      <span className='text-xl font-bold text-[#ffb3ae]'>${subtotalSnap ?? (precioSnapshot * cantidad)}</span>
    </div>
  )
}
