import { React, useState, useRef } from 'react';
import './SettingProfile.css';

function SettingProfile() {
  const [profileImage, setProfileImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );
  const profileImgFileInput = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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

  return (
    <div>
      <input
        type="button"
        id="Setting_profile"
        value="프로필 설정"
        onClick={openModal}
      ></input>
      <div id="SettingProfile" onClick={openModal}></div>
      <div className={modalOpen ? 'openModal modal' : 'modal'}>
        {modalOpen ? (
          <section>
            <header>
              <button className="close" onClick={closeModal}>
                &times;
              </button>
              <h2>프로필 설정</h2>
            </header>
            <img
              id="SettingProfile_photo"
              src={profileImage}
              onClick={() => {
                profileImgFileInput.current.click();
              }}
            ></img>
            <div id="SettingProfile_name">
              <input
                id="Setting_nickname"
                type="text"
                placeholder="얼레벌레"
              ></input>
              <div id="sharp">#</div>
              <input id="Setting_code" type="text" placeholder="0001"></input>
            </div>
            <input
              type="file"
              style={{ display: 'none' }}
              accept="image/jpg,impge/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
              ref={profileImgFileInput}
            />
            <input id="SettingProfile_save" type="button" value="저장" />
          </section>
        ) : null}
      </div>
    </div>
  );
}

export default SettingProfile;
