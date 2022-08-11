import React from 'react'
import IconComponent from '../../components/icon-component'
import ImageComponent from '../../components/image-component'
import WomenFashion from '../../images/carousel-2.jpg'
import Offer1 from '../../images/offer-1.jpg'
import Offer2 from '../../images/offer-2.jpg'
import CategoriesMain from '../../components/categories/categories-main'
import ProductsMain from '../../components/products/products-main'

const HomePage = () =>{
   
    return <div >
        <div className='Pictures'>
            <div className='women-fashion' style = {{backgroundImage:`url('${WomenFashion}')`}}>
                <div className='P-text-women'>
                    <h1>Women Fashion</h1>
                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                    <button>Shop Now</button>
                </div>
            </div>
            <div>
                <ImageComponent image = {Offer1} width ={444} height ={200}/>
                <ImageComponent image = {Offer2} width ={444} height ={200}/>
            </div>

        </div>
        <IconComponent/>
        <div className='P-home'>
            <div>
                <h2> Categories</h2>
                <CategoriesMain  />
            </div>
        </div>
        <div className='featured'>
            <h2>FEATURED PRODUCTS</h2>
            <ProductsMain/>
        </div>

        <div className='P-images'>
            <ImageComponent image ={Offer1} width = {680} height = {300}/>
            <ImageComponent image = {Offer2} width = {680} height ={300}/>
        </div>

    </div>
}
export default HomePage