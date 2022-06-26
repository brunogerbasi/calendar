
import React from 'react';
import Login from 'pages/Login';


import { Routes, Route, Navigate, } from 'react-router-dom';
import { AuthProvider, AuthContext } from 'context/auth';
import { useContext } from 'react';
import Load from 'components/Load';
import List from 'pages/List/List';

const Routers = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)
        
        if (loading) {
            return <Load />
        }

        if (!authenticated) {
            return <Navigate to="/login" />
        }
        return children;
    }
    return (
        <AuthProvider >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="calendar" element={
                    <Private><List /></Private>
                } />               
                <Route path="*" element={<Login />} />
            </Routes>
        </AuthProvider>
    )
}

export default Routers;