import { React, useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';
import { IoKey } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

import './Login.css';



function Login() {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // 로그인 후 로그인 버튼 클릭방지를 위한 useEffect
  // useEffect(() => {
  //   if(msg) {
  //     setTimeout(() => {
  //       setMsg("");
  //       setLoading(false);
  //     }, 1500);
  //   }
  // }, [msg])

  const LoginFunc = (e) => {
    // 페이지 리로드 현상을 막아줌
    e.preventDefault();
    if (!email) {
      return alert("Email을 입력해주세요.");
    }
    else if (!pwd) {
      return alert("Password을 입력해주세요.");
    }
    else {
      let body = {
        email: email,
        pwd: pwd
      };
      api.post("/users", body)
        .then((res) => {
          console.log(res.data);
          if (res.data.code == 200) {
            console.log("로그인");
            navigate("/memberPage");
          }
          if (res.data.code == 400) {
            setMsg("Email, Password가 비어있습니다.");
          }
          if (res.data.code == 401) {
            setMsg("존재하지 않는 Email입니다.");
          }
          if (res.data.code == 402) {
            setMsg("Password가 틀립니다.");
          }
        })
    }
    setLoading(true);

  }

  return (
    <>
      <div className="LoginContainer">
        <img className="loginLogo" src="./img/logo.png" alt="bemeal지도"></img>
        <div className="loginClose" onClick={(e) => window.location.href = '/'}>
          <BsXLg />
        </div>
        <form id="LoginForm" onSubmit={LoginFunc}>
          <div className="login_input_container">
            <div className="loginIdIcon"><HiUser /></div>
            <div className="loginPwdIcon"><IoKey /></div>
            <input className="login_input" type="text" name="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="login_input" type="password" name="pwd" placeholder="비밀번호" value={pwd} onChange={(e) => setPwd(e.target.value)} />
          </div>
          <div className="login_btn_container">
            <input className="login_btn" type="submit" id="btn-login" value="냠! 먹을 준비 완료!" disable={loading} />
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
