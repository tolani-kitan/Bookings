import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import BookingContext from "../../context/bookings/BookingContext";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import "react-calendar/dist/Calendar.css";
import { Select } from "antd";

const { Option } = Select;

const BookRoom = (props) => {
  const bookContext = useContext(BookingContext);
  const { bookRoom, current, clearCurrent } = bookContext;
  const { name, location, images, availability, capacity } = props.Room;

  const params = useParams();
  const { className } = props;
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState([
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ]);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const booked = async (e) => {
    e.preventDefault();
    const values = {
      name,
      capacity,
      startTime: timeValue.start,
      endTime: timeValue.end,
      bookedDate: date,
      availability,
      location,
      images,
    };
    bookRoom(values, params).then(() => {
      console.log("ghghfdggf");
    });

    setModal(!modal);
  };

  const [timeValue, setTime] = useState({
    start: value[0],
    end: value[0],
  });

  const onChange = (date) => {
    // console.log(date, "ddddddddddddddddd");
    setDate(new Date(date));
  };

  const handleChange = (value, type) => {
    console.log(`selected ${value}`, type);
    setTime((prev) => ({ ...prev, [type]: value }));
  };
  return (
    <div>
      <Button color='danger' onClick={toggle}>
        Book Room
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <Calendar onChange={onChange} value={date} />
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                minWidth: "100%",
              }}
            >
              <div
                style={{
                  width: "150px",
                  background: "rgba(182, 255, 137, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <label
                  for='start'
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                    color: "#338500",
                  }}
                >
                  Start
                </label>
                <br />
                <Select
                  name='start'
                  defaultValue={value[0]}
                  style={{ width: 120 }}
                  onChange={(e) => handleChange(e, "start")}
                >
                  {value.map((value, index) => (
                    <Option key={index} value={value}>
                      {value}
                    </Option>
                  ))}
                </Select>
              </div>
              <div
                style={{
                  width: "150px",
                  background: "rgba(255, 137, 137, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <label
                  for='end'
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                    color: "#850000",
                  }}
                >
                  End
                </label>
                <br />
                <Select
                  name='end'
                  defaultValue={value[0]}
                  style={{ width: 120 }}
                  onChange={(e) => handleChange(e, "end")}
                >
                  {value.map((value, index) => (
                    <Option key={index} value={value}>
                      {value}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={booked}>
            Book
          </Button>{" "}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BookRoom;
