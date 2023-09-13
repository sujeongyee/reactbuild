import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [fileData, setFileData] = useState(null);
  const [filename, setFilename] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let byteSize = e.dataTransfer.files[0].size;
    const maxSize = 50 * 1024 * 1024; // 50MB를 바이트로 변환

    if (byteSize > maxSize) {
      alert("파일은 최대 50MB 이하만 허용됩니다");
    } else {
      let filename = e.dataTransfer.files[0].name;
      setFilename(filename);
      setFileData(e.dataTransfer.files[0]);
    }
  };

  const handleFileUpload = () => {
    if (fileData) {
      let formData = new FormData();
      formData.append("file_data", fileData);

      axios
        .post("/api/main/awsUpload", formData)
        .then((response) => {
          alert(response.data);
        })
        .catch((err) => {
          alert("업로드에 실패했습니다: " + err);
        });
    } else {
      alert("파일을 먼저 선택하세요.");
    }
  };

  return (
    <div>
      <div
        className="file_box"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {filename ? (
          <p className="file_name">{filename}</p>
        ) : (
          <p>파일을 드래그 앤 드롭하세요.</p>
        )}
      </div>
      <button className="upload_btn" onClick={handleFileUpload}>
        파일 업로드
      </button>
    </div>
  );
}

export default FileUpload;
