import React, { useRef } from 'react';

function FileUpload() {
  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    // 이제 selectedFiles 배열에 선택한 파일들이 들어 있습니다.
  };

  return (
    <div>
      <button onClick={handleFileInputClick}>파일 선택</button>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
        multiple
      />
    </div>
  );
}

export default FileUpload;
