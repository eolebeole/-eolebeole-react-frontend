import { React, useState } from 'react';

import './Modal.css';



function Modal() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }



    return (
        <div>
            <img id="plusBtn" src="./img/plusBtn.png" alt="추가" onClick={openModal} />
            <div className={modalOpen ? 'openModal modal' : 'modal'}>
                {modalOpen ? (
                    <section>
                        <header>
                            <button className="close" onClick={closeModal}>
                                &times;
                            </button>
                            <h1>맛집등록</h1>
                        </header>
                        <div>맛집 검색 및 선택(가게 주소, 등록 자동등록)</div>
                        <div>파일첨부</div>
                        <div>맛점수</div>
                    </section>
                ) : null}
            </div>
        </div>
    );
}



export default Modal;