import React, { Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Button } from "reactstrap";

const FilterPage = () => {
  return (
    <div className='main-filter'>
      <div className='filter'>
        <h2> Filters</h2>
      </div>
      <div>
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
          <div className='filter-btn'>
            <Button outline color='primary'>
              clear
            </Button>{" "}
            <Button outline color='secondary'>
              filter
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterPage;
