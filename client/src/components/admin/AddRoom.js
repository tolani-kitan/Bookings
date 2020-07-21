import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddRoom = () => {
    return (
        <div>
            <Form>
              <FormGroup>
                <Label for="name">Meeting Room Name</Label>
                <Input type="text" name="name" id="name" placeholder="Enter room name..."/>
              </FormGroup>
              <Row form>
              <Col md={6}>
              <FormGroup>
                <Label for="location">Location</Label>
                <Input type="select" name="location" id="location">
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
                  <Label for="capacity">Capacity</Label>
                  <Input type="select" name="capacity" id="capacity">
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
                        <Label for="location">Room Time</Label>
                        <Input type="select" name="time" id="time">
                        <option>0 - 2hours</option>
                        <option>2hours and more</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="Rnumber">Room Number (If Any)</Label>
                        <Input type="text" name="Rnumber" id="Rnumber"/>
                    </FormGroup>
                </Col>
              </Row>
              <FormGroup check inline>
                <Input type="checkbox" /> 
              
            </FormGroup>
            <FormGroup check inline>
                <Label check>
                <Input type="checkbox" /> Tv
                </Label>
            </FormGroup>
            
            </Form>
            <input type='checkbox' name='TV' />
        </div>
    )
}

export default AddRoom;
