
import PortalAdventureContainer from '@/components/shared/PortalAdventureContainer'
import { Button } from '@/components/ui/button'
import { portalAdventureConteiners } from '@/constantes'
import { Play, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'


const Portal = () => {
  return (
    <section className='pt-20 flex flex-col gap-20 justify-center items-center min-h-screen '>
      <div className=" flex flex-col gap-2 items-center">
        <h1 className='text-4xl font-medieval '>Portal do Aventureiro</h1>
        <p className='text-sm text-slate-700 font-medium font-medieval'>Bem-vindo à sua jornada épica</p>
      </div>

      <section className='flex flex-wrap p-4 gap-10 w-full lg:justify-between max-w-6xl justify-center'>
        {
          portalAdventureConteiners.map((item,idx)=>(
            <PortalAdventureContainer {...item} key={item.title + idx}/>
          ))
        }
        
          <div className="flex gap-10 justify-center w-full">
          
              <Link to={'/createadventure'} className=' flex py-2 px-10 bg-amber-300/60 text-black border-amber-300 border-2 hover:bg-amber-300 rounded-lg'><Plus/> Criar Campanha</Link>       
          
              <Button className='py-5 px-10 bg-amber-300/60 text-black border-amber-300 border-2 hover:bg-amber-300'><Play/>Entrar em Campanha</Button>
       
        </div>
      </section>
    

    </section>
  )
}

export default Portal