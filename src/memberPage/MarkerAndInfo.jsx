import { observer } from "mobx-react-lite";
import { React } from 'react';
import { MapInfoWindow, MapMarker } from 'react-kakao-maps-sdk';

import styles from './MarkerAndInfo.module.css';

const MarkerAndInfo = observer((props) => {
    const { lat, lng, place } = props;

    const info = <div className={styles.myPinContent}>
        <img className={styles.myPinImage} src={props.myPinImage} alt="나의맛집 사진"></img>
        <div className={styles.myPinInfo}>
            <div className={styles.myPinName}>{props.myPinName}</div>
            <div className={styles.myPinScore}>⭐{props.myPinScore}</div>
            <div>{props.orderNumber}</div>
        </div>
        <button className={styles.infoClose} onClick={() => {
            place.hide();
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
                onClick={() => place.show()}
            >

            </MapMarker >
            {
                place.dbInfoVisible && <MapInfoWindow ref={(el) => el && (el.a.className = styles.infoWindow)}
                    position={{ lat: lat + 0.0004, lng: lng + 0.00008 }}>
                    {info}</MapInfoWindow>
            }
        </>
    )
});

export default MarkerAndInfo;