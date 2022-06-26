import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [textError, setTextError] = useState("")

    useEffect(() =>{
        const getLog = localStorage.getItem("user")

        if(getLog){
            setUser(JSON.parse(getLog))
        }
        setLoading(false)
    },[])

    const login = (email, password) => {  
        const logUser = {
            id: "123",
            email
        }

        localStorage.setItem("user", JSON.stringify(logUser))

        if(password ==="1234!" && email ==="bruno@teste.com"){
            setUser(logUser)
            navigate("/calendar")
        }else{
            setTextError("Verifique seu e-mail e senha")
        }
        
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        // navigate("/login")
        window.location.replace("/login");
    };

    return (
        <AuthContext.Provider value={{
            authenticated: !!user,
            user,
            loading,
            textError,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}