import PortalAdventureBox from '@/components/shared/PortalAdventureBox'
import React from 'react'

const Portal = () => {
  return (
    <section className='pt-20 text-center'>
      <div className=" flex flex-col gap-2">
        <h1 className='text-4xl font-medieval '>Portal do Aventureiro</h1>
        <p className='text-sm text-slate-700 font-medium font-medieval'>Bem-vindo à sua jornada épica</p>
      </div>

      <PortalAdventureBox category='RPG' description='hannoi world' title='Hanoi Tower Sage' difficulty='moderado'  />

    </section>
  )
}

export default Portal