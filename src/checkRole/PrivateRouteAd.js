// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet, Route} from 'react-router-dom';



function PrivateRouteAd({checkPermission}) {
    

    return checkPermission.role=="ROLE_ADMIN" ? 
        
      <Outlet/>
     
    : <Navigate to="/" state={{ showAlert: true, alertMessage: '잘못된 접근입니다.' }}/>
  }

  export default PrivateRouteAd;