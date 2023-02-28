

import React from "react";
import { FiChevronsLeft } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'


import "./MyRestaurant.css";

function MyRestaurant(props) {




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


    const { markerPositions, setPosition } = props;
    const list = markerPositions.map((item) =>
        <>
            <div id="MyRestaurant_content" onClick={() => {
                setPosition([item.x, item.y]);
                item.place.show();
                // 테스트 해봤는데 값이 "true"로 바뀌긴 하지만 useState가 없어서인지 화면에 바로 반영되지는 않는다.
                // dbInfoVisible 값을 true로 바꾸면 지도에서 해당 인포윈도우가 떠야되는데, 그게 반영되기 위해서는 MyPins - useEffect의 두번째 인자에 markerPositions도 넣어야 될듯 하다.
            }}>
                <div id="MyRestaurant_image"><FaMapMarkerAlt /></div>
                <div id="MyRestaurant_info">{item.name}</div>
                <div id="MyRestaurant_info">{item.address}</div>
                <div id="MyRestaurant_info">{item.place.dbInfoVisible}</div>
            </div>
            <hr />
        </>)



    return (
        <div id="MyRestaurant">
            <div id="MyRestaurant_top">
                <div className="doubleLeft icon" onClick={() => {
                    props.setToggleTab(1);
                    props.nowPosition();
                }}><FiChevronsLeft /></div>
                <div id="MyRestaurant_title">나의맛집</div>
                <div id="MyRestaurant_search"><BsSearch /></div>
            </div>
            <div>
                {list}
            </div>
        </div >
    );
}

export default MyRestaurant;