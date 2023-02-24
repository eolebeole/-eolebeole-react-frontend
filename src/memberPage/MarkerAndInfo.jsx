import { React, useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

import styles from './MarkerAndInfo.module.css';

function MarkerAndInfo(props) {
    const { lat, lng } = props;
    const [infoVisible, setInfoVisible] = useState(false);

    return (
        <MapMarker /* TODO: 마커 옵션 세영이한테 물어보고 반영하기 */
            position={{ lat, lng }}
            image={{
                src: './img/marker.png',
                size: { width: 25, height: 35 },
                options: { offset: { x: 1, y: 45 } }
            }}
            onClick={() => setInfoVisible(true)}>
            {
                infoVisible && <div className={styles.myPinContent}>
                    <img className={styles.myPinImage} src={props.myPinImage}></img>
                    <div className="myPinInfo">
                        <div className="myPinName">{props.myPinName}</div>
                        <div className="myPinScore">{props.myPinScore}</div>
                    </div>
                    <button onClick={() => setInfoVisible(false)}>X</button>
                </div>
            }
        </MapMarker >
    )
};

export default MarkerAndInfo;