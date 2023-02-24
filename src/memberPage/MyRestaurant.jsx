// /* MatMate -> MyRestaurant로 수정 */

// import React, { useState } from "react";
// import { FiChevronsLeft } from 'react-icons/fi'
// import { FaMapMarkerAlt } from 'react-icons/fa'
// import { BsSearch } from 'react-icons/bs'

// /* test */
// import { MapInfoWindow } from 'react-kakao-maps-sdk';
// import styles from './MarkerAndInfo.module.css';

// import "./MatMate.css";

// function MyRestaurant(props) {

//     const [restaurants, setRestaurants] = useState([
//         { name: "어린이집", address: "주소 123" },
//         { name: "맛집 2", address: "주소 123" },
//         { name: "맛집 3", address: "주소 123" },
//         { name: "맛집 4", address: "주소 123" },
//         { name: "맛집 5", address: "주소 123" },
//     ]);



//     /* test 시작 */

//     const [infoVisible, setInfoVisible] = useState(false);

//     const info = <div className={styles.myPinContent}>
//         <img className={styles.myPinImage} src={props.myPinImage}></img>
//         <div className={styles.myPinInfo}>
//             <div className={styles.myPinName}>{props.myPinName}</div>
//             <div className={styles.myPinScore}>⭐{props.myPinScore}</div>
//         </div>
//         <button className={styles.infoClose} onClick={() => setInfoVisible(false)}>X</button>
//     </div>

//     function logg() {
//         var a = "hello"
//         var message = `${a}`;
//         alert(`${message}`)
//     }



//     var listsss = [];

//     for (var i = 0; i < restaurants.length; i++) {

//     }

//     {
//         infoVisible && <MapInfoWindow ref={(el) => el && (el.a.className = styles.infoWindow)}
//             position={{ lat: 33.450701, lng: 126.570667 }}>
//             {info}</MapInfoWindow>
//     }


//     /* test 끝 */



//     const list = restaurants.map((item) => <>
//         <div id="MatMate_content" onClick={logg}>
//             <div id="MatMate_person"><FaMapMarkerAlt /></div>
//             <div id="MatMate_name">{item.name}</div>
//             <div id="MatMate_name">{item.address}</div>
//         </div>
//         <hr />
//     </>)



//     return (
//         <div id="MatMate">
//             <div id="MatMate_top">
//                 <div className="doubleLeft icon" onClick={() => props.setToggleTab(1)}><FiChevronsLeft /></div>
//                 <div id="MatMate_title">나의맛집</div>
//                 <div id="MatMate_plus"><BsSearch /></div>
//             </div>
//             <div>
//                 {list}
//             </div>
//         </div >
//     );
// }

// export default MyRestaurant;