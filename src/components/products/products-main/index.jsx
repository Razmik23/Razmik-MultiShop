import React from "react";
import Pimage1 from '../../../images/product-1.jpg';
import Pimage2 from '../../../images/product-2.jpg';
import Pimage3 from '../../../images/product-3.jpg';
import Pimage4 from '../../../images/product-4.jpg';
import Pimage5 from '../../../images/product-5.jpg';
import Pimage6 from '../../../images/product-6.jpg';
import Pimage7 from '../../../images/product-7.jpg';
import Pimage8 from '../../../images/product-8.jpg';
import ProductsBox from "../products-box";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAMES } from "../../../routers";


const ProductsMain = ()=>{
        
    const products =[
        {
            image:Pimage1,
            title:'Product Name Goes Here',
            price:'$123',

        },
        {
            image:Pimage2,
            title:'Product Name Goes Here',
            price:'$123',

        },
        {
            image:Pimage3,
            title:'Product Name Goes Here',
            price:'$123',

        },
        {
            image:Pimage4,
            title:'Product Name Goes Here',
            price:'$123',

        },
        {
            image:Pimage5,
            title:'Product Name Goes Here',
            price:'$123',

        },
        {
            image:Pimage6,
            title:'Product Name Goes Here',
            price:'$123',

        },
        {
            image:Pimage7,
            title:'Product Name Goes Here',
            price:'$123',

        },
        {
            image:Pimage8,
            title:'Product Name Goes Here',
            price:'$123',

        },
    ]

    const  navigate = useNavigate()
    const  handleClick = ()=>{
        navigate(ROUTER_NAMES.SHOP_DETAIL)
    } 


    return <div className='full-products'>
    {products.map((item,index)=>{
        return <ProductsBox onClick ={handleClick} data={item} key={index}/>
    })}


    </div>
}

export default ProductsMain