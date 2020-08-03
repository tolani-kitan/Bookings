import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomImage from "../bookRoom/RoomImage";
import Axios from "axios";

const RoomInfo = () => {
  const [Room, setRoom] = useState([]);
  let params = useParams();

  useEffect(() => {
    Axios.get(`/api/rooms/${params.roomId}`).then((response) => {
      setRoom(response.data.data);
    });
  }, []);
  console.log(Room, "ghsghsfh");
  return (
    <div>
      <RoomImage detail={Room} />
      <div>
        <h2
          style={{
            fontWeight: "800",
            fontSize: "35px",
            lineHeight: "40px",
            color: "#414051",
          }}
        >
          {Room.name}
        </h2>
      </div>
       
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p
          style={{
            color: "rgba(65, 64, 81, 0.85)",
            fontWeight: "normal",
            fontSize: "22px",
            lineHeight: "24px",
          }}
        >
          {Room.location}
        </p>
        <p
          style={{
            color: "rgba(65, 64, 81, 0.85)",
            fontWeight: "normal",
            fontSize: "22px",
            lineHeight: "24px",
          }}
        >
          <i class='fas fa-users' style={{ color: "#30B9DB" }}></i> Room
          capacity: {Room.capacity}
        </p>
      </div>
        
      <div>
        <h3
          style={{
            color: "rgba(65, 64, 81, 0.85)",
            fontSize: "25px",
            fontWeight: "bold",
            lineHeight: "32px",
          }}
        >
          Room Features
        </h3>
      </div>
            
    </div>
  );
};

export default RoomInfo;
