import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AuthContext from "../../context/auth/authContext";
import Bookings from "./Bookings/Bookings";
import TotalBookings from "./Bookings/TotalBookings";

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
        <TotalBookings />

        <div
          style={{
            paddingLeft: "50px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#4C4A6C",
          }}
        >
          <p> Today's Bookings </p>
        </div>

        <div className='bookings' style={{ paddingLeft: "50px" }}>
          <Bookings />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
