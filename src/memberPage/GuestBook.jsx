import { React } from 'react';

import { FaBars } from 'react-icons/fa';



function GuestBook(props) {

    return (
        <div>
            <div className="bars">
                <FaBars onClick={() => props.setToggleTab(1)} />
            </div>
            <h3>GuestBook page</h3>
        </div>
    );
};

export default GuestBook;