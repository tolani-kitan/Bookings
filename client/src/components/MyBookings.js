import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { Layout, Menu, Row, Collapse, DatePicker, Space, Card } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import logo from "../Images/Pub Picture (4).png";
import BookingContext from "../context/bookings/BookingContext";
import Reschedule from "./utils/Reschedule";
import Cancel from "./utils/Cancel";
import Report from "./utils/Report";

const { RangePicker } = DatePicker;

const { Panel } = Collapse;

const { Content, Sider } = Layout;

const MyBookings = () => {
  const bookingContext = useContext(BookingContext);
  const { bookings } = bookingContext;
  const { room, date, image, time, status } = bookings;

  //   const items =
  //     bookings &&
  //     bookings.map((item) => {
  //       return item;
  //     });

  return (
    <>
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
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 360 }}
            >
              <div className=''>
                <div style={{ paddingLeft: "10px" }}>
                  <h2
                    style={{
                      color: "#414051",
                      fontWeight: "800",
                      fontSize: "35px",
                      lineHeight: "40px",
                    }}
                  >
                    My Bookings
                  </h2>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Collapse
                    bordered={false}
                    defaultActiveKey={["1"]}
                    expandIcon={({ isActive }) => (
                      <CaretRightOutlined rotate={isActive ? 90 : 0} />
                    )}
                    className='site-collapse-custom-collapse'
                  >
                    <Panel
                      header='Select Date Range'
                      key='1'
                      className='site-collapse-custom-panel'
                    >
                      <Space direction='vertical' size={12}>
                        <RangePicker />
                      </Space>
                    </Panel>
                  </Collapse>
                </div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {bookings ? (
                    bookings.map((items, index) => (
                      <div
                        key={index}
                        className='mybook'
                        style={{
                          display: "flex",
                          width: "100%",
                          maxWidth: "100%",
                          background: "#FFFFFF",
                          padding: "20px",
                          flexWrap: "wrap",
                        }}
                      >
                        <div>
                          <img src={items.image} alt='images' />
                        </div>
                        <div className='mybook1' style={{ marginLeft: "50px" }}>
                          <div
                            style={{
                              color: "#414051",
                              fontSize: "26px",
                              fontWeight: "600",
                              lineHeight: "32px",
                            }}
                          >
                            {items.room}
                          </div>
                          <br />
                          <div
                            className='mybook1'
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              flexWrap: "wrap",
                            }}
                          >
                            <div>
                              <p>
                                <i class='far fa-calendar-alt'></i> {items.date}
                              </p>
                            </div>
                            <div>
                              <p>
                                <i class='far fa-clock'></i> {items.time}
                              </p>
                            </div>
                            <div>
                              <input
                                type='button'
                                value={items.status}
                                style={{
                                  color:
                                    items.status === "Upcoming"
                                      ? "#00BBA4"
                                      : "#BB0000",
                                  background:
                                    items.status === "Upcoming"
                                      ? "rgba(0, 187, 164, 0.2)"
                                      : "rgba(187, 0, 0, 0.2",
                                  width: "100px",
                                  padding: "5px",
                                  border: "0.5px solid white",
                                  borderRadius: "20px",
                                }}
                              />
                            </div>
                          </div>
                          <br />
                          <div
                            className='mybook2'
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "500px",
                              flexWrap: "wrap",
                            }}
                          >
                            <div style={{ borderRadius: "3px" }}>
                              <Report />
                            </div>
                            <div style={{ borderRadius: "3px" }}>
                              <Cancel />
                            </div>
                            <div style={{ borderRadius: "3px" }}>
                              <Reschedule />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>
                      <p>No Bookings Available</p>
                    </div>
                  )}
                </Row>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MyBookings;
