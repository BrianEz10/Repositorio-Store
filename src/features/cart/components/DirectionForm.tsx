import { useState } from 'react'
import type { Direction } from '@/features/directions/types/direction'

interface DirectionFormProps {
  directions: Direction[] | undefined
  selectedDirection: number
  onDirectionChange: (id: number) => void
  onSave: (data: DirectionFormData) => void
  isSaving: boolean
}

export interface DirectionFormData {
  alias: string
  linea1: string
  linea2: string
  ciudad: string
  provincia: string
  codigo_postal: string
}

export default function DirectionForm({ directions, selectedDirection, onDirectionChange, onSave, isSaving }: DirectionFormProps) {
  const [showForm, setShowForm] = useState(false)
  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [provincia, setProvincia] = useState('')
  const [codigoPostal, setCodigoPostal] = useState('')

  const handleSave = () => {
    onSave({ alias: linea1, linea1, linea2, ciudad, provincia, codigo_postal: codigoPostal })
    setLinea1('')
    setLinea2('')
    setCiudad('')
    setProvincia('')
    setCodigoPostal('')
    setShowForm(false)
  }

  return (
    <>
      <div className='space-y-3'>
        <label className='block text-sm font-bold uppercase tracking-[0.2em] text-[#ffb3ae]'>Dirección</label>
        <select value={selectedDirection} onChange={(e) => onDirectionChange(Number(e.target.value))}
          className='w-full border border-[#5b403e]/30 bg-[#1c1b1b] px-4 py-4 text-white outline-none'>
          {directions?.map((direction) => (
            <option key={direction.id} value={direction.id}>
              {direction.linea1}
            </option>
          ))}
        </select>
      </div>

      {!showForm ? (
        <button type='button' onClick={() => setShowForm(true)}
          className='w-full border border-[#5b403e]/40 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e4beba] transition hover:border-[#ffb3ae] hover:text-[#ffb3ae] cursor-pointer'>
          + Agregar dirección
        </button>
      ) : (
        <div className='space-y-4 border border-[#5b403e]/20 bg-[#1c1b1b] p-4'>
          <h3 className='text-sm font-bold uppercase tracking-[0.2em] text-[#ffb3ae]'>Nueva dirección</h3>

          <input type='text' placeholder='Dirección' value={linea1} onChange={(e) => setLinea1(e.target.value)}
            className='w-full border border-[#5b403e]/30 bg-[#131313] px-4 py-3 text-white outline-none' />
          <input type='text' placeholder='Línea 2 (opcional)' value={linea2} onChange={(e) => setLinea2(e.target.value)}
            className='w-full border border-[#5b403e]/30 bg-[#131313] px-4 py-3 text-white outline-none' />
          <input type='text' placeholder='Ciudad' value={ciudad} onChange={(e) => setCiudad(e.target.value)}
            className='w-full border border-[#5b403e]/30 bg-[#131313] px-4 py-3 text-white outline-none' />
          <input type='text' placeholder='Provincia' value={provincia} onChange={(e) => setProvincia(e.target.value)}
            className='w-full border border-[#5b403e]/30 bg-[#131313] px-4 py-3 text-white outline-none' />
          <input type='text' placeholder='Código Postal' value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)}
            className='w-full border border-[#5b403e]/30 bg-[#131313] px-4 py-3 text-white outline-none' />

          <div className='flex gap-3'>
            <button type='button' onClick={() => setShowForm(false)}
              className='flex-1 border border-[#5b403e]/40 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#e4beba] transition hover:border-[#ffb3ae] cursor-pointer'>
              Cancelar
            </button>
            <button type='button' onClick={handleSave} disabled={isSaving}
              className='flex-1 border border-[#ffb3ae] py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ffb3ae] transition hover:bg-[#ffb3ae] hover:text-black disabled:opacity-50 cursor-pointer'>
              {isSaving ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
