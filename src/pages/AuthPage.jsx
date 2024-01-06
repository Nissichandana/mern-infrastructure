import React from 'react'
import SignUpForm from '../components/SignUpForm.jsx'
import LoginForm from '../components/LoginForm.jsx'

function AuthPage(props) {
  return (
    <>
   <h1>Auth Page</h1>
   <SignUpForm setUser={props.setUser} />
   <LoginForm setUser={props.setUser} />
   </>
  )
}

export default AuthPage
