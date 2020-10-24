import React, { Fragment, useContext, useEffect } from 'react';
import BookingContext from '../../../context/bookings/BookingContext';
import BookingsItem from './BookingsItem';

const Bookings = () => {
  const bookingContext = useContext(BookingContext);
  const { getAllBookings } = bookingContext;

  useEffect(() => {
    getAllBookings();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <BookingsItem />
    </Fragment>
  );
};

export default Bookings;
