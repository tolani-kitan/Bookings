import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import RoomState from "./context/RoomState";

const App = () => {
  return (
    <RoomState>
      <Router>
        <div>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </RoomState>
  );
};

export default App;
