import React from 'react'

const CategoriesBox = (props)=>{
    return<div className='P-categories'>
        <div className='categories-overflow'>
            <div className='P-categories-image' style = {{backgroundImage:`url('${props.data.image}')`}}></div>
        </div>
        <div className='P-categories-content'>
            <h4>{props.data.title}</h4>
            <p>{props.data.count}</p>
        </div>

    </div>

}
export default CategoriesBox