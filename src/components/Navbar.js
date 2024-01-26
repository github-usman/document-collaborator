import { Link } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {
  return (
    <>
      <ul className="container">
        <h1><span>D</span>ocument-<span>C</span>ollaboration</h1>
        <div className="menu">
          <Link to={"/"}>Home</Link>
          <Link to={"join-room"}>Join Room</Link>
          <Link>About</Link>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
