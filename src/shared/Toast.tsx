interface ToastProps {
  message: string
}

export default function Toast({
  message,
}: ToastProps) {
  return (
    <div className='fixed bottom-6 right-6 z-[100] border border-[#ffb3ae] bg-[#1a1a1a] px-6 py-4 shadow-2xl'>
      <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb3ae]'>
        {message}
      </p>
    </div>
  )
}