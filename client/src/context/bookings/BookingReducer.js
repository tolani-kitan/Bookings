import {
    SEARCH_BOOKINGS, CLEAR_SEARCH
  } from '../Types';
  
  export default (state, action) => {
    switch (action.type) {
      case SEARCH_BOOKINGS:
      return {
        ...state,
       filtered: state.bookingss.filter(booking => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return booking.userName.match(regex);
      })
    }
     case CLEAR_SEARCH:
       return {
         ...state,
         filtered: null
       } 
    default:
        return state;
    }
  };