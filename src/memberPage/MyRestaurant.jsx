import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useQuery } from 'react-query';

import Pagination from "./Pagination";

import { FiChevronsLeft } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

import styles from "./MyRestaurant.module.css";



function MyRestaurant(props) {

  const position = ([127.48742638905269, 36.64394808472207]);
  const { markerPositions, setPosition } = props;

  const [limit, setLimit] = useState(5); // 한 페이지에 보여줄 데이터의 개수
  const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
  const offset = (page - 1) * limit;

  const [query, setQuery] = useState("");
  const { isLoading, error, data: restaurants } = useQuery(['restaurants', position, query], () => fetchData(query, position));
  const [filtered, setFiltered] = useState([]);

  const fetchData = async (query, [x, y]) => {
    let response = await axios.get('http://localhost:4000/places', { params: { x, y, query } });
    return response.data;
  }

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
    const filtered = restaurants.filter((place) => place.place_name.includes(query));
    setFiltered(filtered);
  }, [restaurants]);



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
