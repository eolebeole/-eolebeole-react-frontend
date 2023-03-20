import React, { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiChevronsLeft } from 'react-icons/fi';
import { useQuery } from 'react-query';
import Pagination from "./Pagination";

import api from '../utils/api';
import styles from "./MyRestaurant.module.css";

const fetchData = async ([x, y], query) => {
  let token = sessionStorage.getItem('token');
  let response = await api.get('/restaurants', { headers: { Authorization: `Bearer ${token}` }, params: {} });
  return response.data;
}

function MyRestaurant(props) {

  const position = ([127.48742638905269, 36.64394808472207]);
  const { markerPositions, setPosition } = props;

  const [limit, setLimit] = useState(5); // 한 페이지에 보여줄 데이터의 개수
  const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
  const offset = (page - 1) * limit;

  const [query, setQuery] = useState("");
  const { isLoading, error, data } = useQuery(['myrestaurants', position, query], () => fetchData(query, position));
  const [filtered, setFiltered] = useState([]);

  const places = data?.map((item) => item.place);

  const list = filtered.slice(offset, offset + limit)
    .map((item) => (
      <>
        <div className={styles.MyRestaurant_content} key={item.id} onClick={() => {
          setPosition([item.x, item.y]);
          setTimeout(() => item.place.show(), 300);
          props.setToggleTab(7);
          props.setIndex(item.id);
        }}>
          <div className={styles.MyRestaurant_image}><FaMapMarkerAlt /></div>
          <div className={styles.MyRestaurant_info}>
            <div className={styles.MyRestaurant_name}>{item.place_name}</div>
            <div className={styles.MyRestaurant_address}>{item.address_name}</div>
            <div className={styles.MyRestaurant_roadNumberAddress}>(지번) {item.road_address_name}</div>
          </div>
        </div>
        <hr />
      </>
    ));


  useEffect(() => {
    if (isLoading) return;
    const filtered = places.filter((place) => place.place_name.includes(query));
    setFiltered(filtered);
  }, [data]);



  return (
    <div className={styles.MyRestaurant}>
      <div className={styles.MyRestaurant_top}>
        <div className={styles.doubleLeft} onClick={() => {
          props.setToggleTab(1);
          props.nowPosition();
        }}><FiChevronsLeft /></div>
        <div className={styles.MyRestaurant_title}>나의맛집</div>
        <div className={styles.MyRestaurant_search}><BsSearch /></div>
      </div>
      <div>
        {list}
      </div>
      <Pagination
        total={filtered.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div >
  );
}



export default MyRestaurant;
