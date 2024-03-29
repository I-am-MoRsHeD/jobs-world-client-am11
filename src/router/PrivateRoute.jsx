// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            {/* <span className="loading loading-infinity loading-lg"></span> */}
            <img src="https://i.ibb.co/bBvbWBS/loading-gif.gif" alt="" />
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={location?.pathname} to='/login' ></Navigate >

    )
};

export default PrivateRoute;