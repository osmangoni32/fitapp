import React, { createContext, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return createContext(AuthContext);
}

export function AuthProvider(children) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  function signup(email,password,username){
    
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
