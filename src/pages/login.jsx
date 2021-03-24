import React from 'react'
import { useAuth } from '../providers/authContext'
import { Pages } from './pages'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { firebase, uiConfig } from '../firebase/firebaseConfig'
import './firebaseui-styling.global.css'

export function Login() {
  const { isAuth, firebaseLogOut } = useAuth()

  if (isAuth === undefined) return <h1>loading ... </h1>

  return (
    <>
      {isAuth ? (
        <>
          <button onClick={firebaseLogOut}>Logout</button>
          <Pages />
        </>
      ) : (
        <div>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      )}
    </>
  )
}
