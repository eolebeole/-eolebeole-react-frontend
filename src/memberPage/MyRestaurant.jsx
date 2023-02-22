import { React } from 'react';

import { FiChevronsLeft } from 'react-icons/fi'



function MyRestaurant(props) {

    return (
        <div>
            <div className="bars" onClick={() => props.setToggleTab(1)}>
                <div className="icon"><FiChevronsLeft /></div>
            </div>
            <h3>MyRestaurant page</h3>
        </div>
    );
};

export default MyRestaurant;