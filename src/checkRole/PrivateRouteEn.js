// PrivateRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, Route} from 'react-router-dom';



function PrivateRouteEn({checkPermission}) {
    


    return checkPermission.role=="ROLE_ENGINEER" ? 
        
      <Outlet/>
     
    : <Navigate to="/"state={{ showAlert: true, alertMessage: '잘못된 접근입니다.' }} />
  }

  export default PrivateRouteEn;