import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import AdminSidebar from "./AdminSidebar";
import AuthContext from "../../context/auth/authContext";
import Bookings from "./Bookings/Bookings";

const AdminPage = () => {
  
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='dashboard'>
        <div id='sidebar'>
        <AdminSidebar />
      </div>
      <div className='main-section'>
        
        <div className='side' style={{ paddingLeft: "50px" }}>
          <div style={{  }}>
            <p>
               
            </p>
          </div>
          <div className="new-room">
           
          </div>
        </div>
        <div className='rooms-d' style={{ paddingLeft: "50px" }}>
            <Bookings />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
