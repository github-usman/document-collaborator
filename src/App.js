import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import JoinRoom from "./components/JoinRoom";
import Navbar from "./components/Navbar";
import "./index.css";
import Welcome from "./components/Welcome";
import Editor from "./components/Editor";
// import { useEffect, useState } from "react";
import SignUP from "./components/SignUp";
import Login from "./components/Login";

function App() {

  return (
    <div className="allContent">
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/join-room" element={<JoinRoom />} />
          <Route path="/editor/:id" element={<Editor />} />   
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUP/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
