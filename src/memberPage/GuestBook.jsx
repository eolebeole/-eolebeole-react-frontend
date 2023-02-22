import { React, useState } from 'react';

import { FaBars } from 'react-icons/fa';

function GuestBook() {

    const [toggleTab, setToggleTab] = useState(4);

    return (
        <div>
            <div className="bars">
                <FaBars onClick={() => setToggleTab(0)} />
            </div>
            <h3>GuestBook page</h3>
        </div>
    );
};

export default GuestBook;