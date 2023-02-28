

import React from "react";
import { FiChevronsLeft } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'


import "./MyRestaurant.css";

function MyRestaurant(props) {


    /* TODO: 리스트 클릭 시 식당정보창 뜨게 하기 */

    /* TODO: 식당표시창에서 << 누르면 식당표시창 사라지기 */



    const { markerPositions, setPosition } = props;
    const list = markerPositions.map((item) =>
        <>
            <div id="MyRestaurant_content" onClick={() => {
                setPosition([item.x, item.y]);
                setTimeout(() => item.place.show(), 300);
                props.setToggleTab(7);
                props.setIndex(item.id);
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