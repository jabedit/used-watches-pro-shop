import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import app from '../auth/Firebase.init'
const auth = getAuth(app)
export const UserSystem = createContext()
function FirebaseContext({ children }) {
  const Google_Provider = new GoogleAuthProvider()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [db_user, set_db_user] = useState(null)

  // create user by emal and password
  const create_user_email_and_password = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // sing in user by emal and password
  const signin_user_email_and_password = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // sign in with google pop up
  const sign_in_google_pop_up = () => {
    setLoading(true)
    return signInWithPopup(auth, Google_Provider)
  }
  // log out
  const log_out = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u)

      if (u) {
        fetch(
          `https://watch-house.vercel.app/user-get-by-email/v1?email=${u.email}`,
        )
          .then((r) => r.json())
          .then((data) => {
            set_db_user(data)

            setLoading(false)
          })
          .catch((er) => {
            setLoading(false)
          })
      }
      setLoading(false)
    })
    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe()
    }
  }, [])

  // get current user from db by email

  const value = {
    user,
    create_user_email_and_password,
    loading,
    setLoading,
    signin_user_email_and_password,
    sign_in_google_pop_up,
    db_user,
    set_db_user,
    log_out,
  }
  return <UserSystem.Provider value={value}>{children}</UserSystem.Provider>
}

export default FirebaseContext
