import React, { useState } from 'react';
import './Sidebar.css';
import {
    FaTh,
    FaUserAlt,
    FaCommentAlt,
    FaBars
} from 'react-icons/fa';
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/mymap ",
            name: "MyMap",
            icon: <FaTh />
        },
        {
            path: "/matmate",
            name: "MatMate",
            icon: <FaUserAlt />
        },
        {
            path: "/guestbook",
            name: "GuestBook",
            icon: <FaCommentAlt />
        },
    ]

    return (
        <div className="SidebarContainer">
            <div className="Btn">
                <img id="menuBtn" src="./menuBtn.png" alt="메뉴" onClick={toggle} />
            </div>
            <div>
                <button>알림</button>
                <button>설정</button>
            </div>
            <div className="sidebar" style={{ width: isOpen ? "300px" : "0px " }}>
                <div className="top_section">
                    <div className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                <div className="profile">
                    <img id="profileImage" src="./profile.png" alt="프로필사진" />
                    <h3>얼레벌레</h3>
                </div>
                <div className="set">
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} className={(navData) => navData.isActive ? `active ${item.name}` : item.name} key={index} id="link">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <main>{children}</main>
            </div>
        </div >
    );
};

export default Sidebar;