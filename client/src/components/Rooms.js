import React, { Fragment, useContext } from "react";
import RoomContext from "../context/room/RoomContext";
import RoomsItem from "./RoomsItem";

const Rooms = () => {
  const roomContext = useContext(RoomContext);
  const { rooms, filtered } = roomContext;

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((room) => <RoomsItem key={room.id} room={room} />)
        : rooms.map((room) => <RoomsItem key={room.id} room={room} />)}
    </Fragment>
  );
};

export default Rooms;


