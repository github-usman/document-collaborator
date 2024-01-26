import React, { useState } from "react";
import { Users } from "./Users";
import "./style/Editor.css";
import DocEditor from "./DocEditor";

const Editor = () => {
  const [clients, setClients] = useState([
    { socketId: 1, username: "Usman" },
    { socketId: 2, username: "ansari" },
    { socketId: 3, username: "ali" },
    { socketId: 3, username: "ali" },
    { socketId: 3, username: "Pli" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          {clients.map((client) => (
            <Users username={client.username} socketId={client.socketId} />
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
