import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, Route} from 'react-router-dom';



function PrivateRouteEnl({checkPermission}) {
    


    return checkPermission&&checkPermission.role=="ROLE_ENGLEADER" ? 
        
      <Outlet/>
     
    : <Navigate to="/"state={{ showAlert: true, alertMessage: '잘못된 접근입니다.' }} />
  }

  export default PrivateRouteEnl;