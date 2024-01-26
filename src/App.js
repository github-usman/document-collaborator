import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import JoinRoom from "./components/JoinRoom";
import Navbar from "./components/Navbar";
import "./index.css";
import Welcome from "./components/Welcome";
import Editor from "./components/Editor";
import { Toaster } from "react-hot-toast";
// import { useEffect, useState } from "react";
import SignUP from "./components/SignUp";
import Login from "./components/Login";

function App() {

  return (
    <div className="allContent">
      <div>
             <Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                ></Toaster>
            </div>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/join-room" element={<JoinRoom />} />
          <Route path="/editor/:roomId" element={<Editor />} />   
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUP/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
