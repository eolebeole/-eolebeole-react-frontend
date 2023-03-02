import React, { useState } from 'react';

import { FaMapMarkerAlt, FaBell } from 'react-icons/fa';
import { FiChevronsLeft } from 'react-icons/fi'
import { HiUsers } from 'react-icons/hi'
import { BsFillChatLeftTextFill, BsDot } from 'react-icons/bs'
import { IoSettingsSharp } from 'react-icons/io5'

import Notice from './Notice'
import MyRestaurant from './MyRestaurant'
import MatMate from './MatMate'
import GuestBook from './GuestBook'
import Setting from './Setting'
import RestaurantInfo from './RestaurantInfo';

import styles from './Sidebar.module.css';



function Sidebar(props) {

  const [toggleTab, setToggleTab] = useState(0);

  const [index, setIndex] = useState(0);



  function Contents() {
    if (toggleTab === 1) {
      return (
        <div>
          <div className={styles.header}>
            <div className={styles.doubleLeft} onClick={() => setToggleTab(0)}>
              <div className={styles.icon}><FiChevronsLeft /></div>
            </div>
            <div className={styles.bell} onClick={() => setToggleTab(2)}>
              <div className={styles.icon}><FaBell /></div>
              <div className={styles.activeIcon}><BsDot /></div>
            </div>
          </div>
          <div className={styles.profile}> {/* TODO: 프로필사진, 닉네임 DB에서 불러오기 */}
            <img className={styles.profileImage} src="./img/profile.png" alt="프로필사진" /> {/* TODO: png파일 교체 */}
            <h3 className={styles.nickname}>얼레벌레 #3712</h3>
          </div>
          <div className={styles.tabs}>
            <div className={styles.MyRestaurant} onClick={() => setToggleTab(3)}>
              <div className={styles.icon}><FaMapMarkerAlt /></div>
              <div className={styles.link_text}>나의맛집</div>
            </div>
            <div className={styles.MatMate} onClick={() => setToggleTab(4)}>
              <div className={styles.icon}><HiUsers /></div>
              <div className={styles.link_text}>맛메이트</div>
            </div>
            <div className={styles.GuestBook} onClick={() => setToggleTab(5)}>
              <div className={styles.icon}><BsFillChatLeftTextFill /></div>
              <div className={styles.link_text}>방명록</div>
            </div>
          </div>
          <div className={styles.setting} onClick={() => setToggleTab(6)}>
            <div className={styles.icon}><IoSettingsSharp /></div>
          </div>
        </div >
      );
    } else if (toggleTab === 2) {
      return (
        <Notice setToggleTab={setToggleTab} />
      )

    } else if (toggleTab === 3) {
      return (
        <MyRestaurant setToggleTab={setToggleTab} setPosition={props.setPosition} nowPosition={props.nowPosition} markerPositions={props.markerPositions} setIndex={setIndex} />
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

    } else if (toggleTab === 7) {
      return (
        <RestaurantInfo setToggleTab={setToggleTab} markerPositions={props.markerPositions} index={index} />
      )

    } else return <></>
  }



  return (
    <div className={styles.SidebarContainer}>
      <img className={styles.menuBtn} src="./img/menuBtn.png" alt="메뉴" onClick={() => setToggleTab(1)} />
      <div className={styles.sidebar} style={{ width: toggleTab ? "500px" : "0px " }}>
        <Contents />
      </div>

    </div>
  );
};



export default Sidebar;
