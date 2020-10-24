import React, { useReducer } from 'react';
import BookingContext from './BookingContext';
import BookingReducer from './BookingReducer';
import Axios from 'axios';
import {
  GET_BOOKINGS,
  CLEAR_SEARCH,
  SEARCH_BOOKINGS,
  BOOK_ROOM,
  BOOK_ERROR,
  CURRENT_BOOK,
  CLEAR_CURRENT,
  DELETE_BOOKINGS,
  GET_ALL,
} from '../Types';

const BookingState = (props) => {
  const initialState = {
    bookings: [],
    filtered: null,
    current: null,
    error: null,
    status: 'Upcoming',
  };

  const [state, dispatch] = useReducer(BookingReducer, initialState);
  //Get all bookings
  const getAllBookings = async () => {
    try {
      const config = {
        headers: {
          token: localStorage.token,
        },
      };
      const res = await Axios.get('/api/bookroom/rooms', config);

      dispatch({
        type: GET_ALL,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_ERROR,
        payload: error.response,
      });
    }
  };

  //Get individual Bookings
  const getBookings = async () => {
    try {
      const res = await Axios.get('/api/bookroom/getBookedRoom');
      dispatch({
        type: GET_BOOKINGS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_ERROR,
        payload: error.response,
      });
    }
  };
  //Add bookings
  const bookRoom = async (bookings, params) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await Axios.post(
        `/api/bookroom/${params.roomId}`,
        bookings,
        config
      );
      dispatch({
        type: BOOK_ROOM,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_ERROR,
        payload: error.response.msg,
      });
    }
  };

  //Delete Booked Room
  const deleteBookedRoom = async (id) => {
    try {
      await Axios.delete(`/api/bookroom/${id}`);

      dispatch({
        type: DELETE_BOOKINGS,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: BOOK_ERROR,
        payload: error.response.msg,
      });
    }
  };

  //set Current book
  const setCurrent = (booking) => {
    dispatch({ type: CURRENT_BOOK, payload: booking });
  };

  //Clear Current Room
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Search Bookings
  const searchBookings = (text) => {
    dispatch({
      type: SEARCH_BOOKINGS,
      payload: text,
    });
  };

  //clear search
  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };

  return (
    <BookingContext.Provider
      value={{
        bookings: state.bookings,
        filtered: state.filtered,
        error: state.error,
        current: state.current,
        status: state.status,
        searchBookings,
        clearSearch,
        bookRoom,
        getAllBookings,
        getBookings,
        setCurrent,
        clearCurrent,
        deleteBookedRoom,
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingState;
