import React, { useReducer } from "react";
import BookingContext from "./BookingContext";
import BookingReducer from './BookingReducer';
import { GET_BOOKINGS, CLEAR_SEARCH, SEARCH_BOOKINGS } from '../Types';

const BookingState = (props) => {
    const initialState = {
        bookings: [
            {
                room: "Oceania Meeting Room",
                userName: "Christiana Adebayo",
                shared: "3 people",
                time: "02:00PM - 03:00PM",
                status: "Upcoming"
            },
            {
                room: "Macey's Lobby",
                userName: "Maggie Crowe",
                shared: "17 people",
                time: "12:00PM - 01:00PM",
                status: "Cancelled"
            },
            {
                room: "Atlantic Room",
                userName: "Andrews Peter",
                shared: "2 people",
                time: "10:00AM - 11:00AM",
                status: "Completed"
            },
            {
                room: "Hi-Fi Conference Room",
                userName: "James Brown",
                shared: "23 people",
                time: "08:00AM - 10:00AM",
                status: "Completed"
            },
        ],
        filtered: null
    };

const [state, dispatch] = useReducer(BookingReducer, initialState);

//Get Bookings


//Search Bookings
const searchBookings = text => {
    dispatch({
      type: SEARCH_BOOKINGS, 
      payload: text
    })
  }

//clear search
const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH })
  }

return (
    <BookingContext.Provider value={{
        bookings: state.bookings,
        filtered: state.filtered,
        searchBookings,
        clearSearch
    }}>
    {props.children}
    </BookingContext.Provider>
)

};

export default BookingState;

