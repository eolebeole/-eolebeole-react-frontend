import { React, useState } from 'react';
import { FiChevronsLeft } from 'react-icons/fi';
import { useQuery } from 'react-query';
import api from '../utils/api';
import './GuestBook.css';
import GuestBookCard from './GuestBookCard';

const fetchData = async (userId) => {
  let response = await api.get(`/users/${userId}/guestbooks`);
  return response.data;
}

function GuestBook(props) {
  const { isLoading, error, data: guestbooks } = useQuery('guestbooks', () => fetchData(3));
  const [newContent, setNewContent] = useState('');

  const handleRegister = async () => {
    try {
      const response = await api.post(`/users/${3}/guestbooks`, { content: newContent });
      console.log(response.data); // do something with the response
      setNewContent(''); // clear input field
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="GuestBook">
      <div id="GuestBook_top">
        <div
          className="doubleLeft icon"
          onClick={() => props.setToggleTab(1)}
        >
          <FiChevronsLeft />
        </div>
        <div id="GuestBook_title">방명록</div>
      </div>
      <div id="GuestBook_add">
        <input value={newContent} onChange={(e) => setNewContent(e.target.value)}></input>
        <button onClick={handleRegister}>등록</button>
      </div>
      <div id="GuestBook_body">
        {isLoading ? <>
          <GuestBookCard>방명록 내용</GuestBookCard>
        </> : guestbooks?.map((item) => <GuestBookCard>{item.content}</GuestBookCard>)}
      </div>
    </div>
  );
};

export default GuestBook;
