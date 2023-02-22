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
                    <div className="bars">
                        <FaBars onClick={() => setToggleTab(0)} />
                    </div>
                    <button>알림 모달창 아이콘 자리</button>   {/* TODO: 알림 아이콘, 알림 모달창 */}
                    <div className="profile">
                        <img id="profileImage" src="./img/profile.png" alt="프로필사진" />
                        <h3>얼레벌레</h3>
                    </div>
                    <div className="tabs">
                        <div className="MyRestaurant" onClick={() => setToggleTab(2)}>
                            <div className="icon"><FaTh /></div>
                            <div className="link_text">나의맛집</div>
                        </div>
                        <div className="MatMate" onClick={() => setToggleTab(3)}>
                            <div className="icon"><FaUserAlt /></div>
                            <div className="link_text">맛메이트</div>
                        </div>
                        <div className="GuestBook" onClick={() => setToggleTab(4)}>
                            <div className="icon"><FaCommentAlt /></div>
                            <div className="link_text">방명록</div>
                        </div>
                    </div>
                    <button>설정 모달창 아이콘 자리</button>   {/* TODO: 설정 아이콘, 설정 모달창 */}
                </div >
            );

        } else if (toggleTab === 2) {
            return (
                <MyRestaurant setToggleTab={setToggleTab} />
            )

        } else if (toggleTab === 3) {
            return (
                <MatMate setToggleTab={setToggleTab} />
            )

        } else if (toggleTab === 4) {
            return (
                <GuestBook setToggleTab={setToggleTab} />
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