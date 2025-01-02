import { PortalAdventureBoxProps } from '@/types/ui'
import React from 'react'

const colorMaps = {
  'fácil':"text-green-500",
  'moderado':'text-blue-500',
  'difícil':"text-red-500"
}
const PortalAdventureBox = ({category,description,title,difficulty,included,isAvailable,maxParticipants,rating}:PortalAdventureBoxProps) => {

  return (
    <div className="border-[2px] border-amber-300 rounded-md max-w-md p-3 relative font-medieval flex justify-start cursor-pointer">
      <div className="flex items-start flex-col">
        <h2 className='font-bold text-amber-500 '>{title}</h2>
        <p className='text-xs  text-slate-500'>{description}</p>
      </div>
      <div className=" absolute top-2 right-1">
        <p className='text-xs text-slate-500 '>dificuldade: <span className={`
          ${colorMaps[difficulty]} font-bold`}>{difficulty}</span> </p>
      </div>
    </div>
  )
}

export default PortalAdventureBox