import axios from 'axios';
import { React, useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { VscSearch } from "react-icons/vsc";
import { useQuery } from 'react-query';

import { Error, Loading } from '../components'
import Pagination from "./Pagination";

import './PlusPin.css';

const fetchData = async (query, [x, y]) => {
  let response = await axios.get('http://localhost:4000/places', { params: { x, y, query } });
  return response.data;
}



function PlusPin() {

  const [toggleTab, setToggleTab] = useState(1); // 수정필요

  const [position, setPosition] = useState([127.48742638905269, 36.64394808472207]);
  const [query, setQuery] = useState("");
  const [limit] = useState(3); // 한 페이지에 보여줄 데이터의 개수
  const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
  const offset = (page - 1) * limit;
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState({});


  const { isLoading, error, data: restaurants } = useQuery(['restaurants', position, query], () => fetchData(query, position));
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
    setToggleTab(1);
  }

  const handleChange = (e) => {
    setPage(1);
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (isLoading) return;
    const filtered = restaurants.filter((place) => place.place_name.includes(query));
    setFiltered(filtered);
  }, [restaurants]);


  // if (isLoading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <>{error}</>
  // }

  const list = filtered.slice(offset, offset + limit)
    .map((item) => (
      <>
        <div id="PlusPin_content" key={item.id} onClick={() => {
          setSelected(item);
          setToggleTab(2);
        }}>
          <div id="PlusPin_icon" key={item.id}>
            <FaMapMarkerAlt />
          </div>
          <div id="PlusPin_name">
            {item.place_name} <br />
            {item.road_address_name}
          </div>
        </div>
        <hr />
      </>
    ));



  const plusPinPageOne = <>
    <header>
      <button className="close" onClick={closeModal}>
        &times;
      </button>
      <h2>맛집 검색</h2>
    </header>
    <div id="PlusPin_body">
      <div id="PlusPin_search_icon">
        <VscSearch />
      </div>
      <input className="input"
        id="PlusPin_search_input"
        type="text"
        placeholder="맛 집  검 색"
        onChange={handleChange}
      />
    </div>
    <div>{list}</div>
    <Pagination
      total={filtered.length}
      limit={limit}
      page={page}
      setPage={setPage}
    />
  </>

  function ScoreSelect() {
    const [score, setScore] = useState([]);

    function handleFocus(e) {
      if (!score.length) {
        const score = Array.from({ length: 11 }, (_, i) => 0 + 0.5 * i);
        const scoreOptions = score.map((score) => (
          <option key={score} value={score}>
            {score}
          </option>
        ));
        setScore(scoreOptions);
      }
    }

    return (
      <select name="eval" onFocus={handleFocus}>
        <option disabled selected>
          0.0
        </option>
        {score}
      </select>
    );
  }

  function PlusPinPageTwo() {

    const [profileImage, setProfileImage] = useState(
      './img/xInbox.png'
    );
    const profileImgFileInput = useRef(null);

    const onChange = (e) => {
      if (e.target.files[0]) {
        //setFile(e.target.files[0])
      } else {
        //업로드 취소할 시
        setProfileImage(
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        );
        return;
      }
      //화면에 프로필 사진 표시
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    };

    const onSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(document.querySelector('#PlusPin_body'));
      //formData.append('file', profileImgFileInput.current.files[0]);
      axios.post('http://localhost:4000/restaurants', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          console.log(response);
          setProfileImage(response.data.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return (
      <>
        <header>
          <button className="close" onClick={() => setToggleTab(1)}>
            &times;
          </button>
          <h2>맛집 등록</h2>
        </header>
        <form id="PlusPin_body" onSubmit={onSubmit}>
          <img
            id="SettingProfile_photo"
            src={profileImage}
            onClick={() => {
              profileImgFileInput.current.click();
            }}
          ></img>
          <div>{selected.place_name}</div>
          <div>{selected.address_name}</div>
          <div>{selected.phone}</div>
          <input
            type="hidden"
            name="placeId"
            value={selected.id} />
          <input
            type="file"
            style={{ display: 'none' }}
            accept="image/jpg,impge/png,image/jpeg"
            name="imgFile"
            onChange={onChange}
            ref={profileImgFileInput}
          />
          <ScoreSelect />
          <button>등록</button> {/* 버튼이 한개면 자동으로 그 버튼에 onsubmit 기능이 생긴다. */}
        </form>
        {/* <button onClick={setToggleTab(1)}/> */}
      </>
    )
  }

  function Contents() {
    if (toggleTab === 1) {
      return plusPinPageOne
    } else if (toggleTab === 2) {
      return (
        <PlusPinPageTwo />
      )
    }
  }

  return (
    <div>
      <img id="plusBtn" src="./img/plusBtn.png" alt="추가" onClick={openModal} />
      <div className={modalOpen ? 'openModal modal' : 'modal'}>
        {modalOpen ? (
          <section>
            <Contents />
          </section>
        ) : null}
      </div>
      {/* <input type="button" value="ㅎㅎ" onChange={PlusPin2.jsx}/> */}
    </div >

  );
}



export default PlusPin;
