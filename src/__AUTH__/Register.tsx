import React, { useState } from 'react'
import AuthForm from './AuthForm'
import { registerInputs } from '@/constantes'
import { createAccount } from '@/lib/appwrite/api/Auth'
import { UserCredentials } from '@/types/auth'

const Register = () => {
  const [errorMessage,setErrorMessage] = useState<string|null>(null)
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email:"",
    password:"",
    confirmPassword:'',
   
  })
  function handleChange(e:React.ChangeEvent<HTMLInputElement>,name:string){
    setUserCredentials({
      ...userCredentials,
      [name]:e.target.value
    })

  }
  
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    try {
      e.preventDefault()
      console.log(userCredentials)
      const checkFieldsAreFilled = Object.values(userCredentials).every(field => field !== "")
      if(!checkFieldsAreFilled){
        throw new Error("Preencha todos os campos")
      }
      const response = await createAccount(userCredentials)
      if(!response.success){
        setErrorMessage(response.message)
        throw new Error(response.message)
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthForm inputs={registerInputs} onSubmit={onSubmit} buttonLabel='Cadastrar' title='Cadastro' linkHref='/login' linkLabel='Já possui uma conta? ' linkName='acesse aqui.' handleChange={handleChange} errorMessage={errorMessage}/>
  )
}

export default Register