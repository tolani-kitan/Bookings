import React from "react";
import Sidebar from "./Sidebar";
import Rooms from "../components/Rooms";
import { Button } from "reactstrap";

const Dashboard = () => {
  // const [info, setInfo] = useState({
  //   name: "Omotolani Damola",
  // });
  return (
    <div className='dashboard'>
      <div id='sidebar'>
        <Sidebar />
      </div>
      <div className='content-d'>
        <div style={{ paddingLeft: "10px" }}>
          <h2>Browse</h2>
        </div>
        <div className='side'>
          <div style={{ paddingLeft: "10px" }}>
            <Button outline color='secondary'>
              Filter meeting rooms
            </Button>
          </div>
          <div>
            <p>12 rooms are currently in use</p>
            <p>3 rooms are currently available</p>
          </div>
        </div>
        <div className='rooms-d'>
          <Rooms />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
