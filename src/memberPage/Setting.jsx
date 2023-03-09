import React, { useState } from 'react';
import { FiChevronsLeft } from 'react-icons/fi';
import './Setting.css';
import SettingProfile from './SettingProfile';
import SettingInfo from './SettingInfo';

function Setting(props) {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="Setting">
      <div id="Setting_top">
        <div
          className="doubleLeft icon"
          onClick={() => props.setToggleTab(1)}
        >
          <FiChevronsLeft />
        </div>
        <div id="Setting_title">설정</div>
      </div>
      <div id="space"></div>
      <SettingProfile />
      <SettingInfo />
      <input type="button" id="Setting_logout" value="로그아웃"></input>
    </div>
  );
};

export default Setting;
