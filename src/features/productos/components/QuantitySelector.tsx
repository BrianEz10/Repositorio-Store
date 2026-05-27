interface Props {
  value: number
  onChange: (value: number) => void
}

export default function QuantitySelector({ value, onChange }: Props) {
  const increment = () => onChange(value + 1)

  const decrement = () => {
    if (value > 1) onChange(value - 1)
  }

  return (
    <div className='flex items-center border border-[#5b403e]/30 bg-[#1c1b1b]'>
      <button
        onClick={decrement}
        className='px-4 py-3 text-xl text-[#ffb3ae] transition hover:bg-[#222222] cursor-pointer'
      >
        -
      </button>

      <span className='px-6 font-bold text-white'>
        {value}
      </span>

      <button
        onClick={increment}
        className='px-4 py-3 text-xl text-[#ffb3ae] transition hover:bg-[#222222] cursor-pointer'
      >
        +
      </button>
    </div>
  )
}