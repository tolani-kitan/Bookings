import React from "react";
import RoomInfo from "../bookRoom/RoomInfo";
import BookingCalendar from "../bookRoom/BookingCalendar";
import { Layout, Menu, Row, Col } from "antd";
import Sidebar from "../Sidebar";
import RoomImage from "./RoomImage";

const { Content, Sider } = Layout;

const RoomDetail = () => {
  return (
    <div>
      <Layout>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          style={{ maxHeight: "400px" }}
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu theme='dark' mode='inline'>
            <Sidebar />
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <Row gutter={[16, 16]}>
              <Col lg={12} xs={24}>
                <RoomInfo />
              </Col>
              <Col lg={12} xs={24}>
                <BookingCalendar />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default RoomDetail;
