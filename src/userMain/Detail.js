import "../enMain/EnMain.css";
import "./User.css";

function Detail() {
  return (
    <>
      <div class="detail_modal_container">
        <h2>작업 상세보기</h2>
        <div class="detail_modal_container_inner">
          <table class="detail_modal_table">
            <tr>
              <th>프로젝트명</th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>담당 엔지니어 팀</th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>담당 엔지니어 이름</th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>담당 엔지니어 연락처</th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>작업분류</th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>작업일자</th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>소요시간</th>
              <td>
                <input type="text" />
              </td>
            </tr>
          </table>
          <table class="detail_modal_table_content">
            <tr>
              <th>작업내용</th>
              <td>
                <textarea
                  name="modal_textarea"
                  id="modal_textarea"
                  cols="60"
                  rows="10"
                ></textarea>
              </td>
            </tr>
          </table>
          <div class="detail_modal_button">
            <input
              type="button"
              value="출력"
              class="detail_modal_button_print"
            />
            <input
              type="button"
              value="닫기"
              class="detail_modal_button_close"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;