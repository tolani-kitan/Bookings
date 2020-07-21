import React, { useContext, useEffect } from "react";
// import { Link } from 'react-router-dom';
import AdminSidebar from "./AdminSidebar";
import AuthContext from "../../context/auth/authContext";
import AddRoom from "./AddRoom";

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
      <div className='content-d'>
        <div style={{ paddingLeft: "50px", fontWeight: "800", fontSize: "35px", lineHeight: "40px", color: "#414051"  }}>
          <h2>Rooms</h2>
        </div>
        <div className='side' style={{ paddingLeft: "50px" }}>
          <div style={{ fontSize: "20px", lineHeight: "60px", color: "#000000" }}>
            <p>
                Total Rooms: 15
            </p>
          </div>
          <div className="new-room">
            <button className='btn-room'>
                + Add New Room
            </button>
          </div>
        </div>
        <div className='r' style={{ paddingLeft: "200px" }}>
            <AddRoom />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
