import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/App.scss";
import Navigation from "../src/components/Navigation.jsx";
import Home from "../src/pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Switch>
          <Route
            exact
            path="/moodagent"
            component={(props) => <Home {...props} />}
          />
          <Redirect from="/*" to="/moodagent" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
