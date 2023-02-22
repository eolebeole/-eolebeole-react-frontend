import React, { useState } from 'react';

import { FaTh, FaUserAlt, FaCommentAlt, FaBars } from 'react-icons/fa';

import MyRestaurant from './tabs/MyRestaurant'
import MatMate from './tabs/MatMate'
import GuestBook from './tabs/GuestBook'

import './Sidebar.css';



function Sidebar() {
    const [toggleTab, setToggleTab] = useState("");
    function Contents() {
        if (toggleTab === 0) {
            return (
                <></>
            );
        } else if (toggleTab === 1) {
            return (
                <MyRestaurant />
            )
        } else if (toggleTab === 2) {
            return (
                <MatMate />
            )
        } else if (toggleTab === 3) {
            return (
                <GuestBook />
            )
        } else return <></>
    }



    return (
        <div className="SidebarContainer">
            <img id="menuBtn" src="./img/menuBtn.png" alt="메뉴" onClick={() => setToggleTab(0)} />
            <div className="sidebar" style={{ width: toggleTab === 0 ? "500px" : "0px " }}>
                <div>
                    <button>알림</button>
                    <button>설정</button>
                </div>
                <div className="top_section">
                    <div className="bars">
                        <FaBars onClick={() => setToggleTab("")} />
                    </div>
                </div>
                <div className="profile">
                    <img id="profileImage" src="./img/profile.png" alt="프로필사진" />
                    <h3>얼레벌레</h3>
                </div>
            </div>
            <div className="content">
                <Contents />
            </div>
        </div>
    );
};



export default Sidebar;