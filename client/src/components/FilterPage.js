import React, { Fragment } from "react";
import { Button } from "reactstrap";
import {Link} from 'react-router-dom';
import { Layout, Menu, Row } from "antd";
import Rooms from "./Rooms";

const { Content, Sider } = Layout;

const FilterPage = () => {
  return (
    // const [checking, setChecking] = useState({clicked: false})

  // const handleCheck = () => {
  //    setChecking({clicked: event.target.checked})
  // }

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
        <div className='logo' />
        <Menu theme='dark' mode='inline'>
          <div className='filter'>
            <h2> Filters</h2>
          </div>
          <form className='main-room'>
            <div>
              <p>Room Availabilty</p>
              <label className='label'>
                <input type='checkbox' class='filled-in' />
                <span>Available now</span>
              </label>
            </div>
            <div>
              <p>Room Time</p>
              <label className='label'>
                <input type='checkbox' class='filled-in' />
                <span>0 - 2 hours</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>2 hours and more</span>
              </label>
            </div>
            <div>
              <p>Room Capacity</p>
              <label className='label'>
                <input type='checkbox' class='filled-in' />
                <span>4 - 10</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>11 - 20</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>21 - 30</span>
              </label>
            </div>
            <div>
              <p>Equipment</p>
              <label className='label'>
                <input type='checkbox' class='filled-in' />
                <span>Projector</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>TV</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>Telephone</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>PA System</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>Printer</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>Writing Board</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>Water Dispenser</span>
              </label>
            </div>
            <div>
              <p>Location</p>
              <label className='label'>
                <input type='checkbox' class='filled-in' />
                <span>East Wing</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>West Wing</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>Ground Floor</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>1st Floor</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>2nd Floor</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>3rd Floor</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>4th Floor</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>5th Floor</span>
                <br />
                <input type='checkbox' class='filled-in' />
                <span>6th Floor</span>
              </label>
            </div>
            <div
              className='filter-btn'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button outline color='primary'>
                clear
              </Button>{" "}
              <Button outline color='secondary'>
                filter
              </Button>
            </div>
          </form>
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
                    {}
                  </Button>
                </Link>
                </div>
                <div>
                  <p>12 rooms are currently in use</p>
                  <p>3 rooms are currently available</p>
                </div>
              </div>
              <Row gutter={[16, 16]} >
                <Rooms />
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default FilterPage;
