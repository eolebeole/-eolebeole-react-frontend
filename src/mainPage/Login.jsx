import React from 'react';
import './main.css';



function Login() {

    return (
        <>
            <div class="login">
                <form th:action="@{/auth/loginProc}" th:method="POST">
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


{/* < div class="member_login" >
    <div class="login_input">
      <input type="text" name="username" placeholder="아이디">
    </div>

    <div class="login_input">
      <input type="password" name="password" placeholder="비밀번호">
    </div>

    <div class="login_btn">

      <input type="submit" class="btn btn-secondary" id="btn-login" value="로그인">
    </div>
  </form >
</div > */}



