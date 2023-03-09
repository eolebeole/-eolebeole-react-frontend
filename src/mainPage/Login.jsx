import React from 'react';
import { BsXLg } from 'react-icons/bs'
import { HiUser } from 'react-icons/hi'
import { IoKey } from 'react-icons/io5'
import './Login.css';



function Login() {

  return (
    <>
      <div className="LoginContainer">
        <img className="loginLogo" src="./img/logo.png" alt="bemeal지도"></img>
        <div className="loginClose" onClick={(e) => window.location.href = '/'}>
          <BsXLg />
        </div>
        <form>
          <div className="login_input_container">
            <div className="loginIdIcon"><HiUser /></div>
            <div className="loginPwdIcon"><IoKey /></div>
            <input className="login_input" type="text" name="username" placeholder="아이디" />
            <input className="login_input" type="password" name="password" placeholder="비밀번호" />
          </div>
          <div className="login_btn_container">
            <input className="login_btn" type="submit" id="btn-login" value="냠! 먹을 준비 완료!" />
            <input className="login_btn" type="button" value="꼬르륵... 처음이신가요?" onClick={(e) => window.location.href = '/signup'} />
          </div>
          <div className="login_footer">
            <a className="loginFooter_text" href="/">회원정보를 잊으셨나요?</a>
          </div>
        </form>
      </div >
    </>
  )
}


export default Login;
