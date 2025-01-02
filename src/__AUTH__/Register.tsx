import React from 'react'
import AuthForm from './AuthForm'
import { registerInputs } from '@/constantes'

const Register = () => {
  function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    console.log('cadastro efetuado com veracidade de dados')
  }
  return (
    <AuthForm inputs={registerInputs} onSubmit={onSubmit} buttonLabel='Cadastrar' title='Cadastro' linkHref='/login' linkLabel='Já possui uma conta? ' linkName='acesse aqui.' />
  )
}

export default Register