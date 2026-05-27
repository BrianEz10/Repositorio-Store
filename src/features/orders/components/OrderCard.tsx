import type { Pedido } from '@/features/orders/types'
import OrderDetailItem from '@/features/orders/components/OrderDetailItem'

interface OrderCardProps {
  order: Pedido
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <article className='border border-[#5b403e]/20 bg-[#1a1a1a] p-8'>
      <div className='mb-8 flex flex-col gap-4 border-b border-[#5b403e]/20 pb-6 md:flex-row md:items-center md:justify-between'>
        <div>
          <span className='text-sm uppercase tracking-[0.2em] text-[#ab8986]'>Pedido #{order.id}</span>
          <h2 className='mt-2 text-3xl font-black uppercase text-white'>{order.estado_codigo}</h2>
        </div>
        <div className='text-left md:text-right'>
          <p className='text-sm text-[#d1c3c1]/70'>{new Date(order.created_at).toLocaleDateString()}</p>
          <p className='mt-2 text-3xl font-bold text-[#ffb3ae]'>${order.total}</p>
        </div>
      </div>

      <div className='space-y-4'>
        {order.detalles.map((detalle) => (
          <OrderDetailItem
            key={`${detalle.pedido_id}-${detalle.producto_id}`}
            productoId={detalle.producto_id}
            nombreSnapshot={detalle.nombre_snapshot}
            cantidad={detalle.cantidad}
            precioSnapshot={detalle.precio_snapshot}
            subtotalSnap={detalle.subtotal_snap}
          />
        ))}
      </div>
    </article>
  )
}
