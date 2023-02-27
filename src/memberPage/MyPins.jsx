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
                id: 1,
                photo: "가게 이미지1",
                name: "테니스장",
                address: "가게 주소1",
                phone: "가게 번호1",
                averageScore: 4.5,
                myScore: 3.8,
                x: 33.44976851084881,
                y: 126.56962253912842,
                dbInfoVisible: true,
                /* TODO :
                프론트에서 버튼을 누르면 백엔드에서 데이터를 false -> true로 바꾸도록 설정해야한다. (TodoList처럼 앞에 ! 써서 클릭 시 바꾸도록)
                그러면 리스트 클릭 시 인포윈도우가 나오게 할 수 있다. 
                */
            },
            {
                id: 2,
                photo: "가게 이미지2",
                name: "테크노 파크",
                address: "가게 주소2",
                phone: "가게 번호2",
                averageScore: 5.5,
                myScore: 2.8,
                x: 33.45085994047179,
                y: 126.57237054561263,
                dbInfoVisible: false,
            },
            {
                id: 3,
                photo: "가게 이미지2",
                name: "어린이집",
                address: "가게 주소2",
                phone: "가게 번호2",
                averageScore: 3.5,
                myScore: 1.8,
                x: 33.45235602540716,
                y: 126.56959900238589,
                dbInfoVisible: false,
            },
        ]

        setMarkers(markerPositions.map((item) => <MarkerAndInfo
            myPinImage={false ? "./img/profile.png" : "./img/menuBtn.png"}   /* TODO: DB 이미지 없을 경우 사용할 기본이미지 제작 */
            myPinName={item.name}
            myPinScore={item.myScore}
            lat={item.x}
            lng={item.y}
            dbInfoVisible={item.dbInfoVisible}
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
            <Sidebar />
            <button id="nowPosition" onClick={getPosition}>현위치</button>
            <PlusPin />
        </div >
    )
}



export default MyPins;