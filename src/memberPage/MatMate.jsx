// 리액트 사용을 위한 기본 설정들 불러오기 axios, react, icon, component
import React, { useEffect, useState } from "react";
import { FiChevronsLeft } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import api from '../utils/api';
import FriendPlus from './FriendPlus';
import Pagination from "./Pagination";

// 해당 페이지의 CSS
import './MatMate.css';

// 해당 Component의 메인 함수
function MatMate(props) {
  const [friends, setFriends] = useState([]); // "초코#0001","얼레벌레#0301","달팽이#1041","민초#1664","체리#5310","감자탕#4787","쿠쿠다스#1456"
  const [search, setSearch] = useState(""); // 현재 페이지 위치
  const [limit, setLimit] = useState(6); // 한 페이지에 보여줄 데이터의 개수
  const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
  const offset = (page - 1) * limit; // 불러오지 않아도 될 이전 페이지 리스트 개수

  // useEffect를 통해 Spring Boot에서 전송한 json 데이터를 axios로 받아오고, 받아온 데이터를 setFriends를 통해 friends에 저장
  useEffect(() => {
    api.request({
      method: "GET",
      url: "/users",
    }).then(response => setFriends(response.data));
  }, []);

  // 검색시 지정된 페이지를 첫 페이지로 되돌리고 난 후 모든 리스트에 대하여 검색을 실시
  const handleChange = (e) => {
    setPage(1);
    setSearch(e.target.value);
  };

  // 검색을 위한 필터기능
  const filtered = friends.filter((user) => user.nick.includes(search));

  // 리스트를 가져올 때, 필요한 부분을 기점으로 가져올 리스트 개수까지 가져옴
  const list = filtered.slice(offset, offset + limit)
    // 가져온 리스트를 map()메서드를 통해 각 객체의 nick과 code를 표기함
    .map((item) => (
      <>
        <div id="MatMate_content" key={item.id}>
          <div id="MatMate_person">
            <IoPersonCircleSharp />
          </div>
          <div id="MatMate_name">
            {item.nick}#{item.code}
          </div>
        </div>
        <hr />
      </>
    ));

  // 페이지 실제 표시 부분
  return (
    <div id="MatMate">
      <div id="MatMate_top">
        {/* 되돌아 가기 버튼 기능으로 클릭 시 props의 toggleTab속성이 1로 설정됨 */}
        <div className="doubleLeft icon" onClick={() => props.setToggleTab(1)}>
          <FiChevronsLeft />
        </div>
        <div id="MatMate_title">맛메이트 ({friends.length})</div>
      </div>

      <div id="MatMate_body">
        <div id="MatMate_search">
          <VscSearch />
        </div>
        <input className="input"
          id="MatMate_findInput"
          type="text"
          placeholder="친 구  검 색"
          onChange={handleChange}
        />
      </div>
      <div>{list}</div>
      {/* FriendsPlus 컴포넌트 */}
      <FriendPlus />
      {/* Pagination 컴포넌트, 특정 속성에 이용될 값을 넣음 */}
      <Pagination
        total={filtered.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

// Matmate import를 위한 export
export default MatMate;
