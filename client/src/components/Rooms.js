import React, { Fragment, useContext } from "react";
import RoomContext from "../context/RoomContext";
import RoomsItem from "./RoomsItem";

const Rooms = () => {
  const roomContext = useContext(RoomContext);
  const { rooms } = roomContext;

  return (
    <Fragment>
      {rooms.map((room) => (
        <div style={{ padding: "10px" }}>
          <RoomsItem key={room.id} room={room} />
        </div>
      ))}
    </Fragment>
  );
};

export default Rooms;
