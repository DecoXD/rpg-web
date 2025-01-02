import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AuthInputsProps } from '@/types/ui'

import { Link } from 'react-router-dom'
interface AuthFormProps {
  inputs:AuthInputsProps[],
  onSubmit:(e:React.FormEvent<HTMLFormElement>) => void,
  buttonLabel:string,
  title:string,
  linkHref:string
  linkLabel:string,
  linkName:string,
  errorMessage?:string | null
  handleChange:(e:React.ChangeEvent<HTMLInputElement>,name:string) => void
}

const AuthForm = ({inputs,onSubmit,buttonLabel,title,linkHref,linkLabel,linkName,handleChange,errorMessage}:AuthFormProps) => {
  return (
    <div className='flex flex-col items-center h-[80vh] justify-center gap-4'>
     <h1 className='text-3xl font-medieval font-bold'>{title}</h1>
      <form onSubmit={onSubmit} className='flex flex-col gap-4 w-full max-w-md'>
        {
        inputs.map((input,index)=>(
          <Input key = {`${input.label}-${index}}`} {...input} required={true} onChange={(e) =>handleChange(e,input.name)}/>
        ))}
        <Button className='bg-amber-300 hover:bg-amber-400 text-black font-medieval font-medium'>{buttonLabel}</Button>
      </form>
      <p className='text-sm text-gray-500 font-bold font-medieval'>{linkLabel}<Link className='text-black/80  ' to={linkHref}>{linkName}</Link>
      </p>
        {
          errorMessage && <p>{errorMessage}</p>
        }
    
    </div>
  )
}

export default AuthForm