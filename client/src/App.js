import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import RoomState from "./context/RoomState";
import FilterPage from "./components/FilterPage";
import BookingCalendar from "./components/BookingCalendar";

const App = () => {
  return (
    <RoomState>
      <Router>
        <div className='app'>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/dashboard/filters' component={FilterPage} />
            <Route exact path='/dashboard/room' component={BookingCalendar} />
          </Switch>
        </div>
      </Router>
    </RoomState>
  );
};

export default App;
