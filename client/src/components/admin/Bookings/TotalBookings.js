import React from "react";

const TotalBookings = () => {
  return (
    <div className="side" style={{ paddingLeft: "50px", margin: "30px" }}>
      <div className="total-bookings">
        <div style={{ display: "inline-block"}}>
          <div className="div-icon">
            <i class="far fa-building" style={{ margin: "8px", color: "#4C4A6C" }}></i>
          </div>
          <div style={{ fontSize: "36px", fontWeight: "bold", color: "#4C4A6C", height: "40px" }}>
            <p>15</p>
          </div>
        </div>
        <div style={{ fontSize: "12px", fontWeight: "bold", color: "rgba(0, 0, 0, 0.8)" }}>
          <p> Meeting Rooms</p>
        </div>
      </div>

      <div className="total-bookings">
        <div style={{ display: "inline-block"}}>
          <div className="div-icon1">
            <i class="fas fa-users" style={{ margin: "8px", color: "#4A6D50" }}></i>
          </div>
          <div style={{ fontSize: "36px", fontWeight: "bold", color: "#4C4A6C", height: "40px" }}>
            <p>6</p>
          </div>
        </div>
        <div style={{ fontSize: "12px", fontWeight: "bold", color: "rgba(0, 0, 0, 0.8)" }}>
          <p> Members of Staff</p>
        </div>
      </div>

      <div className="total-bookings">
        <div style={{ display: "inline-block"}}>
          <div className="div-icon2">
            <i class="fas fa-calculator" style={{ margin: "8px", color: "#A40303" }}></i>
          </div>
          <div style={{ fontSize: "36px", fontWeight: "bold", color: "#4C4A6C", height: "40px" }}>
            <p>3</p>
          </div>
        </div>
        <div style={{ fontSize: "12px", fontWeight: "bold", color: "rgba(0, 0, 0, 0.8)" }}>
          <p>Total Issues Reported</p>
        </div>
      </div>
    </div>
  );
};

export default TotalBookings;
