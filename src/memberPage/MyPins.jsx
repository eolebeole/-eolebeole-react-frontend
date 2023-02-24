import { React, useState, useEffect } from 'react';

import Sidebar from './Sidebar'
import PlusPin from './PlusPin';
import MarkerAndInfo from './MarkerAndInfo';

import './MyPins.css';


import { Map } from 'react-kakao-maps-sdk';



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

        /* TODO: DB에 있는 데이터 가져오도록 수정 */
        // const testDB = [{
        //     name: "카카오", image: "./img/marker.png", score: "⭐3.8"
        // }];

        const markerPositions = [
            {
                title: '카카오',
                latlng: new kakao.maps.LatLng(33.450701, 126.570667)
            },
            {
                title: '테니스장',
                latlng: new kakao.maps.LatLng(33.44976851084881, 126.56962253912842)
            },
            {
                title: '제주 테크노 파크',
                latlng: new kakao.maps.LatLng(33.45085994047179, 126.57237054561263)
            },
            {
                title: '어린이집',
                latlng: new kakao.maps.LatLng(33.45235602540716, 126.56959900238589)
            },
        ]

        setMarkers(markerPositions.map((item) => <MarkerAndInfo
            myPinImage={"./img/marker.png"}
            myPinName={item.title}
            myPinScore={"⭐3.8"}
            lat={item.latlng.getLat()}
            lng={item.latlng.getLng()}
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
            <Sidebar />
            <button id="nowPosition" onClick={getPosition}>현위치</button>
            <PlusPin />
        </div >
    )
}



export default MyPins;