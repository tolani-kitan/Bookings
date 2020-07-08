import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import PropTypes from "prop-types";

const RoomsItem = ({ room }) => {
  const { id, name, location, image, roomCapacity, availability } = room;

  return (
    <div>
      <Card>
        <CardBody style={{ width: "300px" }}>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{location}</CardSubtitle>
        </CardBody>
        <img
          width='100%'
          src={image}
          alt='Card'
          style={{ width: "350px", paddingLeft: "30px" }}
        />
        <CardBody>
          <CardText>Room capacity: {roomCapacity}</CardText>
          <CardLink style={{ color: availability === true ? "green" : "red" }}>
            {availability === true ? "Available now" : "Currently in use"}
          </CardLink>
          <CardLink href='#'>Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

RoomsItem.propTypes = {
  room: PropTypes.string.isRequired,
};

export default RoomsItem;
