import React from 'react'
import AuthForm from './AuthForm'
import { loginInputs } from '@/constantes'

const Login = () => {
    function onSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log('cadastro efetuado com veracidade de dados')
      }
  return (
    <AuthForm inputs={loginInputs} onSubmit={onSubmit} buttonLabel='Login' title='Login' linkHref='/register' linkLabel='Não possui uma conta? ' linkName='acesse aqui.' />
  )
}

export default Login