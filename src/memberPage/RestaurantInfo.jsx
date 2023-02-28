import { React } from 'react';

import { FiChevronsLeft } from 'react-icons/fi'

import "./RestaurantInfo.css"



function RestaurantInfo(props) {

    const { markerPositions } = props;
    const num = props.index - 1;
    const listTest = markerPositions[`${num}`];


    return (
        <>
            <div className="restaurant_Info" >
                <div className="restaurantInfo_top" onClick={() => {
                    props.setToggleTab(3)
                }}>
                    <div className="icon"><FiChevronsLeft /></div>
                </div>
                <div>
                    <img className="restaurantInfo_image" src={listTest.photo} alt="이미지 필요"></img>
                    <div className="restaurantInfo_name">{listTest.name}</div>
                    <div className="restaurantInfo_address">{listTest.address}</div>
                    <div className="restaurantInfo_phone">{listTest.phone}</div>
                    <div className="restaurantInfo_averageScore">
                        <div className="restaurantInfo_averageScore_text">이 가게의 평균 맛 점수</div>
                        <div className="restaurantInfo_averageScore_num">⭐{listTest.averageScore}</div>
                    </div>
                    <div className="restaurantInfo_myScore">
                        <div className="restaurantInfo_myScore_text">나의 맛 점수</div>
                        <div className="restaurantInfo_myScore_num">⭐{listTest.myScore}</div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default RestaurantInfo;