import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";



const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)


    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const SignInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
     }
     const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
     }
    

    useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser);
    setLoading(false)
  })
  return () =>{
    unsubscribe();
  }
    },[])
    
    const profileUpdate =(name, photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,
            {
                displayName: name,
                photoURL: photo,
            })
      }
    
      const profileData =(email,photo,name) =>{
        setUser({...user, email: email,  displayName: name, photoURL: photo})
      }

    const authInfo=
    {user,
    loading,
     createUser,
     profileUpdate,
     profileData,
     SignInUser,
     logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;