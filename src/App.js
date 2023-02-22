import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import KakaoMap from './memberPage/MyPins';

import './App.css';



function App() {

  return (
    <div className="App">
      <BrowserRouter>    
          <Routes>
            <Route path="/"element={<KakaoMap/>}/> {/* element 자리에 메인페이지 컴포넌트를 넣으면 됩니다. */}
            {/* <Route path="/adminpage"element={<KakaoMap/>}/> */} {/* element 자리에 관리자페이지 컴포넌트를 넣으면 됩니다. */}
            <Route path="/memberpage"element={<KakaoMap/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;