import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return createContext(AuthContext);
}

export function AuthProvider(children) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  useEffect(()=>{
    const auth=getAuth();
   const unsubscribe= onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user);
        setLoading(false);
    });
    return unsubscribe;
  },[])

  //signup function
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    //update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    
    const user=auth.currentUser;
    setCurrentUser{
        ...user,
    }
  }
  //login
   function login(){
    const auth=getAuth();
    return signInWithEmailAndPassword(auth,email,password)

   }
   
   //lofout
   function logout(){
    const auth=getAuth();
    return signOut(auth);

   }
   
   const value={
    currentUser,
    signup,
    login,
    logout,
   }
  
  

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
