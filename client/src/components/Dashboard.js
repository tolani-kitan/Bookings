import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Rooms from "./Rooms";
import { Button } from "reactstrap";
import AuthContext from "../context/auth/authContext";
import { Layout, Menu, Row } from "antd";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
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
            <div className='content-d'>
              <div style={{ paddingLeft: "10px" }}>
                <h2>Browse</h2>
              </div>
              <div className='side'>
                <div style={{ paddingLeft: "10px" }}>
                  <Link to='/dashboard/filter'>
                    <Button outline color='secondary'>
                      Filter meeting rooms
                    </Button>
                  </Link>
                </div>
                <div>
                  <p>12 rooms are currently in use</p>
                  <p>3 rooms are currently available</p>
                </div>
              </div>
              <Row gutter={[16, 16]}>
                <Rooms />
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
