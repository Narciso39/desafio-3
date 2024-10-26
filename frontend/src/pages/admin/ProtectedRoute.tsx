import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/FirebaseContext';


const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <p>Loading...</p>; // Ou um spinner de carregamento
    }

    return user ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;