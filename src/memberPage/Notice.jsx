import { React } from 'react';

import { FiChevronsLeft } from 'react-icons/fi'



function Notice(props) {

    return (
        <div>
            <div className="bars" onClick={() => props.setToggleTab(1)}>
                <div className="icon"><FiChevronsLeft /></div>
            </div>
            <h3>Notice page</h3>
        </div>
    );
};

export default Notice;