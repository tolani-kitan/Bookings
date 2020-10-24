import React, { Fragment } from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import LoginPage from './components/admin/LoginPage';
import AdminPage from './components/admin/AdminPage';
import RoomState from './context/room/RoomState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import BookingState from './context/bookings/BookingState';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './routing/PrivateRoute';
import Alert from './components/Alert';
import FilterPage from './components/FilterPage';
import AddRoom from './components/admin/Rooms/AddRoom';
import ViewRooms from './components/admin/Rooms/ViewRooms';
import EditRoom from './components/admin/Rooms/EditRoom';
import RoomDetail from './components/bookRoom/RoomDetail';
import MyBookings from './components/MyBookings';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Fragment>
      <AuthState>
        <RoomState>
          <BookingState>
            <AlertState>
              <div>
                <Router>
                  <Alert />
                  <NotificationContainer />
                  <Switch>
                    <Route exact path='/' component={Landing} />
                    <PrivateRoute
                      exact
                      path='/dashboard'
                      component={Dashboard}
                    />
                    <PrivateRoute
                      exact
                      path='/dashboard/my-bookings'
                      component={MyBookings}
                    />
                    <Route
                      exact
                      path='/dashboard/filter'
                      component={FilterPage}
                    />
                    <PrivateRoute exact path='/admin' component={LoginPage} />
                    <PrivateRoute
                      exact
                      path='/admin/dashboard'
                      component={AdminPage}
                    />
                    <PrivateRoute
                      exact
                      path='/admin/addRoom'
                      component={AddRoom}
                    />
                    <PrivateRoute
                      exact
                      path='/admin/rooms'
                      component={ViewRooms}
                    />
                    <PrivateRoute
                      exact
                      path='/admin/editRoom'
                      component={EditRoom}
                    />
                    <PrivateRoute
                      exact
                      path='/room/:roomId'
                      component={RoomDetail}
                    />
                  </Switch>
                </Router>
              </div>
            </AlertState>
          </BookingState>
        </RoomState>
      </AuthState>
    </Fragment>
  );
};

export default App;
