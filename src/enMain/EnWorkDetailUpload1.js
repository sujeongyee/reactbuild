import React, { useState, useEffect } from "react";
import axios from "axios";

function FileUpload() {
  const [fileList, setFileList] = useState([]);
  const [removeFileId, setRemoveFileId] = useState(new Set());
  const [fileInputIdCounter, setFileInputIdCounter] = useState(0);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!post) {
        return;
      }

      try {
        const response = await axios.get(`/posts/${post.id}/files`);

        if (!response.data.length) {
          return;
        }

        for (let i = 0; i < response.data.length; i++) {
          addFile(response.data[i].originalName, response.data[i].id);
        }
      } catch (error) {
        console.error("API 호출 중 에러 발생: ", error);
      }
    };

    fetchData();
  }, [post]);

  const selectFile = (fileInput, id) => {
    const file = fileInput.files[0];

    if (!file) {
      // 파일이 선택되지 않았을 때
      fileInput.value = ""; // 파일 선택 창 초기화
      return false;
    }

    const fileSize = Math.floor(file.size / 1024 / 1024);
    if (fileSize > 50) {
      alert("50MB 이하의 파일로 업로드해 주세요.");
      fileInput.value = ""; // 파일 선택 창 초기화
      return false;
    }

    // 파일이 선택되면 파일명을 표시하고, e.target.value를 초기화
    if (id) {
      const updatedFileList = [...fileList];
      const updatedFileIndex = updatedFileList.findIndex((f) => f.id === id);
      updatedFileList[updatedFileIndex].name = file.name; // 파일명 업데이트
      setFileList(updatedFileList);
    }
    if (id) {
      setRemoveFileId((prevRemoveFileId) => new Set([...prevRemoveFileId, id]));
    }
  };

  const addFile = (fileName = "", id = null) => {
    const newFileInputId = fileInputIdCounter + 1; // 고유한 파일 입력 필드 ID 생성
    setFileInputIdCounter(newFileInputId); // 다음 ID를 위해 카운터 업데이트

    setFileList((prevFileList) => [
      ...prevFileList,
      { id: id, name: fileName, inputId: newFileInputId }, // 파일의 id, 이름, 입력 필드 ID를 상태로 관리
    ]);
  };

  const removeFile = (id) => {
    if (id) {
      setRemoveFileId((prevRemoveFileId) => new Set([...prevRemoveFileId, id]));
    }
    setFileList((prevFileList) =>
      prevFileList.filter((file) => file.id !== id)
    );
  };

  const handleFileUpload = () => {
    console.log("파일 업로드 및 삭제 ID 처리:", Array.from(removeFileId));
  };

  return (
    <div>
      <div className="file_list">
        {fileList.map((file) => (
          <div key={file.id} className="file_input">
            <input
              type="text"
              readOnly
              value={file.name || ""}
              key={`fileName-${file.inputId}`}
            />
            <label>
              첨부파일
              <input
                type="file"
                name="files"
                id={`fileInput-${file.inputId}`}
                onChange={(e) => selectFile(e.target, file.id)}
              />
            </label>
            <button
              type="button"
              onClick={() => removeFile(file.id)}
              className="btns del_btn"
            >
              <span>삭제</span>
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={addFile}>
        파일 추가
      </button>
      <button type="button" onClick={handleFileUpload}>
        파일 업로드
      </button>
    </div>
  );
}

export default FileUpload;
