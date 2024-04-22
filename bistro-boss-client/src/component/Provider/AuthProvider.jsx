import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

       const [user, setUser] = useState(null);
       const [loading, setLoading] = useState(true);

       const createUser = (email, password) =>{
              setLoading(true)
              return createUserWithEmailAndPassword(auth, email, password)
       }

       const login = (email, password) =>{
              setLoading(true)
              return signInWithEmailAndPassword(auth, email, password)
       }

       const logOut = () =>{
              setLoading(true)
              return signOut(auth)
       }

       useEffect(() => {
              const unSubscribe = onAuthStateChanged(auth, currenUser =>{
                     setUser(currenUser)
                     console.log("this is currentUser", currenUser)
                     setLoading(false)

              })
              return () =>{
                     unSubscribe()
              }
       },[])

       const authInfo = {
         logOut,
         login,
         loading,
         user,
         createUser,
       };

       return (
              <AuthContext.Provider value={authInfo}>
                     {children}
                     
              </AuthContext.Provider>
       );
};

export default AuthProvider;