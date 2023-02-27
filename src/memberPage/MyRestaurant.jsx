/* MatMate -> MyRestaurant로 수정 */

import React, { useState } from "react";
import { FiChevronsLeft } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'


import "./MatMate.css";

function MyRestaurant(props) {

    const [restaurants, setRestaurants] = useState([
        { photo: "가게 이미지1", name: "테니스장", address: "가게 주소1", phone: "가게 번호1", averageScore: 4.5, myScore: 3.8, x: 33.44976851084881, y: 126.56962253912842 },
        { photo: "가게 이미지2", name: "테크노 파크", address: "가게 주소2", phone: "가게 번호2", averageScore: 5.5, myScore: 2.8, x: 33.45085994047179, y: 126.57237054561263 },
        { photo: "가게 이미지2", name: "어린이집", address: "가게 주소2", phone: "가게 번호2", averageScore: 3.5, myScore: 1.8, x: 33.45235602540716, y: 126.56959900238589 },
    ]);



    /* 23.02.27 => 인포윈도우를 뜨게 하는 것은 가능할 것 같고, 내일(23.02.28)은 좌표 변경하도록, 식당정보창 뜨도록 구현하자 */


    /* TODO: 리스트 클릭 시 식당정보창 뜨게 하기 */
    /* TODO: 리스트 클릭 시 인포윈도우 뜨게 하기, 좌표 변경 */
    /* TODO: 식당표시창에서 << 누르면 인포윈도우 끄기, 식당표시창 사라지기, 좌표 현위치로 변경 */





    /* 인포윈도우가 뜨는 구조가 뭐지? 마커랑 연결된 것 같은데 */


    /* 
    어떻게 공유해야되나.. 둘다 클릭하면 RestaurantInfoOpen = true
    RestaurantInfo 컴포넌트를 만들고, 각각에서 임포트한 뒤 RestaurantInfoOpen 상태를 어떻게 공유하지?
    공유할 필요가 없나?

    마커를 클릭한다 -> 인포윈도우가 나온다.
    리스트를 클릭한다 -> 식당정보창, 윈포윈도우2(X표없는)가 나온다. 해당 식당 좌표로 변경
    
    식당정보창 뒤로가기 : infoWindowVisible = false, RestaurantInfoOpen = false, 현위치 좌표
    마커 끄기 : infoWindowVisible = false,

    RestaurantInfo 컴포넌트를 만들고,
    MyPins에 임포트한 뒤
    RestaurantInfoOpen이 true면 나오게 한다.
    근데 창이 나오는 건 창이 나오는 것이고, 해당 창에 입력되는 정보가 다 다르다..
    */



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