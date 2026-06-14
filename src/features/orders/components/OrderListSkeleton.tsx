export default function OrderListSkeleton() {
  return (
    <div className='space-y-6'>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className='animate-pulse border border-[#5b403e]/20 bg-[#1a1a1a] p-6'>
          <div className='flex items-start justify-between'>
            <div className='space-y-3'>
              <div className='h-5 w-32 rounded bg-[#2a2a2a]' />
              <div className='h-4 w-20 rounded bg-[#2a2a2a]' />
            </div>
            <div className='h-6 w-28 rounded bg-[#2a2a2a]' />
          </div>
          <div className='mt-4 space-y-2'>
            <div className='h-4 w-48 rounded bg-[#2a2a2a]' />
            <div className='h-4 w-36 rounded bg-[#2a2a2a]' />
          </div>
        </div>
      ))}
    </div>
  )
}
