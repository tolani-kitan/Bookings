import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Layout, Menu, Row } from "antd";
import Rooms from "./Rooms";

const { Content, Sider } = Layout;

const FilterPage = () => {
  const [checking, setChecking] = useState({ checking: false });

  const handleChecked = () => {
    setChecking({ checking: !checking });
  };

  return (
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
        <div className='logo' style={{ height: "140vh" }} />
        <Menu theme='dark' mode='inline'>
          <div className='filter'>
            <h2> Filters</h2>
          </div>
          <br />
          <form className='main-room'>
            <div>
              <p>Room Availabilty</p>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>Available now</span>
              </label>
            </div>
            <div>
              <p>Room Time</p>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>0 - 2 hours</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>2 hours and more</span>
              </label>
            </div>
            <div>
              <p>Room Capacity</p>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>4 - 10</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>11 - 20</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>21 - 30</span>
              </label>
            </div>
            <div>
              <p>Equipment</p>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>Projector</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>TV</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>Telephone</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>PA System</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>Printer</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>Writing Board</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>Water Dispenser</span>
              </label>
            </div>
            <div>
              <p>Location</p>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>East Wing</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>West Wing</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>Ground Floor</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>1st Floor</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>2nd Floor</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>3rd Floor</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>4th Floor</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
                <span>5th Floor</span>
              </label>
              <label className='label'>
                <input
                  type='checkbox'
                  class='filled-in'
                  onChange={handleChecked}
                />
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
              <div
                className='side'
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <div style={{ paddingLeft: "10px" }}>
                  <Link to='/dashboard/filter'>
                    <Button outline color='secondary'>
                      0-2 hours
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

export default FilterPage;