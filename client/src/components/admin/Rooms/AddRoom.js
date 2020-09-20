import React,  { useContext, useEffect, useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import AdminSidebar from "../AdminSidebar";
import AuthContext from "../../../context/auth/authContext";
import RoomContext from "../../../context/room/RoomContext";


const AddRoom = (props) => {
  const authContext = useContext(AuthContext);

  const roomContext = useContext(RoomContext)

  const { AddRoom, current, updateRoom } = roomContext;

    useEffect(() => {
            setRoom({
              name: "",
              location: "",
              capacity: "",
              time: "",
              number: "",
              features: [],
              images: []
            });
        }, [current])

  const [room, setRoom] = useState({
    name: "",
    location: "",
    capacity: "",
    time: "",
    number: "",
    features: [],
    images: []
  });

  const { name, location, capacity, time, number, features, images } = room;


  const onChange = (e) => {
    // const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    // if(value === true) {
    //   console.log(e.target.name)
    // }

    setRoom({
      ...room,
      [e.target.name]: e.target.value,
    });
  }

  // const inputChange = (e) => {
  //   const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

  //   if(value === true) {
  //     console.log(e.target.name)
  //     setRoom({
  //       ...room,
  //       features: e.target.name,
  //     });
  //   }
  // }


  const buttonSubmit = async (e) => {
    e.preventDefault();
        // AddRoom(room);

    console.log(name, location, capacity, time, number, features, images)
};

  return (
    <div className="dashboard">
      <div id="sidebar">
        <AdminSidebar />
      </div>
      <div className="content-d">
        <div style={{ paddingLeft: "50px", fontWeight: "800", fontSize: "35px", lineHeight: "40px", color: "#414051" }}>
          <h2>Rooms</h2>
        </div>
        <div className="side" style={{ paddingLeft: "50px" }}>
          <div className="new-room">
            <p>Rooms  </p>
            <p>Add New Room</p>
          </div>
        </div>
        <div className="add-room" style={{ paddingLeft: "50px", marginTop: "30px" }}>
          <div className="form1">
          <Form>
            <FormGroup>
              <Label for="name" className="label" >Meeting Room Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={onChange}
                placeholder="Enter room name..."
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="location" className="label" >Location</Label>
                  <Input type="select" name="location" id="location" value={location} onChange={onChange}>
                    <option>Ground Floor</option>
                    <option>First Floor</option>
                    <option>Second Option</option>
                    <option>Third Floor</option>
                    <option>Fourth Floor</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="capacity" className="label" >Capacity</Label>
                  <Input type="select" name="capacity" id="capacity" value={capacity} onChange={onChange} >
                    <option>4 - 10</option>
                    <option>11 - 20</option>
                    <option>21 -30</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="time" className="label" >Room Time</Label>
                  <Input type="select" name="time" id="time" value={time} onChange={onChange} >
                    <option>0 - 2hours</option>
                    <option>2hours and more</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="number" className="label" >Room Number (If Any)</Label>
                  <Input type="text" name="number" id="number" value={number} onChange={onChange} />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check inline>
                <label>
                  <input type="checkbox"
                  name="Projector"
                  onChange={onChange} />
                  <span>Projector </span>
                </label>
            </FormGroup>
            <FormGroup check inline>
              <label>
                <input type="checkbox"  name="TV" onChange={onChange} />
                <span>TV</span>
               </label>
            </FormGroup>
            <FormGroup check inline>
              <label>
                <input type="checkbox" name="Telephone" 
                   onChange={onChange} />
                <span>Telephone</span>
               </label>
            </FormGroup>
            <Row>
            <FormGroup check inline>
              <label>
                <input type="checkbox" name="Dispenser"
                   onChange={onChange} />
                <span>Dispenser</span>
               </label>
            </FormGroup>
            <FormGroup check inline>
              <label>
                <input type="checkbox" name="PA System"
                  onChange={onChange} />
                <span>PA System</span>
               </label>
            </FormGroup>
            <FormGroup check inline>
              <label>
                <input type="checkbox" name="Writing Board"
                   onChange={onChange} />
                <span>Writing Board</span>
               </label>
            </FormGroup>
          </Row>
          <Input type='submit' 
          value={current ? "Update Room" : "Add Room" }
          style={{ background: "#30B9DB", border: "1px solid #30B9DB"}} />
          </Form> 
          </div>
          <div className="form2">
            <form action="#">
              <div className="file-field input-field">
                <div className="btn" style={{ background: "#30B9DB", border: "1px solid #30B9DB"}}>
                  <span>Add Images</span>
                  <input type="file" multiple value={images} onChange={onChange} />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" placeholder="Upload one or more images" />
                </div>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
