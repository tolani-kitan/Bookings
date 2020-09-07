import React, { useEffect, useState } from "react";
import RoomInfo from "../bookRoom/RoomInfo";
import { useParams } from "react-router-dom";
import BookingCalendar from "../bookRoom/BookingCalendar";
import Axios from "axios";
import { Layout, Menu, Row, Col } from "antd";
import Sidebar from "../Sidebar";

const { Content, Sider } = Layout;

const RoomDetail = () => {
  const [Room, setRoom] = useState([]);
  const params = useParams();

  useEffect(() => {
    Axios.get(`/api/rooms/${params.roomId}`).then((response) => {
      setRoom(response.data.data);
    });
  }, []);

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
            <div className='sideman'>
              <Sidebar />
            </div>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <Row gutter={[16, 16]}>
              <Col lg={12} xs={24}>
                <RoomInfo Room={Room} />
              </Col>
              <Col lg={12} xs={24}>
                <BookingCalendar Room={Room} />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default RoomDetail;
