import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MyPins from './memberPage/MyPins';
import MainPage from './mainPage/MainPage';
import SignUp from './mainPage/SignUp';

import './App.css';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          {/* TODO: 아래 element 자리에 '관리자 페이지 컴포넌트'*/}
          <Route path="/adminpage" element={<></>} />
          <Route path="/memberpage" element={<MyPins />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;