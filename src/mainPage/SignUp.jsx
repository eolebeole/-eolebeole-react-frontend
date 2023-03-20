import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsXLg } from 'react-icons/bs'
import './SignUp.css';



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
    // console.log(formData2);
    // for (let key of formData2.keys()) {
    //   console.log(key);
    // }
    // for (let value of formData2.values()) {
    //   console.log(value);
    // }

    axios.post("http://localhost:4000/users", formData2)
      .then(() => alert("회원가입이 완료되었습니다!"))
      .catch((err) => console.log(err));
  }

  // 화면 구성 return
  return <>
    <section className="signupSection">
      <header>
        <img className="signUpLogo" src="./img/logo.png" alt="bemeal지도"></img>
        <div className="signupClose" onClick={(e) => window.location.href = '/'}>
          <BsXLg />
        </div>
      </header>
      <form id="SignUp_form" onSubmit={saveHandler}>
        <div id="SignUp_body">
          <div id="notice">*표시는 필수 입력 항목입니다.</div>
          <div id="SignUp_items">
            <label className="SignUp_item">이메일</label>
            <label className="must">*</label>
            <input className="SignUp_input"
              name="email"
              placeholder="내용을 입력해주세요"
              style={{ width: "400px", height: "50px" }}
            />
          </div>
          <div id="SignUp_items">
            <label className="SignUp_item">비밀번호</label>
            <label className="must">*</label>
            <input className="SignUp_input" name="pwd" type="password" placeholder="내용을 입력해주세요" style={{ width: "400px", height: "50px" }}></input>
          </div>
          <div id="SignUp_items">
            <label className="SignUp_item">비밀번호 확인</label>
            <label className="must">*</label>
            <input className="SignUp_input" name="pwdch" type="password" placeholder="내용을 입력해주세요" style={{ width: "400px", height: "50px" }}></input>          </div>
          <div id="SignUp_items">
            <label className="SignUp_item">닉네임</label>
            <label className="must">*</label>
            <input className="SignUp_input" name="nick" placeholder="닉네임" style={{ width: "150px", height: "50px" }}></input>
            #
            <label className="SignUp_item">코드</label>
            <label className="must">*</label>
            <input className="SignUp_input" name="code" placeholder="코드" style={{ width: "150px", height: "50px" }}></input>
          </div>
          <div id="SignUp_items">
            <label className="SignUp_item">생년월일</label>
            <input type="hidden" name="birth" value={`${year}-${month?.padStart(2, "0")}-${day?.padStart(2, "0")}`} />
            <div id="info_birth">
              <label className="SignUp_item" htmlFor="birth_year">출생년도</label>
              <label className="must">*</label>
              <BirthYearSelect year={year} setYear={setYear} />

              <label className="SignUp_item" htmlFor="birth_month">출생월</label>
              <label className="must">*</label>
              <BirthMonthSelect month={month} setMonth={setMonth} />

              <label className="SignUp_item" htmlFor="birth_day">출생일</label>
              <label className="must">*</label>
              <BirthDaySelect day={day} setDay={setDay} />
            </div>
          </div>
          <label className="SignUp_item">성별</label>
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
        <br />
        <br />
        <div id="SignUp_footer">
          <button type="submit">회 원 가 입</button>
        </div>
      </form>
    </section>
  </>
}


export default SignUp;
