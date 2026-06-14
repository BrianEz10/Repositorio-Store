import type { Pedido } from '@/features/orders/types'
import { STATUS_LABELS, STATUS_COLORS } from '@/features/orders/types'

interface OrderInfoProps {
  order: Pedido
}

export default function OrderInfo({ order }: OrderInfoProps) {
  return (
    <div className='border border-[#5b403e]/20 bg-[#1a1a1a] p-8'>
      <div className='mb-8 flex flex-col gap-4 border-b border-[#5b403e]/20 pb-6 md:flex-row md:items-center md:justify-between'>
        <div>
          <span className='text-sm uppercase tracking-[0.2em] text-[#ab8986]'>Pedido #{order.id}</span>
          <span className={`ml-4 inline-block border px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${STATUS_COLORS[order.estado_codigo] ?? 'text-white border-white/30'}`}>
            {STATUS_LABELS[order.estado_codigo] ?? order.estado_codigo}
          </span>
        </div>
        <div className='text-left md:text-right'>
          <p className='text-sm text-[#d1c3c1]/70'>
            {new Date(order.created_at).toLocaleDateString('es-AR', {
              year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',
            })}
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='space-y-4'>
          <h3 className='text-sm font-bold uppercase tracking-[0.3em] text-[#ffb3ae]'>Detalles del pedido</h3>
          <div className='space-y-2 text-sm text-[#d1c3c1]/70'>
            <p><span className='text-[#ab8986]'>Forma de pago:</span> {order.forma_pago_codigo}</p>
            {order.direccion_id && (
              <p><span className='text-[#ab8986]'>Dirección ID:</span> #{order.direccion_id}</p>
            )}
            {order.notas && (
              <p><span className='text-[#ab8986]'>Notas:</span> {order.notas}</p>
            )}
          </div>
        </div>

        <div className='space-y-4'>
          <h3 className='text-sm font-bold uppercase tracking-[0.3em] text-[#ffb3ae]'>Resumen</h3>
          <div className='space-y-2 text-sm'>
            <div className='flex justify-between text-[#d1c3c1]/70'>
              <span>Subtotal</span>
              <span>${order.subtotal?.toFixed(2)}</span>
            </div>
            {order.descuento > 0 && (
              <div className='flex justify-between text-green-400'>
                <span>Descuento</span>
                <span>-${order.descuento.toFixed(2)}</span>
              </div>
            )}
            <div className='flex justify-between text-[#d1c3c1]/70'>
              <span>Costo de envío</span>
              <span>${order.costo_envio?.toFixed(2)}</span>
            </div>
            <div className='border-t border-[#5b403e]/20 pt-2'>
              <div className='flex justify-between text-lg font-bold text-[#ffb3ae]'>
                <span>Total</span>
                <span>${order.total?.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
