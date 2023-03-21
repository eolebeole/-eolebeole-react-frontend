import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import api from '../utils/api';
import Pagination from "./Pagination";

import "./FriendPlus.css";
import "./PlusPin.css";

const fetchData = async () => {
  let response = await api.get('/users');
  return response.data;
}

function FriendPlus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // 페이징 처리
  const [limit, setLimit] = useState(3); // 한 페이지에 보여줄 데이터의 개수
  const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
  const offset = (page - 1) * limit;


  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    setPage(1);
    setSearch(e.target.value);
  };

  useEffect(() => {
    api.request({
      url: "/users",
    }).then((response) => setUsers(response.data));
  }, []);

  const filtered = users.filter((user) => user.nick.includes(search));
  const list = filtered.slice(offset, offset + limit).map((item) => <>
    <Friend item={item} key={item.user_id} />
    <hr />
  </>);

  return (
    <div>
      <div id="MatMate_plus" onClick={openModal}>
        <BiPlus />
      </div>
      <div className={modalOpen ? "openModal modal" : "modal"}>
        {modalOpen ? (
          <section>
            <header>
              <button className="close" onClick={closeModal}>
                &times;
              </button>
              <h2>친구 등록</h2>
            </header>
            <div className="FriendPlus_content">
              <div id="FriendPlus_search_icon">
                <VscSearch />
              </div>
              <input
                id="FriendPlus_search_input"
                type="text"
                placeholder="닉네임을 입력해주세요."
                onChange={handleChange}
              />
            </div>
            <div>{list}</div>
            <div>
              <Pagination
                total={filtered.length}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

function Friend({item}) {
  const [visible, setVisible] = useState(false);

  return <div id="FriendPlus_content">
      <div id="FriendPlus_person">
        <IoPersonCircleSharp />
      </div>
      <div id="FriendPlus_name">
        {item.nick}#{item.code}
      </div>
      <button id="MatMate_friendBtn" className="FriendPlus_button" onClick={() => setVisible(!visible)} style={{backgroundColor: visible? 'rgb(215,154,71)' : 'rgb(98,119,44)'}}>{visible? "신청취소" : "친구신청"}</button>
    </div>
}

export default FriendPlus;
