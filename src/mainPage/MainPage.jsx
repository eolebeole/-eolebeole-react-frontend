import React from 'react';
import Login from './Login'
import './MainPage.css';


function MainPage() {

  return (
    <>
      <div className="main-page">
        <nav className="main-nav">
          <div className="mainTop">
            <img className="main-logo" src="./img/logo.png" alt="bemeal지도"></img>
            <div className="mainTopButton">
              <button className="loginClick" data-toggle="modal" data-target="#loginModal">로그인</button>
              <button className="signupClick" onClick={(e) => window.location.href = '/signup'}>회원가입</button>
            </div>
          </div>
          <ul>
            <li>
              <div className="modal fade" id="loginModal" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <Login />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul >

          <div className="goingTop" onClick={() => { window.scrollTo(0, 0) }}> ↑ </div>

        </nav >
        <section className="main-banner" >
          <header>
            <div className="bannerTop">꼭꼭 숨겨놓았던<br />
              나만의 맛집이 있나요?</div>
            <img className="bannerMarker" src="./img/marker.png" width="35px" alt="마커" />
            <div className="bannerBottom">나만 알고싶었던 맛집<br />
              친한 사람들과만 몰래 나누고 싶었던 맛집<br />
              우리의 bemeal 지도로 완성해보세요.
            </div>
          </header>
          <div className="bannerExample">
            <img className="bannerEx1" src="./img/mainPageEx1.png" alt="예시1" /><br />
            <img className="bannerEx2" src="./img/mainPageEx2.png" alt="예시2" /><br />
          </div>
        </section >
        <div className="main-car1" >
          <p> 설명 </p>
        </div>
        <div className="main-car2" >
          <p> 설명 </p>
        </div >
        <div className="main-car3" >
          <p> 설명 </p>
        </div>
      </div >
    </>
  )

}


export default MainPage;
