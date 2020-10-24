import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import BookingContext from '../../../context/bookings/BookingContext';

const TableBody = ({ bookings, status }) => {
  const bookingsData = Object.keys(bookings).map((booking, index) => {
    return (
      <tr key={index}>
        <td>{booking.name}</td>
        <td>{booking.user}</td>
        <td>{booking.startTime}</td>
        <td> {status}</td>
      </tr>
    );
  });
  return <tbody>{bookingsData}</tbody>;
};

const BookingsItem = () => {
  const bookingContext = useContext(BookingContext);
  const { bookings, status } = bookingContext;

  useEffect(() => {
    //eslint-disable-nex t-line
  }, []);

  return (
    <div>
      <table className='responsive-table bookings-table'>
        <thead>
          <tr>
            <th>Room</th>
            <th>Booked By</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <TableBody bookings={bookings} status={status} />
      </table>
    </div>
  );
};

// BookingsItem.propTypes = {
//   booking: PropTypes.string.isRequired,
// };

export default BookingsItem;
