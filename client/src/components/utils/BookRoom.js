import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Modal, Button, Select } from "antd";

const { Option } = Select;
class BookRoom extends React.Component {
  state = {
    visible: false,
    date: new Date(),
    value: [
      "08:00 AM",
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
    ],
  };
  onChange = (date) => this.setState({ date });

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
  handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  render() {
    return (
      <div>
        <Button type='primary' onClick={this.showModal}>
          Book Room
        </Button>
        <Modal
          title=''
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <Calendar onChange={this.onChange} value={this.state.date} />
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                minWidth: "100%",
              }}
            >
              <div
                style={{
                  width: "150px",
                  background: "rgba(182, 255, 137, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <label
                  for='start'
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                    color: "#338500",
                  }}
                >
                  Start
                </label>
                <br />
                <Select
                  name='start'
                  defaultValue={this.state.value[0]}
                  style={{ width: 120 }}
                  onChange={this.handleChange}
                >
                  {this.state.value.map((value, index) => (
                    <Option key={index} value={value}>
                      {value}
                    </Option>
                  ))}
                </Select>
              </div>
              <div
                style={{
                  width: "150px",
                  background: "rgba(255, 137, 137, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <label
                  for='end'
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                    color: "#850000",
                  }}
                >
                  End
                </label>
                <br />
                <Select
                  name='end'
                  defaultValue={this.state.value[0]}
                  style={{ width: 120 }}
                  onChange={this.handleChange}
                >
                  {this.state.value.map((value, index) => (
                    <Option key={index} value={value}>
                      {value}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default BookRoom;
