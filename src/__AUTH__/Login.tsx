import React, { useState } from 'react'
import AuthForm from './AuthForm'
import { loginInputs } from '@/constantes'
import { UserCredentials } from '@/types/auth'
import { login } from '@/lib/appwrite/api/Auth'
import { useAuthContext } from '@/context/AuthContext'



const Login = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email:"",
    password:""   
  })
  const { setUserId,userId } = useAuthContext();

  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    console.log(userCredentials)
     try {
       e.preventDefault()
       const checkFieldsAreFilled = Object.values(userCredentials).every(field => field !== "")
      if(!checkFieldsAreFilled) throw Error('todos os campos')
      const response = await login(userCredentials)
      if(!response.success){
        throw new Error(response.message)
      }
      setUserId(response.userId!)



     } catch (error) {
      console.log(error)
     }
    }

  function handleChange(e:React.ChangeEvent<HTMLInputElement>,name:string){
    setUserCredentials({
      ...userCredentials,
      [name]:e.target.value
    })

  }
  return (
    <AuthForm inputs={loginInputs} onSubmit={onSubmit} buttonLabel='Login' title='Login' linkHref='/register' linkLabel='Não possui uma conta? ' linkName='acesse aqui.' handleChange={handleChange} />
  )
}

export default Login