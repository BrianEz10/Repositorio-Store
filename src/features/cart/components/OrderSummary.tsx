interface OrderSummaryProps {
  itemCount: number
  subtotal: number
  costoEnvio: number
  total: number
}

export default function OrderSummary({ itemCount, subtotal, costoEnvio, total }: OrderSummaryProps) {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between text-[#d1c3c1]/70'>
        <span>Productos ({itemCount})</span>
        <span>${subtotal}</span>
      </div>
      <div className='flex items-center justify-between text-[#d1c3c1]/70'>
        <span>Envío</span>
        <span>${costoEnvio}</span>
      </div>
      <div className='border-t border-[#5b403e]/20 pt-4 flex items-center justify-between text-2xl font-bold text-[#ffb3ae]'>
        <span>Total</span>
        <span>${total}</span>
      </div>
    </div>
  )
}
