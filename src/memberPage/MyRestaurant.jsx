/* MatMate -> MyRestaurant로 수정 */

import React, { useState } from "react";
import { FiChevronsLeft } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'


import "./MatMate.css";

function MyRestaurant(props) {

    const [restaurants, setRestaurants] = useState([
        { name: "맛집 1", address: "주소 123" },
        { name: "맛집 2", address: "주소 123" },
        { name: "맛집 3", address: "주소 123" },
        { name: "맛집 4", address: "주소 123" },
        { name: "맛집 5", address: "주소 123" },
    ]);

    const list = restaurants.map((item) => <>
        <div id="MatMate_content">
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
        </div>
    );
}

export default MyRestaurant;