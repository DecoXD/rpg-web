
import PortalAdventureContainer from '@/components/shared/PortalAdventureContainer'
import { portalAdventureConteiners } from '@/constantes'
import React from 'react'

const Portal = () => {
  return (
    <section className='pt-20 flex flex-col gap-20 justify-center items-center'>
      <div className=" flex flex-col gap-2 items-center">
        <h1 className='text-4xl font-medieval '>Portal do Aventureiro</h1>
        <p className='text-sm text-slate-700 font-medium font-medieval'>Bem-vindo à sua jornada épica</p>
      </div>

      <section className='flex flex-wrap p-4  w-full justify-between max-w-6xl'>
        {
          portalAdventureConteiners.map((item)=>(
            <PortalAdventureContainer {...item}/>
          ))
        }
      </section>

    </section>
  )
}

export default Portal