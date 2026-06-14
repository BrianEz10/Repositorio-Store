export default function ProductGridSkeleton() {
  return (
    <section className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4'>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className='animate-pulse border border-[#5b403e]/20 bg-[#1a1a1a]'>
          <div className='aspect-square w-full bg-[#2a2a2a]' />
          <div className='space-y-4 p-5'>
            <div className='flex items-center justify-between'>
              <div className='h-3 w-20 rounded bg-[#2a2a2a]' />
              <div className='h-5 w-16 rounded bg-[#2a2a2a]' />
            </div>
            <div className='space-y-2'>
              <div className='h-5 w-3/4 rounded bg-[#2a2a2a]' />
              <div className='h-4 w-full rounded bg-[#2a2a2a]' />
              <div className='h-4 w-2/3 rounded bg-[#2a2a2a]' />
            </div>
            <div className='h-10 w-full rounded bg-[#2a2a2a]' />
          </div>
        </div>
      ))}
    </section>
  )
}
