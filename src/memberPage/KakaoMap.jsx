import { React, useState, useEffect } from 'react';

import Sidebar from './components/Sidebar/Sidebar'
import Modal from './components/Modal/Modal';

import './KakaoMap.css';



const { kakao } = window; // 리액트에서 카카오 지도 API를 사용하기 위한 코드


function KakaoMap() {


    /* 사용자의 현재위치 가져오기 위한 코드   #geolocation */
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



    /* 지도가 페이지 로딩 시 바로 나오고, 위치정보가 바뀌면 실시간 반영 */
    useEffect(() => {
        /* 카카오 지도 코드 */
        const mapContainer = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
        var mapOption = { // 지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(position[0], position[1]), // 지도의 중심 좌표.
            level: 3 // 지도의 레벨 (확대, 축소 정도)
        }

        const map = new kakao.maps.Map(mapContainer, mapOption) // 지도 생성 및 객체 리턴


        /* 마커 표시를 위한 코드 */
        const imageSrc = './marker.png'
        const imageSize = new kakao.maps.Size(60, 70) // 마커 이미지의 크기
        const imageOption = { offset: new kakao.maps.Point(27, 69) } // 마커 이미지의 옵션
        // 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정한다.

        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption) // 마커이미지 생성

        const markerPositions = [
            {
                title: '카카오',
                latlng: new kakao.maps.LatLng(33.450701, 126.570667) // 마커가 표시될 위치
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
            },   // 마케 예시
        ]

        for (var i = 0; i < markerPositions.length; i++) {
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: markerPositions[i].latlng, // 마커를 표시할 위치
                title: markerPositions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage // 마커 이미지 
            })
        }

        marker.setMap(map); // 마커가 지도위에 표시되도록.

    }, [position])



    return (
        <div className="kakaoMap">
            <div id="map" style={{ width: '100vw', height: '100vh' }}></div>
            <Sidebar />
            <button id="nowPosition" onClick={getPosition}>현위치</button>
            <Modal />
        </div>
    )
}



export default KakaoMap;