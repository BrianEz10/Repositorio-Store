import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Layout from '@/shared/Layout'
import { useCartStore } from '@/store/useCartStore'
import { useCreateOrder } from '@/features/orders/hooks/useCreateOrder'
import { useAuthStore } from '@/store/useAuthStore'
import { useDirections } from '@/features/directions/hooks/useDirections'
import { useCreateDirection } from '@/features/directions/hooks/useCreateDirection'
import { useFormasPago } from '@/features/formas-pago/hooks/useFormasPago'
import CartItemCard from '@/features/cart/components/CartItemCard'
import OrderSummary from '@/features/cart/components/OrderSummary'
import DirectionForm from '@/features/cart/components/DirectionForm'
import type { DirectionFormData } from '@/features/cart/components/DirectionForm'
import type { FormaPago } from '@/features/formas-pago/types'

const COSTO_ENVIO = 50.00

export default function CartPage() {
  const navigate = useNavigate()
  const token = useAuthStore((state) => state.token)
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const clearCart = useCartStore((state) => state.clearCart)
  const increaseQuantity = useCartStore((state) => state.increaseQuantity)
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)

  const { data: directions } = useDirections()
  const { data: formasPago } = useFormasPago()

  const [selectedDirection, setSelectedDirection] = useState<number>(directions?.[0]?.id ?? 0)
  const [selectedFormaPago, setSelectedFormaPago] = useState<string>('')

  const mutation = useCreateOrder()
  const createDirectionMutation = useCreateDirection()

  const subtotal = items.reduce((acc, item) => acc + item.precio_base * item.quantity, 0)
  const total = subtotal + COSTO_ENVIO

  const formaPago = selectedFormaPago || formasPago?.[0]?.codigo || 'EFECTIVO'

  const payload = {
    direccion_id: selectedDirection,
    forma_pago_codigo: formaPago,
    notas: null,
    items: items.map((item) => ({
      producto_id: item.id,
      cantidad: item.quantity,
      personalizacion: [],
    })),
  }

  if (items.length === 0) {
    return (
      <Layout>
        <div className='flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center'>
          <h1 className='text-5xl font-black uppercase text-white'>Carrito vacío</h1>
          <p className='text-[#d1c3c1]/70'>Agregá productos para comenzar tu pedido.</p>
          <Link to='/' className='border border-[#ffb3ae] bg-[#ffb3ae] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:opacity-90'>
            Volver al menú
          </Link>
        </div>
      </Layout>
    )
  }

  const handleSaveDirection = (data: DirectionFormData) => {
    createDirectionMutation.mutate(
      {
        alias: data.alias,
        linea1: data.linea1,
        linea2: data.linea2,
        ciudad: data.ciudad,
        provincia: data.provincia,
        codigo_postal: data.codigo_postal,
        latitud: 0,
        longitud: 0,
        es_principal: false,
      },
      {
        onSuccess: (direction) => {
          setSelectedDirection(direction.id)
        },
      }
    )
  }

  const handleConfirmOrder = () => {
    if (!token) {
      navigate('/login', { state: { from: { pathname: '/cart' } } })
      return
    }
    if (!selectedDirection) {
      alert('Agregá una dirección de entrega primero')
      return
    }
    mutation.mutate(payload, {
      onSuccess: () => {
        clearCart()
        navigate('/orders')
      },
    })
  }

  return (
    <Layout>
      <main className='mx-auto max-w-7xl px-6 py-14'>
        <div className='mb-14'>
          <h1 className='text-5xl font-black uppercase tracking-tight text-white md:text-7xl'>Tu Pedido</h1>
        </div>

        <div className='grid grid-cols-1 gap-10 lg:grid-cols-12'>
          <section className='space-y-4 lg:col-span-8'>
            {items.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeItem}
              />
            ))}
          </section>

          <aside className='lg:col-span-4'>
            <div className='sticky top-28 space-y-8 border border-[#5b403e]/20 bg-[#1a1a1a] p-8'>
              <h2 className='border-b border-[#5b403e]/20 pb-4 text-3xl font-black uppercase text-white'>Resumen</h2>

              <OrderSummary
                itemCount={items.length}
                subtotal={subtotal}
                costoEnvio={COSTO_ENVIO}
                total={total}
              />

              <div className='space-y-3'>
                <label className='block text-sm font-bold uppercase tracking-[0.2em] text-[#ffb3ae]'>Forma de pago</label>
                <select
                  value={formaPago}
                  onChange={(e) => setSelectedFormaPago(e.target.value)}
                  className='w-full border border-[#5b403e]/30 bg-[#1c1b1b] px-4 py-4 text-white outline-none'
                >
                  {formasPago?.filter((fp: FormaPago) => fp.habilitado).map((fp: FormaPago) => (
                    <option key={fp.codigo} value={fp.codigo}>
                      {fp.descripcion}
                    </option>
                  ))}
                </select>
              </div>

              <DirectionForm
                directions={directions}
                selectedDirection={selectedDirection}
                onDirectionChange={setSelectedDirection}
                onSave={handleSaveDirection}
                isSaving={createDirectionMutation.isPending}
              />

              <div className='space-y-4'>
                <button
                  onClick={handleConfirmOrder}
                  disabled={mutation.isPending}
                  className='w-full border border-[#ffb3ae] bg-[#ffb3ae] py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
                >
                  {mutation.isPending ? 'Procesando...' : 'Confirmar pedido'}
                </button>
                <button
                  onClick={clearCart}
                  className='w-full border border-red-500 py-4 text-sm font-bold uppercase tracking-[0.2em] text-red-500 transition hover:bg-red-500 hover:text-white cursor-pointer'
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  )
}
