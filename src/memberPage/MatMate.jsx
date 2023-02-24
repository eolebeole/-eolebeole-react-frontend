import React, { useState } from "react";
import { FiChevronsLeft } from 'react-icons/fi'
import { BiPlus } from 'react-icons/bi'
import { VscSearch } from 'react-icons/vsc'
import { IoPersonCircleSharp } from 'react-icons/io5'


import "./MatMate.css";

function MatMate(props) {

    const [friends, setFriends] = useState(["초코#0001", "얼레벌레#0301", "달팽이#1041", "민초#1664", "체리#5310", "감자탕#4787", "쿠쿠다스#1456"]);

    const list = friends.map((item) => <>
        <div id="MatMate_content">
            <div id="MatMate_person"><IoPersonCircleSharp /></div>
            <div id="MatMate_name">{item}</div>
        </div>
        <hr />
    </>)



    return (
        <div id="MatMate">
            <div id="MatMate_top">
                <div className="doubleLeft icon" onClick={() => props.setToggleTab(1)}><FiChevronsLeft /></div>
                <div id="MatMate_title">맛메이트((맛메이트수))</div>
                <div id="MatMate_plus"><BiPlus /></div>

            </div>
            <div id="MatMate_body">
                <div id="MatMate_search"><VscSearch /></div>
                <input id="MatMate_findInput" type="text" placeholder="친구 검색" />
            </div>
            <div>
                {list}
            </div>
        </div>
    );
}

export default MatMate;