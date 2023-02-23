import { React } from 'react';



function Test(props) {

    return (
        // <div className="myPinContent" style="width:300px; height:100px"><img className="myPinImage" src="./img/marker.png" style="width:50px; height:50px;"></img><div className="myPinInfo"><div className="myPinName">카카오</div><div className="myPinScore">⭐3.8</div></div></div>
        <div className="myPinContent" style="width:300px; height:100px">
            <img className="myPinImage" src={props.myPinImage} style="width:50px; height:50px;"></img>
            <div className="myPinInfo">
                <div className="myPinName">{props.myPinName}</div>
                <div className="myPinScore">{props.myPinScore}</div>
            </div>
        </div>
    )
};

export default Test;