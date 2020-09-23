import React, { useContext } from "react";
import PropTypes from "prop-types";
import BookingContext from "../../../context/bookings/BookingContext";

const TableBody = ({bookings}) => {

  const bookingsData = bookings.map((booking, index) => {
      return (
          <tr key={index}>
            <td>{booking.room}</td>
            <td>{booking.userName}</td>
            <td>{booking.time}</td>
            <td> {booking.status}</td>
          </tr>
      )
  })
  return <tbody>{bookingsData}</tbody>

}


const BookingsItem = () => {
  const bookingContext = useContext(BookingContext);
  const { bookings, filtered } = bookingContext;

  return (
    <div>
       <table class="responsive-table bookings-table">
        <thead>
          <tr>
              <th>Room</th>
              <th>Booked By</th>
              <th>Time</th>
              <th>Status</th>
          </tr>
        </thead>
        <TableBody bookings={bookings} />
      </table>

    </div>
  );
};

BookingsItem.propTypes = {
  booking: PropTypes.string.isRequired,
};

export default BookingsItem;
