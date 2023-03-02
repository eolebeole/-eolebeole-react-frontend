import { React, useState } from 'react';

import { VscSearch } from 'react-icons/vsc'
import { BiPlus } from 'react-icons/bi'

import './PlusPin.css';
import './FriendPlus.css';



function FriendPlus() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }



  return (
    <div>
      <div id="MatMate_plus" onClick={openModal}><BiPlus /></div>
      <div className={modalOpen ? 'openModal modal' : 'modal'}>
        {modalOpen ? (
          <section>
            <header>
              <button className="close" onClick={closeModal}>
                &times;
              </button>
              <h1>친구 등록</h1>
            </header>
            <div id="">
              <VscSearch />
            </div>
            <input id="MatMate_friend" type="text" placeholder="닉네임을 입력해주세요." />
            <input id="MatMate_friendBtn" type="button" value="친구 등록" />
          </section>
        ) : null}
      </div>
    </div>
  );
}

export default FriendPlus;
