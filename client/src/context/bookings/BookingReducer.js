import {
  SEARCH_BOOKINGS,
  CLEAR_SEARCH,
  GET_BOOKINGS,
  BOOK_ROOM,
  BOOK_ERROR,
  CURRENT_BOOK,
  CLEAR_CURRENT,
  UPDATE_BOOKINGS,
  DELETE_BOOKINGS,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_BOOKINGS:
      return {
        ...state,
        filtered: state.bookingss.filter((booking) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return booking.userName.match(regex);
        }),
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        filtered: null,
      };
    case GET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload.data,
        loading: false,
      };
    case BOOK_ROOM:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
        loading: false,
      };
    case UPDATE_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
        loading: false,
      };
    case BOOK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CURRENT_BOOK:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false,
      };
    case DELETE_BOOKINGS:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking._id !== action.payload
        ),
        loading: false,
      };
    default:
      return state;
  }
};
