export default function CartSkeleton() {
  return (
    <div className='grid grid-cols-1 gap-10 lg:grid-cols-12'>
      <section className='space-y-4 lg:col-span-8'>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className='flex animate-pulse gap-4 border border-[#5b403e]/20 bg-[#1a1a1a] p-4'>
            <div className='h-24 w-24 bg-[#2a2a2a]' />
            <div className='flex-1 space-y-3'>
              <div className='h-5 w-3/4 rounded bg-[#2a2a2a]' />
              <div className='h-4 w-20 rounded bg-[#2a2a2a]' />
              <div className='flex items-center gap-3'>
                <div className='h-8 w-24 rounded bg-[#2a2a2a]' />
                <div className='h-4 w-16 rounded bg-[#2a2a2a]' />
              </div>
            </div>
          </div>
        ))}
      </section>
      <aside className='lg:col-span-4'>
        <div className='animate-pulse space-y-6 border border-[#5b403e]/20 bg-[#1a1a1a] p-8'>
          <div className='h-6 w-28 rounded bg-[#2a2a2a]' />
          <div className='space-y-3'>
            <div className='h-4 w-full rounded bg-[#2a2a2a]' />
            <div className='h-4 w-full rounded bg-[#2a2a2a]' />
            <div className='h-4 w-3/4 rounded bg-[#2a2a2a]' />
          </div>
          <div className='h-12 w-full rounded bg-[#2a2a2a]' />
        </div>
      </aside>
    </div>
  )
}
