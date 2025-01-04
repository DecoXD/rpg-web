import { getCharacterStatusById } from "@/_MOCKS_/mockApi"
import { Heart } from "lucide-react";
import { ReactNode } from "react";




type CharacterStatusProps = {
  statusId:number
}

type StatusTable = {
  [key: string]: {
    label: string;
    bg: string;
  };
};

 // create 

 const StatusBar = ({bgColor,percent,children}:{bgColor:string,percent:string,children:ReactNode}) =>{
  return (
    <span 
    style={{
    width:percent }} 
    className={`${bgColor} text-center w-full`}>

      {children}

    </span>
  )
 }


const CharacterStatus = ({statusId}:CharacterStatusProps) => {
  const charStatus = getCharacterStatusById(statusId) 

  if(!charStatus) return

  const statusMap = Object.keys(charStatus) 

  const statusTable: StatusTable = {
    "hp": {
      label: 'Pontos de Vida(HP)',
      bg: "bg-red-400"
    },
    'mp': {
      label: "Pontos de Mana(MP)",
      bg: 'bg-cyan-300'
    }
  }

  return (
    <section className="p-4 w-full  flex flex-col gap-2 border-[1px] border-amber-300/50 shadow-md max-w-xl  rounded-lg">
      <h3 className="flex font-medieval gap-2 text-xl uppercase"><Heart className="text-red-400"/> Status</h3>
        <ul className=" flex flex-col gap-2  ">
          {
            statusMap.map((status:string,idx) =>{
              if(status=='id') return
              const statusVal = statusTable[status]
              let currStatus = status == 'hp'? charStatus.hp :charStatus.mp
              //calcule for change life or mana bar width
              let statusBarPercent =   ( (currStatus.current/currStatus.max)*100 ).toFixed() +"%" 
             
            
              return (
                <li className="flex flex-col font-medieval gap-2" key={status + idx}>
                  <span>{statusVal.label}</span>
                  <span className="w-full flex bg-slate-200">
                  <StatusBar bgColor={statusVal.bg} percent={statusBarPercent}>
                    {currStatus.current}/{ currStatus.max}
                  </StatusBar>
                  </span>
                </li>
              )
            })
          }
        </ul>
      </section>

  )
}

export default CharacterStatus