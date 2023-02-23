import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyPins from './memberPage/MyPins';
import './App.css';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyPins />} />   {/* TODO: element 자리에 '메인 페이지 컴포넌트' */}
          {/* <Route path="/adminpage" element={}/> */}   {/* TODO: element 자리에 '관리자 페이지 컴포넌트'*/}
          <Route path="/memberpage" element={<MyPins />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;