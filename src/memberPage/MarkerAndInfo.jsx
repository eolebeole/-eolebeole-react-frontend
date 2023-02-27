import { React, useState } from 'react';
import { MapInfoWindow, MapMarker } from 'react-kakao-maps-sdk';

import styles from './MarkerAndInfo.module.css';

function MarkerAndInfo(props) {
    // const { lat, lng } = props; /* 선생님께 여쭤보자. */
    const lat = props.lat;
    const lng = props.lng;
    const [dbInfoVisible, setDBInfoVisible] = useState(props.dbInfoVisible);
    const [infoVisible, setInfoVisible] = useState(false);

    const info = <div className={styles.myPinContent}>
        <img className={styles.myPinImage} src={props.myPinImage} alt="나의맛집 사진"></img>
        <div className={styles.myPinInfo}>
            <div className={styles.myPinName}>{props.myPinName}</div>
            <div className={styles.myPinScore}>⭐{props.myPinScore}</div>
            <div>{props.orderNumber}</div>
        </div>
        <button className={styles.infoClose} onClick={() => {
            setInfoVisible(false);
            setDBInfoVisible(false);
        }}>X</button>
    </div >

    return (
        <>
            <MapMarker /* TODO: 마커 옵션 세영이한테 물어보고 반영하기 */
                position={{ lat: lat, lng: lng }}
                image={{
                    src: './img/marker.png',
                    size: { width: 25, height: 35 },
                    options: { offset: { x: 1, y: 45 } }
                }}
                onClick={() => setInfoVisible(true)}
            >

            </MapMarker >
            {
                (infoVisible || dbInfoVisible) && <MapInfoWindow ref={(el) => el && (el.a.className = styles.infoWindow)}
                    position={{ lat: lat + 0.0004, lng: lng + 0.00008 }}>
                    {info}</MapInfoWindow>
            }
        </>
    )
};

export default MarkerAndInfo;