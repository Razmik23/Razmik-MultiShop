import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAMES } from "../../../routers";


const ProductsBox = (props) =>{
    const navigate = useNavigate()
    const  handleClick = ()=>{
        navigate(ROUTER_NAMES.SHOP_DETAIL)
    } 
    return<div onClick={handleClick} className="P-product">
        <div className="overflow">
            <div className="P-product-image" style ={{backgroundImage:`url('${props.data.image}')`}} >
            
            </div>
        </div>
        <div className="P-product-content">
            <h3>{props.data.title}</h3>
            <p>{props.data.price}</p>
        </div>


    </div>
}
export default ProductsBox