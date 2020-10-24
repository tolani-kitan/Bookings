import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Result } from "antd";

class Successful extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <>
        <Button type='primary' onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Result
            status='success'
            title='Room Successfully Booked!'
            extra={[
              <div style={{ textAlign: "center" }}>
                <Link>
                  <p style={{ fontSize: "20px" }}>Manage bookings</p>
                </Link>
              </div>, 
            ]}
          />
        </Modal>
      </>
    );
  }
}

export default Successful;
