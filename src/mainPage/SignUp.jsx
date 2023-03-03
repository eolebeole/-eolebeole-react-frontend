import React, { useState } from 'react';
import { BsXLg } from 'react-icons/bs'
import './SignUp.css';



function SignUp() {

  function Radio(props) {
    return <input name="gender" type="radio" {...props} />;
  }

  function BirthYearSelect() {
    const [years, setYears] = useState([]);

    function handleFocus(e) {
      if (!years.length) {
        const years = Array.from({ length: 84 }, (_, i) => 1940 + i);
        const yearOptions = years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ));
        setYears(yearOptions);
      }
    }

    return (
      <select name="birth_year" onFocus={handleFocus}>
        <option disabled selected>
          출생년도
        </option>
        {years}
      </select>
    );
  }


  const [gender, setGender] = useState('');

  const handleChange = (e) => {
    setGender({
      selectValue: e.target.value,
    });
  };


  return <>
    <section className="signupSection">
      <header>
        <img className="signUpLogo" src="./img/logo.png" alt="bemeal지도"></img>
        <div className="signupClose" onClick={(e) => window.location.href = '/'}>
          <BsXLg />
        </div>
      </header>

      <div id="SignUp_body">
        <div id="notice">*표시는 필수 입력 항목입니다.</div>
        <div id="SignUp_items">
          <label className="SignUp_item">이메일</label>
          <label className="must">*</label>
          <input name="SignUp_email" placeholder=" 내용을 입력해주세요" style={{ width: "400px", height: "50px" }}></input>
        </div>
        <div id="SignUp_items">
          <label className="SignUp_item">비밀번호</label>
          <label className="must">*</label>
          <input name="SignUp_npassword" type="password" placeholder=" 내용을 입력해주세요" style={{ width: "400px", height: "50px" }}></input>
        </div>
        <div id="SignUp_items">
          <label className="SignUp_item">비밀번호 확인</label>
          <label className="must">*</label>
          <input name="SignUp_passwordch" type="password" placeholder=" 내용을 입력해주세요" style={{ width: "400px", height: "50px" }}></input>
        </div>
        <div id="SignUp_items">
          <label className="SignUp_item">이름</label>
          <input name="SignUp_name" placeholder=" 내용을 입력해주세요" style={{ width: "400px", height: "50px" }}></input>
        </div>
        <div id="SignUp_items">
          <label className="SignUp_item">생년월일</label>
          <div id="info_birth">
            <BirthYearSelect />
            <select name="birth_month">
              <option disabled selected>
                월
              </option>
            </select>
            <select name="birth_day">
              <option disabled selected>
                일
              </option>
            </select>
          </div>
        </div>

        <div id="SignUp_items">
          <label className="SignUp_item">성별</label>
          <div id="info_gender">
            <Radio
              id="female"
              value="female"
              checked={gender.selectValue === 'female'}
              onChange={handleChange}
            />
            여성
            <Radio
              id="male"
              value="male"
              checked={gender.selectValue === 'male'}
              onChange={handleChange}
            />
            남성
            <Radio
              id="gender_not"
              value="not"
              checked={gender.selectValue === 'not'}
              onChange={handleChange}
            />
            무응답
          </div>
        </div>
      </div>
      <div id="SignUp_footer">
        <button>회 원 가 입</button>
      </div>
    </section>
  </>
}


export default SignUp;






