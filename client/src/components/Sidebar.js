import React, { Fragment } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import logo from "../Images/SeekPng 1.png";

const Sidebar = () => {
  return (
    <Fragment>
      <div>
        <div className='d-flex flex-row justify-content-around'>
          <div className='p-2'>
            <img src={logo} alt='website logo' />
            {""}
            <span style={{ color: "white" }}>raster</span>
          </div>
          <div className='p-2'>
            <i className='far fa-bell' style={{ color: "white" }}></i>
          </div>
        </div>

        <div className='row' style={{ marginTop: "20px" }}>
          <form className='col s12'>
            <div className='row'>
              <div className='input-field col s6'>
                <i className='material-icons prefix' style={{ color: "white" }}>
                  search
                </i>
                <textarea
                  id='icon_prefix2'
                  className='materialize-textarea'
                ></textarea>
                <label for='icon_prefix2'>Search for meeting rooms..</label>
              </div>
            </div>
          </form>
        </div>
        <div>
          <ul className='list-group'>
            <Link className='one'>Browse</Link>
            <Link className='two'>My Bookings</Link>
          </ul>
        </div>
        <UncontrolledDropdown className='dropit'>
          <DropdownToggle caret>Omotolani Damola</DropdownToggle>
          <DropdownMenu>
            <DropdownItem className='logout'>Return to main site</DropdownItem>
            <DropdownItem className='logout'>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </Fragment>
  );
};

export default Sidebar;
