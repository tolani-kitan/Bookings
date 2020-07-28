import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import RoomContext from "../../../context/room/RoomContext";


const RoomsItem = ({ room }) => {
  const roomContext = useContext(RoomContext);

  const { deleteRoom, setCurrent, clearCurrent } = roomContext;

  const { _id, name, location, images} = room;

  const onDelete = () => {
    deleteRoom(_id);
    clearCurrent();
  }

  return (
    <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={images[0]} className="card-img-top" alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{location}</p>
        </div> 
        <div className="card-body edit-btn">
          <div>
           <button className="btn-but" onClick={() => setCurrent(room)} ><Link to='/admin/editRoom'>Edit</Link></button> 
          </div>
          <div className="del">
          <i className="fa fa-trash" aria-hidden="true" onClick={onDelete}></i>
          </div>
          <div>

          </div>
        </div>

      </div>

    </div>
  );
};

RoomsItem.propTypes = {
  room: PropTypes.string.isRequired,
};

export default RoomsItem;
