import { React } from 'react';

import { FiChevronsLeft } from 'react-icons/fi'

import styles from "./RestaurantInfo.module.css"



function RestaurantInfo(props) {

  const { markerPositions } = props;
  const num = props.index - 1;
  const listTest = markerPositions[`${num}`];


  return (
    <div className={styles.restaurantInfo} >
      <div className={styles.restaurantInfo_top} onClick={() => {
        props.setToggleTab(3)
      }}>
        <div className={styles.icon}><FiChevronsLeft /></div>
        <div className={styles.restaurantInfo_title}>맛집정보</div>
      </div>
      <div className={styles.restaurantInfo_body}>
        <div className={styles.restaurantInfo_body_restaurant}>
          <img className={styles.restaurantInfo_image} src={listTest.photo} alt="이미지 필요"></img>
          <div className={styles.restaurantInfo_name}>{listTest.name}</div>
          <div className={styles.restaurantInfo_address}>{listTest.address}</div>
          <div className={styles.restaurantInfo_phone}>{listTest.phone}</div>
        </div>
        <div className={styles.restaurantInfo_body_score}>
          <div className={styles.restaurantInfo_averageScore}>
            <div className={styles.restaurantInfo_Score_text}>이 가게의 평균 맛 점수</div>
            <div className={styles.restaurantInfo_Score_num}>⭐{listTest.averageScore}</div>
          </div>
          <div className={styles.restaurantInfo_myScore}>
            <div className={styles.restaurantInfo_Score_text}>나의 맛 점수</div>
            <div className={styles.restaurantInfo_Score_num}>⭐{listTest.myScore}</div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default RestaurantInfo;
