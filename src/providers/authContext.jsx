import React, { createContext, useState, useEffect, useCallback } from 'react'
import { firebase } from '../firebase/firebaseConfig'

const AuthContext = createContext()

function AuthProvider(props) {
  const [isAuth, setIsAuth] = useState()

  const firebaseLogOut = useCallback(async () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsAuth(false)
      })
      .catch(error => {
        // An error happened.
      })
  }, [])

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(function (user) {
      setIsAuth(!!user)
    })

    return () => unregisterAuthObserver()
  }, [])

  return <AuthContext.Provider value={{ isAuth, firebaseLogOut }} {...props} />
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
