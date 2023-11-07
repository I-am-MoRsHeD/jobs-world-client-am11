// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const nevigate = useNavigate();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return nevigate('/')
};

export default PrivateRoute;