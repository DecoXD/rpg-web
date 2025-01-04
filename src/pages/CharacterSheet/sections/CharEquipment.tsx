import { AxeIcon } from 'lucide-react'
import React from 'react'

const CharEquipment = () => {
  return (
    <section className=' flex flex-col gap-2 border-[1px] border-amber-300/50 shadow-md max-w-xl rounded-xl p-4'>
        <h3 className='flex gap-2 itens-center text-xl font-medieval uppercase'><AxeIcon/> Equipment</h3>
        <ul className="flex gap-1 p-4">
          <li className='h-24 w-24 border-[2px] rounded-lg flex-1'>
             <img className='w-full rounded-lg' src="https://via.placeholder.com/150" alt="" />
          </li>
          <li className='h-24 w-24 border-[2px] rounded-lg flex-1'>
             <img className='w-full rounded-lg' src="https://via.placeholder.com/150" alt="" />
          </li>
          <li className='h-24 w-24 border-[2px] rounded-lg flex-1'>
             <img className='w-full rounded-lg' src="https://via.placeholder.com/150" alt="" />
          </li>
          <li className='h-24 w-24 border-[2px] rounded-lg flex-1'>
             <img className='w-full rounded-lg' src="https://via.placeholder.com/150" alt="" />
          </li>
          <li className='h-24 w-24 border-[2px] rounded-lg flex-1'>
             <img className='w-full rounded-lg' src="https://via.placeholder.com/150" alt="" />
          </li>
        </ul>
      </section>
  )
}

export default CharEquipment