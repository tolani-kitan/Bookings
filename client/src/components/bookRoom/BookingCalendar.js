import React, { Component } from "react";
import Calendar from "react-calendar";
import BookRoom from "../utils/BookRoom";
import "react-calendar/dist/Calendar.css";
import { Card, CardBody } from "reactstrap";

class BookingCalendar extends Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => this.setState({ date });

  render() {
    return (
      <div>
        <Card style={{ width: "400px", alignItems: "center" }}>
          <br />
          <div>
            <Calendar onChange={this.onChange} value={this.state.date} />
          </div>
          <CardBody>
            <BookRoom />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BookingCalendar;
