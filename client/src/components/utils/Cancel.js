import React, { useState, useContext } from "react";
import { Result } from "antd";
import BookingContext from "../../context/bookings/BookingContext";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const Cancel = (props) => {
  const bookContext = useContext(BookingContext);
  const { deleteBookedRoom, bookings } = bookContext;

  const { className } = props;

  const { _id } = props.booking && props.booking[0];
  // console.log(props, "ghggg", bookContext);

  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   deleteBookedRoom(id);
  // }, []);

  const toggle = () => setModal(!modal);
  const canceled = () => {
    const { _id } = bookings[0];
    console.log(_id);
    deleteBookedRoom(_id);
    console.log(props.bookings, "hhhjjjjjjjj");
    setModal(!modal);
  };

  return (
    <div>
      <Button color='secondary' onClick={toggle}>
        Cancel Booking
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <Result title='Are you sure you want to cancel this booking' />
        </ModalBody>
        <ModalFooter>
          <div
            style={{
              display: "flex",
              width: "120px",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Button color='secondary' onClick={canceled}>
                Yes
              </Button>
            </div>
            <div>
              <Button color='secondary' onClick={toggle}>
                No
              </Button>
            </div>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Cancel;
