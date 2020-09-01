import React, { Component } from "react";
import { Modal, Button, Result } from "antd";

class Cancel extends Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type='primary' onClick={this.showModal}>
          <p>
            <i class='far fa-window-close'></i> Cancel booking
          </p>
        </Button>
        <Modal
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key='back' onClick={this.handleCancel}>
              No
            </Button>,
            <Button
              key='submit'
              type='primary'
              loading={loading}
              onClick={this.handleOk}
            >
              Yes
            </Button>,
          ]}
        >
          <Result title='Are you sure you want to cancel this booking?' />
        </Modal>
      </>
    );
  }
}

export default Cancel;
