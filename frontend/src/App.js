import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpForm from "./pages/SignUpForm"
import SignInForm from "./pages/SignInForm"
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Home />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/signup" exact component={SignUpForm} />
    //     <Route path="/footer" exact component={<Footer  />} />
    //     <Route path="/signin" exact component={SignInForm} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
