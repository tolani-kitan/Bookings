import React, { useState } from "react";
import "./App.css";
import room from "./Images/room_landing.png";

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

  const buttonSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello");
    try {
        
    }
    catch {

    }
  }

    return (
      <div className="container">
        <div className="row">
          <div className="col div-image">
            <img className="room-img" src={room} alt="meeting room" />
          </div>
  
          <div className="col div-book">
            <div className="book">
              <h3> Book a space for your next meeting</h3>
              <span>Log in with your staff email to continue</span>
            </div>
  
            <form className='div-form'>
              <div className="form-group">
                <label for='email' className='div-label'>STAFF EMAIL</label>
                <input 
                type="email" 
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 />
              </div>
              <div className="form-group">
              <label for='password' className='div-label'>PASSWORD</label>
              <input  
              type="password" 
              className="form-control" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button 
            type="submit" 
            className="btn btn-color"
            onClick={buttonSubmit}
            >
              Login
              </button>
          </form>
        </div>
      </div>
      </div>
    );
}

export default App;
