import React, { useEffect, useState } from 'react';
import { BsXLg } from 'react-icons/bs'
import api from '../utils/api';

import './SignUp.scss';



function SignUp() {

  function Radio(props) {
    return <input name="gender" type="radio" {...props} />;
  }

  function BirthYearSelect({ year, setYear }) {
    const [years, setYears] = useState([]);

    useEffect(() => {
      if (!years.length) {
        const years = Array.from({ length: 84 }, (_, i) => 1940 + i);
        const yearOptions = years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ));
        setYears(yearOptions);
      }
    }, [])

    return (
      <select id="birth_year" onChange={(e) => { setYear(e.target.value) }}
        value={year}>
        <option value="" disabled>
          출생년도
        </option>
        {years}
      </select>
    );
  }

  function BirthMonthSelect({ month, setMonth }) {
    const [months, setMonths] = useState([]);

    useEffect(() => {
      if (!months.length) {
        const months = Array.from({ length: 12 }, (_, i) => 1 + i);
        const monthOptions = months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ));
        setMonths(monthOptions);
      }
    }, [])

    return (
      <select id="birth_month" onChange={(e) => { setMonth(e.target.value) }}
        value={month}>
        <option value="" disabled>
          월
        </option>
        {months}
      </select>
    );
  }

  function BirthDaySelect({ day, setDay }) {
    const [days, setDays] = useState([]);

    useEffect(() => {
      if (!days.length) {
        const days = Array.from({ length: 31 }, (_, i) => 1 + i);
        const dayOptions = days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ));
        setDays(dayOptions);
      }
    }, [])

    return (
      <select id="birth_day" onChange={(e) => { setDay(e.target.value) }}
        value={day}>
        <option value="" disabled>
          일
        </option>
        {days}
      </select>
    );
  }


  const [gender, setGender] = useState('');

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleChange = (e) => {
    setGender({
      selectValue: e.target.value,
    });
  };

  const saveHandler = (e) => {
    e.preventDefault();
    // useRef()를 이용한 코드로 수정예정
    const formData2 = new FormData(document.querySelector('#SignUp_form'));

    api.post("/users", formData2)
      .then(() => alert("회원가입이 완료되었습니다!"))
      .catch((err) => console.log(err));
  }

  // 화면 구성 return
  return (
    <form id="SignUp_form" onSubmit={saveHandler} className="signupSection">
      <header>
        <img className="signUpLogo" src="./img/logo.png" alt="bemeal지도"></img>
        <div className="signupClose" onClick={(e) => window.location.href = '/'}>
          <BsXLg />
        </div>
      </header>
      <div id="SignUp_body">
        <div id="notice">*표시는 필수 입력 항목입니다.</div>
        <div className="SignUp_items">
          <label>이메일</label>
          <label class="must">*</label>
          <input name="SignUp_email" placeholder="내용을 입력해주세요"></input>
        </div>
        <div className="SignUp_items">
          <label>비밀번호</label>
          <label class="must">*</label>
          <input name="SignUp_pwd" type="password" placeholder="내용을 입력해주세요"></input>
        </div>
        <div className="SignUp_items">
          <label>비밀번호 확인</label>
          <label class="must">*</label>
          <input name="SignUp_pwdch" type="password" placeholder="내용을 입력해주세요"></input>
        </div>
        <div className="SignUp_items half">
          <label>닉네임</label>
          <label class="must">*</label>
          <input name="SignUp_nick" placeholder="닉네임"></input>
        </div>
        <div className="SignUp_items half">
          <label>코드</label>
          <label class="must">*</label>
          <input name="SignUp_code" placeholder="코드"></input>
        </div>
        <div className="SignUp_items">
          <label>생년월일</label>
          {
            year && month && day &&
            <input type="hidden" name="birth" value={`${year}-${month?.padStart(2, "0")}-${day?.padStart(2, "0")}`} />
          }
          <div id="info_birth">
            <BirthYearSelect year={year} setYear={setYear} />
            <BirthMonthSelect month={month} setMonth={setMonth} />
            <BirthDaySelect day={day} setDay={setDay} />
          </div>
        </div>
        <div className="SignUp_items">
          <label>성별</label>
          <div id="info_gender">
            <Radio
              id="female"
              value="0"
              checked={gender.selectValue === '0'}
              onChange={handleChange}
            />
            여성
            <Radio
              id="male"
              value="1"
              checked={gender.selectValue === '1'}
              onChange={handleChange}
            />
            남성
            <Radio
              id="gender_not"
              value="2"
              checked={gender.selectValue === '2'}
              onChange={handleChange}
            />
            무응답
          </div>
        </div>
      </div>

      <div id="SignUp_footer">
        <button>회원가입</button>
      </div>
    </form>
  )
}


export default SignUp;
