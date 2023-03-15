import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { Place } from './Place'; // mobx 모듈

import MarkerAndInfo from './MarkerAndInfo';
import PlusPin from './PlusPin';
import Sidebar from './Sidebar';
import { Error, Loading } from '../components'

import { useQuery } from 'react-query';
import styles from './MyPins.module.css';

const { kakao } = window;

const fetchData = async () => {
  let token = sessionStorage.getItem('token');
  let response = await axios.get('http://localhost:4000/restaurants', { headers: {Authorization: `Bearer ${token}`}, params: {} });
  return response.data;
}

function MyPins() {

  // 기본 위치 저장 STATE
  const [position, setPosition] = useState([127.48742638905269, 36.64394808472207]);
  // 음식점 목록 저장 STATE
  const { isLoading, error, data } = useQuery('restaurants', () => fetchData());
  const places = data?.map((item) => item.place);
  // 기본 위치 표시
  function successGetPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log([lng, lat])
    setPosition([lng, lat])
  }

  function failGetPosition() {
    alert("위치정보 옵션을 확인해주세요.")
  }

  function getPosition() {
    navigator.geolocation.getCurrentPosition(successGetPosition, failGetPosition);
  }


  const [markers, setMarkers] = useState([]);
  const infoWindows = [];   // 인포윈도우 : 마커 클릭 시 뜨는 창

  useEffect(() => {
    if (isLoading) return;
    // item 의 개수만큼 화면에 표시여부를 반복
    places.forEach((item) => {
      item.place = new Place(item);
    });

    setMarkers(places.map((item) => <MarkerAndInfo
      /* TODO: DB에 이미지가 없을 경우 사용할 기본이미지 제작 및 아래에 기입*/
      key={item.id}
      myPinImage={false ? "./img/profile.png" : "./img/menuBtn.png"}
      myPinName={item.place_name}
      myPinScore={item.myScore}
      lng={item.x}
      lat={item.y}
      place={item.place}
    />));
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <>{error}</>
  }

  return (
    <div className={styles.Map}>
      <Map style={{ width: '100vw', height: '100vh' }}
        center={{ lng: position[0], lat: position[1] }}
        level={3}
        // isPanto={true}
        // onCenterChanged={(target: kakao.maps.Map) => void}
        keyboardShortcuts={true}
      >
        {markers}
        {infoWindows}
      </Map>
      <Sidebar setPosition={setPosition} nowPosition={getPosition} markerPositions={places} />
      <button className={styles.nowPosition} onClick={getPosition}>현위치</button>
      <PlusPin />
    </div >
  )
}



export default MyPins;
