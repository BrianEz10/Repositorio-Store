import { useState } from 'react'

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <div className='flex items-center border border-[#5b403e]/30 bg-[#1c1b1b]'>
      <button
        onClick={decrement}
        className='px-4 py-3 text-xl text-[#ffb3ae] transition hover:bg-[#222222]'
      >
        -
      </button>

      <span className='px-6 font-bold text-white'>
        {quantity}
      </span>

      <button
        onClick={increment}
        className='px-4 py-3 text-xl text-[#ffb3ae] transition hover:bg-[#222222]'
      >
        +
      </button>
    </div>
  )
}