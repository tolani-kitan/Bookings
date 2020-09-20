import React, { Fragment, useContext } from "react";
import BookingContext from "../../../context/bookings/BookingContext";
import BookingsItem from "./BookingsItem";

const Bookings = () => {
  const bookingContext = useContext(BookingContext);
  const { bookings, filtered } = bookingContext;

  return (
    <Fragment>
      <BookingsItem />

      {/* {filtered !== null
        ? filtered.map((booking) => <BookingsItem key={booking.id} booking={booking} />)
        : bookings.map((booking) => <BookingsItem key={booking.id} booking={booking} />)} */}
    </Fragment>
  );
};

export default Bookings;
