import React, { Fragment, useContext } from "react";
import BookingContext from "../../../context/bookings/BookingContext";
import BookingsItem from "./BookingsItem";

const Bookings = () => {
  const bookingContext = useContext(BookingContext);
  const { bookings, filtered } = bookingContext;

  console.log(bookings, "ghffsdfgfg");

  return (
    <Fragment>
<<<<<<< HEAD
      {filtered !== null
        ? filtered.map((booking) => (
            <BookingsItem key={booking.id} booking={booking} />
          ))
        : bookings.map((booking) => (
            <BookingsItem key={booking.id} booking={booking} />
          ))}
=======
        <BookingsItem />

      {/* {filtered !== null
        ? filtered.map((booking) => <BookingsItem key={booking.id} booking={booking} />)
        : bookings.map((booking) => <BookingsItem key={booking.id} booking={booking} />)} */}

>>>>>>> refs/remotes/origin/master
    </Fragment>
  );
};

export default Bookings;

