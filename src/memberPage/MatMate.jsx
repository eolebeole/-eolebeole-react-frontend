import React, { useEffect, useState } from "react";
import { FiChevronsLeft } from 'react-icons/fi'
// import { BiPlus } from 'react-icons/bi'
import { VscSearch } from 'react-icons/vsc'
import { IoPersonCircleSharp } from 'react-icons/io5'
import axios from 'axios';

import FriendPlus from "./FriendPlus";


import "./matMate.css";

function MatMate(props) {

  const [friends, setFriends] = useState([]); // "초코#0001","얼레벌레#0301","달팽이#1041","민초#1664","체리#5310","감자탕#4787","쿠쿠다스#1456"
  
  useEffect(() => {
    axios({
        method:'GET',
        url:'http://localhost:4000/users'
    }).then(response => setFriends(response.data))
  })

  const list = friends.map((item) => <>
    <div id="MatMate_content">
    <div id="MatMate_person"><IoPersonCircleSharp/></div>
    {/* <div id="MatMate_name">{item.title}#{item.id}</div> */}
    <div id="MatMate_name">{item.nick}#{item.code}</div>
    </div>
    <hr />
  </>)

  let num = 0;
  
  const number = friends.forEach(() => {
    num += 1;
  })

  return (
    <div id="MatMate">
      <div id="MatMate_top">
        <div className="doubleLeft icon" onClick={() => props.setToggleTab(1)}><FiChevronsLeft/></div>
        <div id="MatMate_title">맛메이트({num})</div>
      </div>
      
      <div id="MatMate_body">
          <div id="MatMate_search"><VscSearch/></div>
          <input id="MatMate_findInput" type="text" placeholder="친구 검색" />
      </div>
      <div>
        {list}
      </div>
      <FriendPlus />
    </div>
  );
}

export default MatMate;