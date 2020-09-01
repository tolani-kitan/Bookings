import React, { Component } from "react";
import { Modal, Button, Input } from "antd";

const { TextArea } = Input;

class Report extends Component {
  state = {
    loading: false,
    visible: false,
  };

  onChange = (e) => {
    console.log(e);
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
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type='primary' onClick={this.showModal}>
          <p>
            <i class='fas fa-comment-dots'></i> Report an issue
          </p>
        </Button>
        <Modal
          title='Report an issue'
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              key='submit'
              type='primary'
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>,
          ]}
        >
          <Input
            placeholder='Type your subject here'
            allowClear
            onChange={this.onChange}
          />
          <br />
          <br />
          <TextArea
            placeholder='Type your issue here, such as broken equipment etc.'
            allowClear
            onChange={this.onChange}
          />
        </Modal>
      </>
    );
  }
}

export default Report;
