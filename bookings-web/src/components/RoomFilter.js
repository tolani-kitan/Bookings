import React, { useContext, useRef } from 'react';
import RoomContext from '../context/room/RoomContext';

const RoomFilter = () => {
  const roomContext = useContext(RoomContext);
  const text = useRef('');

  const { searchRoom, clearSearch } = roomContext;

  const onChange = (e) => {
    if (text.current.value !== '') {
      searchRoom(e.target.value);
    } else {
      clearSearch();
    }
  };

  return (
    <div className='input-field col s6'>
      <i className='material-icons prefix' style={{ color: 'white' }}>
        search
      </i>
      <input
        id='icon_prefix2'
        type='text'
        className='materialize-textarea'
        ref={text}
        onChange={onChange}
        placeholder='Search rooms..'
      />
    </div>
  );
};

export default RoomFilter;
