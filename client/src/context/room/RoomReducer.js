import {
  GET_ROOMS, EDIT_ROOM,SEARCH_ROOM, CLEAR_SEARCH, ROOM_ERROR, DELETE_ROOM, CURRENT_ROOM, CLEAR_CURRENT, ADD_ROOM
} from '../Types';

export default (state, action) => {
  switch (action.type) {
    case GET_ROOMS:
        return {
         ...state,
          rooms: action.payload,
          loading: false
        };
    case ADD_ROOM: 
        return {
          ...state,
          rooms: [action.payload, ...state.rooms],
          loading: false
        };
    case EDIT_ROOM:
          return {
              ...state,
              rooms: state.rooms.map(room => room._id === action.payload._id ? action.payload : room),
              loading: false
          }
    case DELETE_ROOM:
        return {
          ...state,
          rooms: state.rooms.filter(room => room._id !== action.payload),
          loading: false
        };
    case CURRENT_ROOM:
        return {
          ...state,
          current: action.payload
        };
    case CLEAR_CURRENT:
        return {
          ...state,
          current: null,
          loading: false
        };
    case SEARCH_ROOM:
      return {
      ...state,
     filtered: state.rooms.filter(room => {
        const regex = new RegExp(`${action.payload}`, "gi");
        return room.name.match(regex);
    })
  }
   case CLEAR_SEARCH:
     return {
       ...state,
       filtered: null
     };
     case ROOM_ERROR:
      return {
          ...state,
          error: action.payload
      };
  default:
      return state;
  }
};
