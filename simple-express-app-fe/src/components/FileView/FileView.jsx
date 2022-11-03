import React, { useState, useEffect } from 'react';
import useFileApi from './utils/useFileApi';

import './styles.css';

const FileView = () => {
  const [files, setFiles] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const [getAllFiles, createFile] = useFileApi();

  useEffect(() => {
    const fetchFiles = async () => {
      const newFiles = await getAllFiles();
      setFiles(newFiles);
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <div>
        {files?.map((el) => (
          <div className="fileitem" key={el.id}>
            <div>filename: {el.fileName}</div>
            <div>content: {el.content}</div>
          </div>
        ))}
      </div>

      <div>
        <div>
          <input
            value={inputValue}
            placeholder="fileName"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <textarea
          placeholder="content"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
        />
        <div>
          <button
            onClick={async () => {
              await createFile({
                fileName: inputValue,
                content: textareaValue,
              });

              const newFiles = await getAllFiles();
              setFiles(newFiles);
            }}
          >
            create
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileView;
