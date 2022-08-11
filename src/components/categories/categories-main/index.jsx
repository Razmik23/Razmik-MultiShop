import React from 'react'
import Cat1 from '../../../images/cat-1.jpg'
import Cat2 from '../../../images/cat-2.jpg'
import Cat3 from '../../../images/cat-3.jpg'
import Cat4 from '../../../images/cat-4.jpg'
import CategoriesBox from '../categories-box'

const CategoriesMain = ()=>{
    const state = [
    {
        image:Cat1,
        title:'Category Name',
        count:'100 Products'
    },
    {
        image:Cat2,
        title:'Category name',
        count:'100 Products'
    },
    {
        image:Cat3,
        title:'Category name',
        count:'100 Products'
    },
    {
        image:Cat4,
        title:'Category name',
        count:'100 Products'
    },
    {
        image:Cat4,
        title:'Category name',
        count:'100 Products'
    },
    {
        image:Cat3,
        title:'Category name',
        count:'100 Products'
    },
    {
        image:Cat2,
        title:'Category name',
        count:'100 Products'
    },
    {
        image:Cat1,
        title:'Category name',
        count:'100 Products'
    },
    {
        image:Cat1,
        title:'Category name',
        count:'100 Products'
    },
    {
        image:Cat2,
        title:'Category name',
        count:'100 Products'
    },
    {
        image:Cat3,
        title:'Category name',
        count:'100 Products'
    },
    {
        image:Cat4,
        title:'Category name',
        count:'100 Products'
    }
]





return<div className='full-categories'>
    {state.map((item,index)=>{
        return <CategoriesBox  data={item} key={index}/>
    })}


    </div>
}
export default CategoriesMain