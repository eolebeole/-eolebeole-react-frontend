import React, { useState } from 'react';

import { FaMapMarkerAlt, FaUserFriends, FaBell } from 'react-icons/fa'; /* JH - # FaAngleDoubleLeft */
import { FiChevronsLeft } from 'react-icons/fi'
import { HiUsers } from 'react-icons/hi' /* JH - HiUser, FaUserFriends 아이콘 둘 다 크기가 작아요 */
import { MdInsertComment } from 'react-icons/md' /* JH - 아래 'Bs~' 아이콘 대신 사용해볼지 테스트해보고 둘 중에 하나 지워주세요 */
import { BsFillChatLeftTextFill, BsDot } from 'react-icons/bs'
import { IoSettingsSharp } from 'react-icons/io5'

import Notice from './Notice'
import MyRestaurant from './MyRestaurant'
import MatMate from './MatMate'
import GuestBook from './GuestBook'
import Setting from './Setting'

import './Sidebar.css';



function Sidebar() {

    const [toggleTab, setToggleTab] = useState(0);

    function Contents() {
        if (toggleTab === 1) {
            return (
                <div>
                    <div className="header">
                        <div className="doubleLeft" onClick={() => setToggleTab(0)}>
                            <div className="icon"><FiChevronsLeft /></div>
                        </div>
                        <div className="bell" onClick={() => setToggleTab(2)}>
                            <div className="icon"><FaBell /></div>
                            <div className="activeIcon"><BsDot /></div>
                        </div>
                    </div>
                    <div className="profile"> {/* TODO: 프로필사진, 닉네임 DB에서 불러오기 */}
                        <img id="profileImage" src="./img/profile.png" alt="프로필사진" /> {/* TODO: png파일 교체 */}
                        <h3 id="nickname">얼레벌레 #3712</h3>
                    </div>
                    <div className="tabs">
                        <div className="MyRestaurant" onClick={() => setToggleTab(3)}>
                            <div className="icon"><FaMapMarkerAlt /></div>
                            <div className="link_text">나의맛집</div>
                        </div>
                        <div className="MatMate" onClick={() => setToggleTab(4)}>
                            <div className="icon"><HiUsers /></div>
                            <div className="link_text">맛메이트</div>
                        </div>
                        <div className="GuestBook" onClick={() => setToggleTab(5)}>
                            <div className="icon"><BsFillChatLeftTextFill /></div>
                            <div className="link_text">방명록</div>
                        </div>
                    </div>
                    <div className="setting" onClick={() => setToggleTab(6)}>
                        <div className="icon"><IoSettingsSharp /></div>
                    </div>
                </div >
            );
        } else if (toggleTab === 2) {
            return (
                <Notice setToggleTab={setToggleTab} />
            )

        } else if (toggleTab === 3) {
            return (
                <MyRestaurant setToggleTab={setToggleTab} />
            )

        } else if (toggleTab === 4) {
            return (
                <MatMate setToggleTab={setToggleTab} />
            )

        } else if (toggleTab === 5) {
            return (
                <GuestBook setToggleTab={setToggleTab} />
            )

        } else if (toggleTab === 6) {
            return (
                <Setting setToggleTab={setToggleTab} />
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