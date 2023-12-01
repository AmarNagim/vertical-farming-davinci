import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Login from "./login";
import ForgotPassword from "./forgotPassword";
import Home from "./Main Menu/dashboard-home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
