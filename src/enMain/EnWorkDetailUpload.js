import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from '../loding/Loding';

function FileUpload() {

  const [fileList, setFileList] = useState([]);
  const [removeFileId, setRemoveFileId] = useState(new Set());
  const [fileName, setFileName] = useState("");
  const [post, setPost] = useState(null);

  const [loading, setLoading] = useState(true);
  const [fileData, setFileData] = useState(null);



  useEffect(() => {
    // 전체 파일 조회 로직
    const fetchData = async () => {
      // 1. 신규 등록/수정 체크
      if (!post) {
        return;
      }

      try {
        // 2. API 호출
        const response = await axios.post(`/api/main/cloudUpload`);

        // 3. 로직 종료
        if (!response.data.length) {
          return;
        }

        // 4. 업로드 영역 추가
        for (let i = 0; i < response.data.length; i++) {
          addFile();
        }

        // 5. 파일 선택 & 삭제 이벤트 재선언 & 파일명 세팅
        const updatedFileList = fileList.map((file, index) => {
          if (index < response.data.length) {
            return { ...file, name: response.data[index].originalName };
          }
          return file;
        });
        setFileList(updatedFileList);
      } catch (error) {
        console.error("API 호출 중 에러 발생: ", error);
      }
    };

    fetchData();
  }, [post]);

  // 파일 선택 시 호출되는 함수
  const selectFile = (fileInput, id) => {
    const file = fileInput.files[0];

    // 1. 파일 선택 창에서 취소 버튼이 클릭된 경우
    if (!file) {
      return false;
    }

    // 2. 파일 크기가 10MB를 초과하는 경우
    const fileSize = Math.floor(file.size / 1024 / 1024);
    if (fileSize > 50) {
      alert("50MB 이하의 파일로 업로드해 주세요.");
      return false;
    }

    // 3. 파일명 지정
    const updatedFileList = [...fileList];
    const updatedFileIndex = updatedFileList.findIndex((f) => f.id === id);
    updatedFileList[updatedFileIndex].name = fileInput.name;
    setFileList(updatedFileList);

    // 4. 삭제할 파일 id 추가
    if (id) {
      setRemoveFileId((prevRemoveFileId) => new Set([...prevRemoveFileId, id]));
    }
  };


  const addFile = () => {
    setFileList((prevFileList) => [...prevFileList, { id: null, name: "" }]); // 빈 문자열을 추가하여 렌더링된 파일 입력 필드 초기화
  };

  const removeFile = (index, id) => {
    // 1. 삭제할 파일 id 추가
    if (id) {
      setRemoveFileId((prevRemoveFileId) => new Set([...prevRemoveFileId, id]));



      // 2. 파일 영역 초기화 & 삭제
      const updatedFileList = [...fileList];
      updatedFileList.splice(index, 1);
      setFileList(updatedFileList);
    };

    // 파일 업로드
    const handleFileUpload = () => {
      // 파일 업로드 처리
      // removeFileId Set을 이용하여 삭제할 파일 ID들을 처리
      console.log("파일 업로드 및 삭제 ID 처리:", Array.from(removeFileId));
    };

    return (
      <div>

        <div className="file_list">
          {fileList.map((file, index) => (
            <div key={index} className="file_input">
              <label>
                <input
                  type="file"
                  name="files"
                  onChange={(e) => selectFile(e.target, file.id)}
                />
              </label>
              <button
                type="button"
                onClick={() => removeFile(index, file.id)}
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

}
  export default FileUpload;
