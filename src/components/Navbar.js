import { Link } from "react-router-dom";
import "./style/Navbar.css";
import { useAuth } from "../authContext";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
     {isAuthenticated && 
      <ul className="container">
        <h1><span>D</span>ocument-<span>C</span></h1>
        <div className="menu">
          <Link to={"/"}>Home</Link>
          <Link to={"join-room"}>Join Team</Link>
          <Link>About</Link>
        </div>
      </ul>
       }
    </>
  );
};

export default Navbar;
