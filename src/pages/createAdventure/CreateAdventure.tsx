import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createAdventureInputs } from "@/constantes";
import { CreateAdventureInputsProps } from "@/types/ui"




const chooseCorrectInput = ({label,name,type,placeholder,inputStyle,options}:CreateAdventureInputsProps) => {
 
  switch (inputStyle) {
    case 'textarea':
      return (
        <Textarea className="w-full" name={name} placeholder={placeholder}/>
      )
      break;
    case 'select':
      return (
        <Select>
          <SelectTrigger className="w-[180px]">
            < SelectValue placeholder="Select a fruit" />
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
      <Input type={type} name={name}/>
      break;
  }
}


const CreateAdventure = () => {
  return (
    <div className='pt-20 w-full'>
      <h2>Criar Aventura</h2>

      <form action="">
        {
          createAdventureInputs.map((item)  =>{
            return(
              <label htmlFor="">
                <span>{item.label}</span>
                {chooseCorrectInput(item)}
              </label>
            )
          })
        }

      </form>
    </div>
  )
}

export default CreateAdventure