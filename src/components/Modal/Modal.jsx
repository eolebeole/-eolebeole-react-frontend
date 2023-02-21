import React from 'react';
import './Modal.css';

const Modal = (props) => {
    const { open, close } = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        <button className="close" onClick={close}>
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
    );
}

export default Modal;