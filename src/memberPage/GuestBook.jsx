import { React } from 'react';
import { FiChevronsLeft } from 'react-icons/fi'
import './GuestBook.css';

function GuestBook(props) {

  return (
    <div id="GuestBook">
      <div id="GuestBook_top">
        <div
          className="doubleLeft icon"
          onClick={() => props.setToggleTab(1)}
        >
          <FiChevronsLeft />
        </div>
        <div id="GuestBook_title">방명록</div>
      </div>
      <div id="GuestBook_add">
        <input></input>
        <button>등록</button>
      </div>
      <div id="GuestBook_body">
        <div id="GuestBook_item">
          <div id="GuestBook_text">방명록 내용</div>
          <button id="GuestBook_btn" >삭제</button>
          <button id="GuestBook_btn" >💚</button>
          {/* todo : 삭제버튼, 작성자 표시, 좋아요 버튼 */}
        </div>
        <div id="GuestBook_item">
          <div id="GuestBook_text">방명록 내용</div>
          {/* todo : 삭제버튼, 작성자 표시, 좋아요 버튼 */}
        </div>
        <div id="GuestBook_item">
          <div id="GuestBook_text">방명록 내용</div>
          {/* todo : 삭제버튼, 작성자 표시, 좋아요 버튼 */}
        </div>
        <div id="GuestBook_item">
          <div id="GuestBook_text">방명록 내용</div>
          {/* todo : 삭제버튼, 작성자 표시, 좋아요 버튼 */}
        </div>
      </div>
    </div>
  );
};

export default GuestBook;
