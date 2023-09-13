// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet, Route} from 'react-router-dom';



function PrivateRouteLogin({checkPermission}) {
    


    return checkPermission!=null ? 
        
    <Navigate to="/"state={{ showAlert: true, alertMessage: '잘못된 접근입니다.' }} />   
     
    : <Outlet/>
  }

  export default PrivateRouteLogin;