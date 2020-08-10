import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import Rooms from "./Rooms";
import AuthContext from "../../../context/auth/authContext";
import AdminSidebar from "../AdminSidebar";
import RoomContext from "../../../context/room/RoomContext";

const ViewRooms = () => {
  
  const authContext = useContext(AuthContext);

  const roomContext = useContext(RoomContext);

  const { rooms, getRooms } = roomContext;

  useEffect(() => {
    authContext.loadUser();
    getRooms();
    console.log(rooms);
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
                <Link to="/admin/addRoom" style={{ color: "#ffffff" }}> + Add New Room</Link> 
            </button>
          </div>
        </div>
        <div className='rooms-d' style={{ paddingLeft: "50px", paddingRight: "20px" }}>
            <Rooms />
        </div>
      </div>
    </div>
  );
};

export default ViewRooms;
