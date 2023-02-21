import React from 'react';
import './App.css';
import KakaoMap from './KakaoMap';
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyMap from './pages/MyMap';
import MatMate from './pages/MatMate';
import GuestBook from './pages/GuestBook';

import { useState } from 'react';
import Modal from './components/Modal/Modal';


function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log(1);
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
 

  return (
    <div className="App">
      <KakaoMap />
      <div className="Btn" onClick={openModal}>
        <img id="plusBtn" src="./plusBtn.png" alt="추가"/>
      </div>
      <BrowserRouter>    
        <Sidebar>
          <Routes>
            <Route path="/"element={<></>}/>
            <Route path="/mymap"element={<MyMap/>}/>
            <Route path="/matmate"element={<MatMate/>}/>
            <Route path="/guestbook"element={<GuestBook/>}/>
          </Routes>
        </Sidebar>
      </BrowserRouter>
      <Modal open={modalOpen} close={closeModal}></Modal>
    </div>
  );
}

export default App;