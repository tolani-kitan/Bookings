import {
  SEARCH_ROOM, CLEAR_SEARCH
} from '../Types';

export default (state, action) => {
  switch (action.type) {
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
     } 
  default:
      return state;
  }
};
