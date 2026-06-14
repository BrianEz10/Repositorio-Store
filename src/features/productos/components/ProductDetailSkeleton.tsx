export default function ProductDetailSkeleton() {
  return (
    <section className='grid grid-cols-1 gap-14 lg:grid-cols-2'>
      <div className='aspect-square w-full animate-pulse bg-[#2a2a2a]' />
      <div className='space-y-8 animate-pulse'>
        <div className='space-y-4'>
          <div className='h-4 w-24 rounded bg-[#2a2a2a]' />
          <div className='h-10 w-3/4 rounded bg-[#2a2a2a]' />
          <div className='h-8 w-28 rounded bg-[#2a2a2a]' />
        </div>
        <div className='space-y-2'>
          <div className='h-4 w-full rounded bg-[#2a2a2a]' />
          <div className='h-4 w-full rounded bg-[#2a2a2a]' />
          <div className='h-4 w-2/3 rounded bg-[#2a2a2a]' />
        </div>
        <div className='space-y-3'>
          <div className='h-4 w-32 rounded bg-[#2a2a2a]' />
          <div className='h-8 w-24 rounded bg-[#2a2a2a]' />
        </div>
        <div className='flex gap-4'>
          <div className='h-14 w-36 rounded bg-[#2a2a2a]' />
          <div className='h-14 flex-1 rounded bg-[#2a2a2a]' />
        </div>
      </div>
    </section>
  )
}
