import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);

    if(loading){
        return <div className='text-center my-5'>
          <button className="btn btn-square loading bg-emerald-300"></button>
        </div>
      
    }
    
    if(user){
        return children
    }
    return <Navigate to='/' replace></Navigate>
};

export default PrivateRoute;