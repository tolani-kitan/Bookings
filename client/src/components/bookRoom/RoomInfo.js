import React from "react";
import RoomImage from "../bookRoom/RoomImage";
import { Row, Col, List, Typography } from "antd";

const RoomInfo = (props) => {
  // console.log(Room, "ghsghsfh");

  const roomFeatures =
    props.Room.features &&
    props.Room.features.map((item) => {
      return item;
    });

  return (
    <div>
      <RoomImage detail={props.Room} />
      <div>
        <h2
          style={{
            fontWeight: "800",
            fontSize: "35px",
            lineHeight: "40px",
            color: "#414051",
          }}
        >
          {props.Room.name}
        </h2>
      </div>

      <div>
        <Row gutter={[16, 16]}>
          <Col lg={12} xs={24}>
            <p
              style={{
                color: "rgba(65, 64, 81, 0.85)",
                fontWeight: "normal",
                fontSize: "22px",
                lineHeight: "24px",
              }}
            >
              {props.Room.location}
            </p>
          </Col>
          <Col lg={12} xs={24}>
            <p
              style={{
                color: "rgba(65, 64, 81, 0.85)",
                fontWeight: "normal",
                fontSize: "22px",
                lineHeight: "24px",
              }}
            >
              <i class='fas fa-users' style={{ color: "#30B9DB" }}></i> Room
              capacity: {props.Room.capacity}
            </p>
          </Col>
        </Row>
      </div>

      <div>
        <h3
          style={{
            color: "rgba(65, 64, 81, 0.85)",
            fontSize: "25px",
            fontWeight: "bold",
            lineHeight: "32px",
          }}
        >
          Room Features
        </h3>
        <div>
          <List
            bordered
            dataSource={roomFeatures}
            renderItem={(item) => (
              <List.Item
                style={{
                  color: "rgba(65, 64, 81, 0.9)",
                  lineHeight: "24px",
                  fontSize: "18px",
                }}
              >
                <Typography.Text mark>
                  <i class='fas fa-list-alt' style={{ color: "#30B9DB" }}></i>
                </Typography.Text>{" "}
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
