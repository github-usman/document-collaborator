import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useEffect, useState } from 'react';
import ACTIONS from './Actions';

const DocEditor = ({ socketRef, roomId }) => {
  const [content, setContent] = useState('');


  const handleChange = (value, _, source) => {
   
    if (source === 'user') {
      setContent(value);
      socketRef.current.emit(ACTIONS.CODE_CHANGE, {
        roomId,
        content: value,
      });
    }
  };

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ content }) => {
        setContent(content);
      });
    }
    // eslint-disable-next-line
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
