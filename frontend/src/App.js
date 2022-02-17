import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import AllTaskForUser from "./pages/AllTaskForUser";
import NavBar from "./components/NavBar";
import Userlist from "./components/Userlist";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/alltask" component={AllTaskForUser} />
          <Route path="/alluser" component={Userlist} />
          <Route path="/alltask" component={AllTaskForUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
