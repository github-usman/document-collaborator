import { BrowserRouter, Route, Routes } from "react-router-dom";
import JoinRoom from "./components/JoinRoom";
import Navbar from "./components/Navbar";
import "./index.css";
import Welcome from "./components/Welcome";

function App() {
  return (
   <div className="allContent">
    <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Welcome/>}/>
         <Route path="/join-room" element={<JoinRoom/>}/>
      </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;
