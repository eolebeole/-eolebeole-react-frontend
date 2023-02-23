import { React, useState } from 'react';

import { BiPlus } from 'react-icons/bi'

import './PlusPin.css';



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
            <div id="MatMate_plus" onClick={openModal}><BiPlus/></div>
            <div className={modalOpen ? 'openModal modal' : 'modal'}>
                {modalOpen ? (
                    <section>
                        <header>
                            <button className="close" onClick={closeModal}>
                                &times;
                            </button>
                            <h1>친구 등록</h1>
                        </header>
                        <div className="MatMate_friend">
                            <input type="text" placeholder="닉네임"/>
                            <div>#</div>
                            <input type="text" placeholder="0000"/>
                        </div>
                        <button>친구 추가</button>
                    </section>
                ) : null}
            </div>
        </div>
    );
}



export default FriendPlus;