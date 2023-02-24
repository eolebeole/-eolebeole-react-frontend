/* MatMate -> MyRestaurant로 수정 */

import React, { useState } from "react";
import { FiChevronsLeft } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'


import "./MatMate.css";

function MyRestaurant(props) {

    const [restaurants, setRestaurants] = useState([
        { name: "어린이집", address: "주소 123" },
        { name: "맛집 2", address: "주소 123" },
        { name: "맛집 3", address: "주소 123" },
        { name: "맛집 4", address: "주소 123" },
        { name: "맛집 5", address: "주소 123" },
    ]);



    /* 
    TODO: 마커 클릭 시 식당표시창도 뜨게 하기 
    
    식당표시창은 마커를 클릭해도 나와야 하고, 리스트를 클릭해도 나와야 한다.

    어떻게 공유해야되나.. 둘다 클릭하면 RestaurantInfoOpen = true
    RestaurantInfo 컴포넌트를 만들고, 각각에서 임포트한 뒤 RestaurantInfoOpen 상태를 어떻게 공유하지?
    공유할 필요가 없나?

    마커를 클릭한다 -> 식당표시창, 인포윈도우가 나온다.
    리스트를 클릭한다 -> 식당표시창, 윈포윈도우2(X표없는)가 나온다. 해당 식당 좌표로 변경
    식당표시창 뒤로가기 : infoWindowVisible = false, RestaurantInfoOpen = false, 현위치 좌표
    마커 끄기 : infoWindowVisible = false,

    RestaurantInfo 컴포넌트를 만들고,
    MyPins에 임포트한 뒤
    RestaurantInfoOpen이 true면 나오게 한다.
    근데 창이 나오는 건 창이 나오는 것이고, 해당 창에 입력되는 정보가 다 다르다..

    */



    /* 
    TODO: 리스트 마우스오버 시 조그만 창 뜨게 하기 
    그러려면 리스트에 마우스 좌표 정보가 떠야될 것 같다. (카카오 여러개 마커에 이벤트 등록하기 활용?)
    */



    /* TODO: 리스트 클릭 시 인포윈도우 뜨게 하기, 좌표 변경 */



    /* TODO: 리스트 클릭 시 식당표시창 뜨게 하기 */



    /* TODO: 식당표시창에서 << 누르면 인포윈도우 끄기, 식당표시창 사라지기, 좌표 현위치로 변경 */










    const list = restaurants.map((item) => <>
        <div id="MatMate_content" onClick={<></>}>
            <div id="MatMate_person"><FaMapMarkerAlt /></div>
            <div id="MatMate_name">{item.name}</div>
            <div id="MatMate_name">{item.address}</div>
        </div>
        <hr />
    </>)



    return (
        <div id="MatMate">
            <div id="MatMate_top">
                <div className="doubleLeft icon" onClick={() => props.setToggleTab(1)}><FiChevronsLeft /></div>
                <div id="MatMate_title">나의맛집</div>
                <div id="MatMate_plus"><BsSearch /></div>
            </div>
            <div>
                {list}
            </div>
        </div >
    );
}

export default MyRestaurant;