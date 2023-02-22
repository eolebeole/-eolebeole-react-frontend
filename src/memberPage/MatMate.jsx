import { React, useState } from 'react';

import { FaBars } from 'react-icons/fa';

function MatMate() {

    const [toggleTab, setToggleTab] = useState(3);

    return (
        <div>
            <div className="bars">
                <FaBars onClick={() => setToggleTab(0)} />
            </div>
            <h3>MatMate page</h3>
        </div>
    );
};

export default MatMate;