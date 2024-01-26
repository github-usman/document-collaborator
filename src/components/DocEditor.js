import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useEffect, useRef, useState } from 'react';
import ACTIONS from './Actions';

const DocEditor = ({ socketRef, roomId }) => {
  const [content, setContent] = useState('');
  const editorRef = useRef();

  const handleChange = (value) => {
    setContent(value);
    socketRef.current.emit(ACTIONS.CODE_CHANGE, {
      roomId,
      content: value,
    });
  };

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ content }) => {
        setContent(content);
      });
    }
  }, [socketRef.current]);

  return (
    <div className='main-editor'>
      <div className='writable-area'>
        <ReactQuill value={content} onChange={handleChange} />
      </div>
    </div>
  );
};

export default DocEditor;
