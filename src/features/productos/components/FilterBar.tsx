interface FilterBarProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
  search: string
  onSearch: (value: string) => void
  sort: string
  onSort: (value: string) => void
}

const categories = [
  'Todos',
  'Hamburguesas',
  'Pizzas',
  'Entradas',
  'Postres',
]

export default function FilterBar({
  selectedCategory,
  onSelectCategory,
  search,
  onSearch,
  sort,
  onSort,
}: FilterBarProps) {
  return (
    <section className='mb-14 flex flex-col gap-6 border-b border-[#5b403e]/20 pb-8 lg:flex-row lg:items-center lg:justify-between'>
      <div className='flex flex-wrap gap-3'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              onSelectCategory(category)
            }
            className={`px-5 py-3 text-sm uppercase tracking-[0.2em] transition ${
              selectedCategory === category
                ? 'bg-[#ffb3ae] text-black'
                : 'border border-[#5b403e]/40 bg-[#1f1f1f] text-[#e4beba] hover:border-[#ffb3ae] hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='flex flex-col gap-4 md:flex-row md:items-center'>
        <input
          type='text'
          value={search}
          onChange={(e) =>
            onSearch(e.target.value)
          }
          placeholder='Buscar productos...'
          className='border border-[#5b403e]/40 bg-[#1c1b1b] px-4 py-3 text-sm text-white outline-none placeholder:text-[#e4beba]/40 focus:border-[#ffb3ae]'
        />

        <select
  value={sort}
  onChange={(e) =>
    onSort(e.target.value)
  }
  className='border border-[#5b403e]/40 bg-[#1c1b1b] px-4 py-3 text-sm text-[#e4beba] outline-none focus:border-[#ffb3ae]'
>

  <option value='asc'>
    Menor precio
  </option>

  <option value='desc'>
    Mayor precio
  </option>
</select>
      </div>
    </section>
  )
}