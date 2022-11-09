import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
    signOut, updateProfile
} from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import app from '../../firebase/firebase.config'

const auth = getAuth(app)
export const AuthContext = createContext()



const AuthProvider = ({children}) => {
     const googleProvider = new GoogleAuthProvider();

    const [user,setUser] =useState(null);
    const [loading,setLoading]= useState(true);

const createUser= (email,password) =>{
   return createUserWithEmailAndPassword(auth,email,password);
};

  const updateName = name => {
    setLoading(true)
    return updateProfile(auth.currentUser, { displayName: name })
  }
    const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
    const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

   const signin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
   
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe()
    }
  }, [])


    const authInfo={
        user,
        loading,
        createUser,
        updateName,
        signInWithGoogle,
        logout,
        signin
    }
    return (
<AuthContext.Provider value={authInfo}>
      {children}
</AuthContext.Provider>
    )
};

export default AuthProvider;