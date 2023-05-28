import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <Loading />
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;