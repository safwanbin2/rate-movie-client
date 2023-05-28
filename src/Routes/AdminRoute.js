import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import UseIsAdmin from '../Hooks/useIsAdmin';
import Loading from '../Components/Loading';

const AdminRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = UseIsAdmin(user?.email);
    console.log(isAdmin, isAdminLoading)

    if (isLoading || isAdminLoading) {
        return <Loading />
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }}></Navigate>
};

export default AdminRoute;