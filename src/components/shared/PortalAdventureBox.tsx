import { PortalAdventureBoxProps } from '@/types/ui'


const colorMaps = {
  'fácil':"text-green-500",
  'moderado':'text-blue-500',
  'difícil':"text-red-500"
}
const PortalAdventureBox = ({category,description,title,difficulty,included,isAvailable,maxParticipants,rating}:PortalAdventureBoxProps) => {

  return (
    <div className="border-[2px] border-amber-300 rounded-md min-w-md p-3 relative font-medieval flex flex-col justify-start cursor-pointer w-full hover:bg-amber-300/15 gap-3">
      <div className="flex items-start flex-col">
        <h3 className='font-bold text-amber-500 '>{title}</h3>
        <p className='text-xs  text-slate-500'>{description}</p>
      </div>
      <div className="">
        <p className='text-[10px] font-medieval text-slate-500 font-bold'>{category}</p>
      </div>
      <div className=" absolute top-2 right-1">
        <p className='text-xs text-slate-500 '>dificuldade: <span className={`
          ${colorMaps[difficulty]} font-bold`}>{difficulty}</span> </p>
      </div>
    </div>
  )
}

export default PortalAdventureBox