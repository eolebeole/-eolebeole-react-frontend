import React, { useState } from 'react';

import { FaTh, FaUserAlt, FaCommentAlt, FaBars } from 'react-icons/fa';

import MyRestaurant from './MyRestaurant'
import MatMate from './MatMate'
import GuestBook from './GuestBook'

import './Sidebar.css';



function Sidebar() {
    const [toggleTab, setToggleTab] = useState(0);
    function Contents() {
        if (toggleTab === 1) {
            return (
                <div>
                    <button>알림</button>
                    <div className="bars">
                        <FaBars onClick={() => setToggleTab(0)} />
                    </div>
                    <div className="profile">
                        <img id="profileImage" src="./img/profile.png" alt="프로필사진" />
                        <h3>얼레벌레</h3>
                    </div>
                    <div className="tabs">
                        <div className="MyRestaurant">
                            <div className="icon"><FaTh onClick={() => setToggleTab(2)} /></div>
                            <div className="link_text">나의맛집</div>
                        </div>
                        <div className="MatMate">
                            <div className="icon"><FaUserAlt onClick={() => setToggleTab(3)} /></div>
                            <div className="link_text">맛메이트</div>
                        </div>
                        <div className="GuestBook">
                            <div className="icon"><FaCommentAlt onClick={() => setToggleTab(4)} /></div>
                            <div className="link_text">방명록</div>
                        </div>
                    </div>
                    <button>설정</button>
                </div >
            );
        } else if (toggleTab === 2) {
            return (
                <MyRestaurant setToggleTab={setToggleTab} />
            )
        } else if (toggleTab === 3) {
            return (
                <MatMate toggleTab={toggleTab} setToggleTab={setToggleTab} />
            )
        } else if (toggleTab === 4) {
            return (
                <GuestBook {...{ toggleTab, setToggleTab }} />
            )
        } else return <></>
    }



    return (
        <div className="SidebarContainer">
            <img id="menuBtn" src="./img/menuBtn.png" alt="메뉴" onClick={() => setToggleTab(1)} />
            <div className="sidebar" style={{ width: toggleTab ? "500px" : "0px " }}>
                <Contents />
            </div>
        </div>
    );
};



export default Sidebar;