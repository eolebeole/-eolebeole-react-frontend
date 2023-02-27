import React, { useEffect, useState } from "react";
import { FiChevronsLeft } from "react-icons/fi"

import { VscSearch } from "react-icons/vsc"
import { IoPersonCircleSharp } from "react-icons/io5"
import axios from 'axios';
import './MatMate.css';
import FriendPlus from './FriendPlus';

function MatMate(props) {

    const [friends, setFriends] = useState([]); // "초코#0001","얼레벌레#0301","달팽이#1041","민초#1664","체리#5310","감자탕#4787","쿠쿠다스#1456"
    const [search, setSearch] = useState("");


    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:4000/users",
        }).then(response => setFriends(response.data));
    }, []);

    const list = friends
        .filter((friend) => friend.nick.includes(search))
        .map((item) => (
            <>
                <div id="MatMate_content">
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

    return (
        <div id="MatMate">
            <div id="MatMate_top">
                <div
                    className="doubleLeft icon"
                    onClick={() => props.setToggleTab(1)}
                >
                    <FiChevronsLeft />
                </div>
                <div id="MatMate_title">맛메이트({friends.length})</div>
            </div>

            <div id="MatMate_body">
                <div id="MatMate_search">
                    <VscSearch />
                </div>
                <input
                    id="MatMate_findInput"
                    type="text"
                    placeholder="친구 검색"
                    // e: 이벤트, target: 해당 태그 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <FriendPlus />
        </div>
    );
}

export default MatMate;