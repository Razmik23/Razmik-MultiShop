import React from "react";

const ImageComponent = (props) =>{
   
   
    return  <div className="P-bg-div">
    <div className="P-special" style={{backgroundImage:`url('${props.image}')`,width:`${props.width}px`,height:`${props.height}px`}}>
        <div className="P-content">
            <h1>Special Offer</h1>
            <button>Shop Now</button>
        </div>
    </div>
    </div>

}
export default ImageComponent