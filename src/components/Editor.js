import React, { useEffect, useRef, useState } from "react";
import { Users } from "./Users";
import "./style/Editor.css";
import DocEditor from "./DocEditor";
import { initSocket } from "../socket";
import ACTIONS from "./Actions";
import { useLocation } from "react-router";
const Editor = () => {

    const socketRef = useRef(null);
    const location = useLocation();
    useEffect(()=>{
        const init = async()=>{
            socketRef.current = await initSocket();
            socketRef.current.emit(ACTIONS.JOIN,{
                
                username:location.state?.username,
            });
        }
        init();
    },[]);

  const [clients, setClients] = useState([
    { socketId: 1, username: "Usman" },
    { socketId: 2, username: "ansari" },
    { socketId: 3, username: "Vishal Singh" }
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          {clients.map((client) => (
            <Users key={client.socketId} username={client.username} socketId={client.socketId} />
          ))}
        </div>
        <div className="editor-buttons">
          <button>Copy join ID</button>
          <button>Leave collaboration</button>
        </div>
      </div>
      <div>
      <DocEditor/>
      </div>
    </div>
  );
};

export default Editor;
