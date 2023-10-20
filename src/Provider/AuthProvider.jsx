import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../src/Firebase/firebase.config";
import PropTypes from 'prop-types'


const auth = getAuth(app);


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loding,setLoding]=useState(true)

    const gogglePopup = (provider)=>{
        setLoding(true)
    return signInWithPopup(auth,provider)
    }
    const signOutt= ()=>{
        setLoding(true)
        return signOut(auth)
    }
    const createUser =(email,passsword)=>{
        setLoding(true)
        return createUserWithEmailAndPassword (auth,email,passsword)
    }
    const loginUser= (email,passsword)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,passsword)
    }

   useEffect(()=>{
    const unsubcribe= onAuthStateChanged(auth,createUser=>{
        setUser(createUser)
        setLoding(false)
    })
    return ()=>{
        unsubcribe()
    }
   },[])

    const authInfo={
        user,
        createUser,
        loginUser,
        gogglePopup,
        signOutt,
        loding
    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.string
  }

export default AuthProvider;