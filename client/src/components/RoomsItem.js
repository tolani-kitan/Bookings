import React, { useEffect, useContext } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RoomsItem = ({ room }) => {
  const { _id, name, images, location, capacity, availability } = room;

  return (
    <div>
      <Card style={{ alignItems: "center", padding: "20px", margin: "5px" }}>
        <CardBody style={{ maxWidth: "260px" }}>
          <CardTitle
            style={{
              color: "rgba(65, 64, 81, 0.95)",
              lineHeight: "26px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {name}
          </CardTitle>
          <CardSubtitle>{location}</CardSubtitle>
        </CardBody>
        <Link to={`/room/${_id}`}>
          <img
            width='100%'
            src={images[0]}
            alt='Card'
            style={{ width: "250px" }}
          />
        </Link>
        <CardBody>
          <CardText>
            <i class='fas fa-users'></i>Room capacity: {capacity}
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