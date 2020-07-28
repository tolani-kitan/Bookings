import React, { useContext } from "react";
import PropTypes from "prop-types";
import BookingContext from "../../../context/bookings/BookingContext";


const BookingsItem = ({ booking }) => {
  const bookingContext = useContext(BookingContext);

  const { room, userName, shared, time, status } = booking;


  return (
    <div>
       <table class="responsive-table">
        <thead>
          <tr>
              <th>Room</th>
              <th>Booked By</th>
              <th>Shared with</th>
              <th>Time</th>
              <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{room}</td>
            <td>{userName}</td>
            <td>{shared}</td>
            <td>{time}</td>
            <td> {status}</td>
          </tr>
          
        </tbody>
      </table>

    </div>
  );
};

BookingsItem.propTypes = {
  booking: PropTypes.string.isRequired,
};

export default BookingsItem;
