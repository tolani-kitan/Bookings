import React, { useState } from "react";
import room from "../Images/room_landing.png";

const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [login, isloggedIn] = useState(false);

  const buttonSubmit = async (e) => {
    e.preventDefault();
    console.log("hello")
    try {
      const getUsers = await fetch ("http://localhost:4000/api/auth/users")
      const data = await getUsers.json()
     console.log(data);
  }
  catch(err) {
      console.log(err)
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
            <a href="/api/auth/login">  Login</a> 
              </button>
          </form>
        </div>
      </div>
      </div>
    );
}

export default Landing;
