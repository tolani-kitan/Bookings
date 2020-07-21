import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import RoomState from "./context/room/RoomState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./routing/PrivateRoute";
import Alert from "./components/Alert";
import FilterPage from "./components/FilterPage";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <RoomState>
        <AlertState>
          <Router>
            <div>
              <Alert />
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/dashboard/filter' component={FilterPage} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </RoomState>
    </AuthState>
  );
};

export default App;
