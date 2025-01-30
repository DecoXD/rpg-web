import { PortalAdventureContainerProps } from '@/types/ui'
import React from 'react'
import PortalAdventureBox from './PortalAdventureBox'

const PortalAdventureContainer = ({title,subtitle,box}:PortalAdventureContainerProps) => {
  return (
    <section className='flex flex-col gap-4 w-full max-w-lg  p-4 py-8 rounded-xl bg-white  shadow-lg hover:scale-105 transition-all'>
      <div className=" flex flex-col gap-3 items-center font-medieval">
        <h2 className='text-3xl'>
          {title}
        </h2>
        <p className='text-xs text-slate-700'>{subtitle}</p>
      </div>
      <div className=" flex flex-col gap-2">
        {
        box&&
         box.map((item,idx) =>(
          <PortalAdventureBox key={idx} {...item}/>
         ))        
        }
      </div>
      
    </section>
  )
}

export default PortalAdventureContainer