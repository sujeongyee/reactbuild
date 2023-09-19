// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet, Route} from 'react-router-dom';



function PrivateRoute({  checkPermission}) {
   
    return checkPermission&&checkPermission.role=="ROLE_USER" ? 
        
      <Outlet/>
     
    : <Navigate to="/"  state={{ showAlert: true, alertMessage: '잘못된 접근입니다.' }}/>
  }

  export default PrivateRoute;