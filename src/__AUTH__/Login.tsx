import React, { useState } from 'react'
import AuthForm from './AuthForm'
import { loginInputs } from '@/constantes'
import { UserCredentials } from '@/types/auth'

const Login = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email:"",
    password:""   
  })
  
  function onSubmit(e:React.FormEvent<HTMLFormElement>){
      e.preventDefault()
      console.log('login')
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