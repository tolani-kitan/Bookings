import React, { Fragment, useContext, useEffect } from "react";
import RoomsItem from "./RoomsItem";
import RoomContext from "../../../context/room/RoomContext";

const Rooms = () => {
  const roomContext = useContext(RoomContext);
  const { rooms, filtered, getRooms } = roomContext;

  useEffect(() => {
    getRooms();
    //eslint-disable-next-line
}, []);

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((room) => <RoomsItem key={room._id} room={room} />)
        : rooms.map((room) => <RoomsItem key={room._id} room={room} />)}
    </Fragment>
  );
};

export default Rooms;
