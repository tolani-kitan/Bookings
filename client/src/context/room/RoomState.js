import React, { useReducer } from "react";
import RoomContext from "./RoomContext";
import roomReducer from "./RoomReducer";
import axios from 'axios';
import {
  GET_ROOMS,
  ADD_ROOM,
  EDIT_ROOM,
  BOOK_ROOM,
  DELETE_ROOM,
  SEARCH_ROOM,
  CURRENT_ROOM,
  CLEAR_CURRENT,
  CLEAR_SEARCH,
  ROOM_ERROR
} from '../Types';

const RoomState = (props) => {
  const initialState = {
    rooms: [],
    filtered: null,
    current: null,
    error: null
  };

  const [state, dispatch] = useReducer(roomReducer, initialState);

  //Get Rooms
  const getRooms = async room => {
    try {
        const res = await axios.get('/api/rooms');
        dispatch({ 
            type: GET_ROOMS, 
            payload: res.data.rooms
        })
    } catch (error) {
        dispatch({ 
            type: ROOM_ERROR,
            payload: error.response.msg 
        })
    }
};

//Add Room
const addRoom = async room => {
  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  }
  try {
      const res = await axios.post('/api/rooms', room, config);
      dispatch({ 
          type: ADD_ROOM, 
          payload: res.data
      })
  } catch (error) {
      dispatch({ 
          type: ROOM_ERROR,
          payload: error.response.msg 
      })
  }
};

//Edit Room
const updateRoom = async room => {
  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  }
  try {
      const res = await axios.post(`/api/rooms/${room._id}`, room, config);
      dispatch({ 
          type: EDIT_ROOM, 
          payload: res.data
      })
  } catch (error) {
      dispatch({ 
          type: ROOM_ERROR,
          payload: error.response.msg 
      })
  }
};

//Delete Room
const deleteRoom = async id => {
  try {
      await axios.delete(`/api/rooms/${id}`);

      dispatch({ 
          type: DELETE_ROOM, 
          payload: id 
      });
  } catch (error) {
      dispatch({ 
          type: ROOM_ERROR,
          payload: error.response.msg 
      });
  }
};

//set Current Room
const setCurrent = room => {
  dispatch({ type: CURRENT_ROOM, payload: room })
};

//Clear Current Room
const clearCurrent = () => {
  dispatch({ type: CLEAR_CURRENT })
};

  // Search Room
  const searchRoom = text => {
    dispatch({
      type: SEARCH_ROOM, 
      payload: text
    })
  }

  //clear Search
  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH })
  }

  return (
    <RoomContext.Provider value={{ 
      rooms: state.rooms,
      filtered: state.filtered,
      error: state.error,
      getRooms,
      addRoom,
      updateRoom,
      deleteRoom,
      setCurrent,
      clearCurrent,
      searchRoom,
      clearSearch
      }}>
      {props.children}
    </RoomContext.Provider>
  );
};

export default RoomState;
