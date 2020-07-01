import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/Landing';


const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                <Route exact path='/login' component= {Landing} />
                </Switch>
            </div>
        </Router>
      
    );
}

export default App;
