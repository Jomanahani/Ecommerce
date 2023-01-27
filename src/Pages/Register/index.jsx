import React from 'react'
import FormFooter from '../../Components/FormFooter'
import RegisterForm from '../../Components/RegisterForm'
import { RegisterPage } from '../SignIn'

export default function Register() {
  return (
    <RegisterPage>
     <RegisterForm />
     <FormFooter />
    </RegisterPage>
  )
}
