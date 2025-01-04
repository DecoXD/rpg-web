import { Flame } from 'lucide-react'


const CharSkills = () => {
  return (
    <div className="  p-4 border-[1px] border-amber-300/50 shadow-md w-full max-w-xl rounded-xl h-full">
      <h3 className='flex gap-2 font-medieval text-xl uppercase'><Flame className='text-red-500'/> Skills </h3>
      <div className=" flex items-center h-full justify-center">
        <p>Ainda não possui skills disponívéis</p>
      </div>
    </div>
  )
}

export default CharSkills