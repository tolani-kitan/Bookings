import React, { Fragment, useContext } from "react";
import { Redirect } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
// import "materialize-css/dist/css/materialize.min.css";
import logo from "../../Images/SeekPng 1.png";
import AuthContext from "../../context/auth/authContext";
import RoomFilter from "../RoomFilter";

const AdminSidebar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;


  const onLogout = () => {
    logout();
  } 

  return (
    <Fragment>
      <div>
        <div className='d-flex flex-row justify-content-around'>
          <div className='p-2 mt-4'>
            <img src={logo} alt='website logo' />
            {""}
            <span style={{ color: "white" }}>raster</span>
          </div>
          <div className='p-2 mt-4'>
            <i className='far fa-bell' style={{ color: "white", fontSize: "30px" }}></i>
          </div>
        </div>

        <div className='row' style={{ marginTop: "20px" }}>
          <form className='col s12'>
            <div className='row'>
              <RoomFilter />
            </div>
          </form>
        </div>
        <div>
          <ul className='list-group'>
            <Link to="/admin/dashboard" className='one'>Overview</Link>
            <Link to="/admin/rooms" className='two'>Rooms</Link>
            <a href="#" className='two'>Reports</a>

          </ul>
        </div>
        <UncontrolledDropdown className='dropit1'>
          <DropdownToggle caret>{user && user.data.name}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem className='logout'>Return to main site</DropdownItem>
            <DropdownItem className='logout' onClick={onLogout}><i className='fas fa-sign-out-alt'></i>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
