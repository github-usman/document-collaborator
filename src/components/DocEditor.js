import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import React, { useState } from 'react';

const DocEditor = () => {

  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  return (
        <div className='main-editor'>
            <div className='writable-area'>

        <ReactQuill value={content} onChange={handleChange} />
            </div>
        </div>
  );
};


export default DocEditor