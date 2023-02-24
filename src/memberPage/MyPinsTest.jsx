import { React, useState, useEffect } from 'react';

import Sidebar from './Sidebar'
import PlusPin from './PlusPin';
import Test from './MarkerAndInfo';

import './MyPins.css';



const { kakao } = window; // 리액트에서 카카오 지도 API를 사용하기 위한 코드


function MyPins() {


    /* 사용자의 현재위치 가져오기 위한 코드   # geolocation */
    var [position, setPosition] = useState([33.450701, 126.570667]);

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


    useEffect(() => {  // 지도가 페이지 로딩 시 바로 나오고, 위치정보가 바뀌면 실시간 반영하도록 useEffect 사용


        /* 카카오 지도 코드 */
        const mapContainer = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
        var mapOption = {
            center: new kakao.maps.LatLng(position[0], position[1]), // 지도의 중심 좌표.
            level: 3 // 지도의 레벨 (확대, 축소 정도)
        }

        const map = new kakao.maps.Map(mapContainer, mapOption) // 지도 생성 및 객체 리턴


        /* TODO: 마커의 옵션 세영이한테 물어보고 반영하기 */
        /* 마커 표시를 위한 코드 (마커의 이미지, 크기, 실제 좌표와 마커 좌표가 일치하도록 설정) */
        const imageSrc = './img/marker.png'
        const imageSize = new kakao.maps.Size(25, 35) // TODO: 마커 이미지의 크기
        const imageOption = { offset: new kakao.maps.Point(30, 50) } // TODO: 마커 이미지의 옵션

        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption) // 마커이미지 생성

        const testDB = [{
            name: "카카오", image: "./img/marker.png", score: "⭐3.8"
        }];

        const markerPositions = [   // TODO: DB에 있는 데이터 가져오도록 수정
            {
                title: '카카오',
                // content: `${<Test />}`,
                content: `${<Test myPinImage={"./img/marker.png"} myPinName={"카카오"} myPinScore={"⭐3.8"} />}`,
                // content: `<div className="myPinContent" style = "width:300px; height:100px" ><img className="myPinImage" src="./img/marker.png" style="width:50px; height:50px;"></img><div className="myPinInfo"><div className="myPinName">카카오</div><div className="myPinScore">⭐3.8</div></div></ > `,
                // content: `<div className="myPinContent" style = "width:300px; height:100px" ><img className="myPinImage" src=${testDB[0].image} style="width:50px; height:50px;"></img><div className="myPinInfo"><div className="myPinName">${testDB[0].name}</div><div className="myPinScore">${testDB[0].score}</div></div></ > `,
                latlng: new kakao.maps.LatLng(33.450701, 126.570667)
            },
            {
                title: '테니스장',
                content: '<div style="padding:50px;">테니스장</div>',
                latlng: new kakao.maps.LatLng(33.44976851084881, 126.56962253912842)
            },
            {
                title: '제주 테크노 파크',
                content: '<div style="padding:50px;">제주 테크노 파크</div>',
                latlng: new kakao.maps.LatLng(33.45085994047179, 126.57237054561263)
            },
            {
                title: '어린이집',
                content: '<div style="padding:50px;">어린이집</div>',
                latlng: new kakao.maps.LatLng(33.45235602540716, 126.56959900238589)
            },
        ]

        for (let item of markerPositions) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: item.latlng,
                title: item.title,
                image: markerImage,
                clickable: true
            })

            let infowindow = new kakao.maps.InfoWindow({
                content: item.content,
                removable: true
            })

            kakao.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        }
    }, [position])



    return (
        <div className="kakaoMap">
            <div id="map" style={{ width: '100vw', height: '100vh' }}></div>
            <Sidebar />
            <button id="nowPosition" onClick={getPosition}>현위치</button>
            <PlusPin />
        </div>
    )
}



export default MyPins;