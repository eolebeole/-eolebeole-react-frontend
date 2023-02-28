import { React, useEffect, useState } from 'react';

import { Map } from 'react-kakao-maps-sdk';
import markerPositions from './data';
import { Place } from './Place';
import MarkerAndInfo from './MarkerAndInfo';
import PlusPin from './PlusPin';
import Sidebar from './Sidebar';

import './MyPins.css';

const { kakao } = window;

function MyPins() {


    const [infoWindows, setInfoWindows] = useState([]);
    const [markers, setMarkers] = useState([]);
    const [position, setPosition] = useState([33.450701, 126.570667]);

    function successGetPosition(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        setPosition([lat, lng])
    }

    function failGetPosition() {
        alert("위치정보 옵션을 확인해주세요.")
    }

    function getPosition() {
        navigator.geolocation.getCurrentPosition(successGetPosition, failGetPosition);
    }

    useEffect(() => {

        markerPositions.forEach((item) => {
            item.place = new Place(item);
        });

        setMarkers(markerPositions.map((item) => <MarkerAndInfo
            myPinImage={false ? "./img/profile.png" : "./img/menuBtn.png"}   /* TODO: DB 이미지 없을 경우 사용할 기본이미지 제작 */
            myPinName={item.name}
            myPinScore={item.myScore}
            lat={item.x}
            lng={item.y}
            place={item.place}
        // lat={item.latlng.getLat()} /* 가게 추가 시 경도, 위도 가져오는 코드로 활용? */
        // lng={item.latlng.getLng()} /* 가게 추가 시 경도, 위도 가져오는 코드로 활용? */
        />));

    }, [position])



    return (
        <div className="kakaoMap">
            <Map style={{ width: '100vw', height: '100vh' }}
                center={{ lat: position[0], lng: position[1] }}
                level={3}
            >
                {markers}
                {infoWindows}
            </Map>
            <Sidebar setPosition={setPosition} nowPosition={getPosition} markerPositions={markerPositions} />
            <button id="nowPosition" onClick={getPosition}>현위치</button>
            <PlusPin />
        </div >
    )
}



export default MyPins;