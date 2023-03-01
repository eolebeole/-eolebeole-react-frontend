import { React, useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { Place } from './Place'; // mobx 모듈

import markerPositions from './data'; /* TODO: DB 연동되면 삭제 */
import MarkerAndInfo from './MarkerAndInfo';
import PlusPin from './PlusPin';
import Sidebar from './Sidebar';

import './MyPins.css';



function MyPins() {

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



    const [markers, setMarkers] = useState([]);
    const infoWindows = [];   // 인포윈도우 : 마커 클릭 시 뜨는 창

    useEffect(() => {

        markerPositions.forEach((item) => {
            item.place = new Place(item);
        });

        setMarkers(markerPositions.map((item) => <MarkerAndInfo
            /* TODO: DB에 이미지가 없을 경우 사용할 기본이미지 제작 및 아래에 기입*/
            myPinImage={false ? "./img/profile.png" : "./img/menuBtn.png"}
            myPinName={item.name}
            myPinScore={item.myScore}
            lat={item.x}
            lng={item.y}
            place={item.place}
        />));
        // lat={item.latlng.getLat()} /* 가게 추가 시 경도, 위도 가져오는 코드로 활용? */
        // lng={item.latlng.getLng()} /* 가게 추가 시 경도, 위도 가져오는 코드로 활용? */
    }, [position])



    return (
        <div className="Map">
            <Map style={{ width: '100vw', height: '100vh' }}
                center={{ lat: position[0], lng: position[1] }}
                level={3}
            >
                {markers}
                {infoWindows}
            </Map>
            <Sidebar setPosition={setPosition} nowPosition={getPosition} markerPositions={markerPositions} />
            <button className="nowPosition" onClick={getPosition}>현위치</button>
            <PlusPin />
        </div >
    )
}



export default MyPins;