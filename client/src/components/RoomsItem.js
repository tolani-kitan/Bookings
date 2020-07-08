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
      <Card style={{ alignItems: "center" }}>
        <CardBody style={{ maxWidth: "200px" }}>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{location}</CardSubtitle>
        </CardBody>
        <img width='100%' src={image} alt='Card' style={{ width: "250px" }} />
        <CardBody>
          <CardText>
            <i class='fas fa-users'></i>Room capacity: {roomCapacity}
          </CardText>
          <CardLink style={{ color: availability === true ? "green" : "red" }}>
            {availability === true ? "Available now" : "Currently in use"}
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

RoomsItem.propTypes = {
  room: PropTypes.string.isRequired,
};

export default RoomsItem;
