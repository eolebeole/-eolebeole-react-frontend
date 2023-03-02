import React from 'react';
import './MainPage.css';



function Login() {

  return (
    <>
      <div class="login">
        <form>
          <div class="login_input">
            <input type="text" name="username" placeholder="아이디" />
          </div>
          <div class="login_input">
            <input type="password" name="password" placeholder="비밀번호" />
          </div>
          <div class="login_btn">
            <input type="submit" class="btn btn-secondary" id="btn-login" value="로그인" />
            <input type="button" class="btn btn-secondary" value="회원가입" onclick="location.href='singUp.html'" />
          </div>
        </form>
      </div >
    </>
  )
}


export default Login;
