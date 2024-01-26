import { ReactTyped } from "react-typed";
import "./style/welcome.css";
const Welcome = () => (
  <div className="welcome-container">
    <div className="welcome-content">
     <div className="main">
      <ReactTyped
        strings={["Welcome to document collaboration. Here, you can"]}
        typeSpeed={40}
      />
      </div>
      <br />
     <div className="typed">
      <ReactTyped
        strings={[
          "join with your friend and work together on a document.",
          "join with your colleague and work together on a document.",
          "join with your professional and work together on a document.",
        ]}
        typeSpeed={10}
        backSpeed={30}
        attr="placeholder"
        loop
      >
        <input type="text"  />
      </ReactTyped>
      <div className="login-btn">
        <button>Log In</button>
        <button>Sign Up</button>

      </div>
        
    </div>
    </div>
  </div>
);
export default Welcome;
