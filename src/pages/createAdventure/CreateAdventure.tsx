import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createAdventureInputs } from "@/constantes";
import { CreateAdventureInputsProps } from "@/types/ui"
import { BookText } from "lucide-react";




const chooseCorrectInput = ({label,name,type,placeholder,inputStyle,options}:CreateAdventureInputsProps) => {
 
  switch (inputStyle) {
    case 'textarea':
      return (
        <Textarea className="w-full " name={name} placeholder={placeholder}/>
      )
      break;
    case 'select':
      return (
        <Select>
          <SelectTrigger className="w-[180px]">
            < SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{label}</SelectLabel>
              { options?.map((option) => <SelectItem value={option}>{option}</SelectItem>) }
            </SelectGroup>
          </SelectContent>
        </Select>
      )
      break
  
    default:
      return<Input type={type} name={name} placeholder={placeholder}/>
      break;
  }
}


const CreateAdventure = () => {
  return (
    <div className='pt-20 bg-slate-50 p-2 w-full flex flex-col gap-10 justify-center items-center'>
      <h2 className="text-2xl font-bold font-medieval flex items-center gap-2">
        <BookText className="text-amber-500" size={30}/>
        <span>Criar Aventura</span>
      </h2>

      <form className="w-full max-w-2xl flex flex-col gap-4 p-8 bg-white shadow-2xl rounded-lg">
        {
          createAdventureInputs.map((item)  =>{
            return(
            <div className="w-full">
                <label className="flex flex-col gap-2 capitalize font-medieval text-lg font-medium"  >
                  <span>{item.label}</span>
                  {
                    chooseCorrectInput(item)
                  }
              </label>
            </div>
            )
          })
        }
      <Button className="bg-amber-300 mt-4 text-black font-medieval font-bold hover:bg-amber-300/90 uppercase ">
        Create
      </Button>
      </form>
    </div>
  )
}

export default CreateAdventure