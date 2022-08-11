import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTER_NAMES } from "../../routers";




const HeaderComponent = ()=>{
    const headerData = [
        {
            title: 'Home',
            path: ROUTER_NAMES.HOME
        },
        {
            title:'Shop',
            path:ROUTER_NAMES.SHOP
        },
        {
            title:'Contact',
            path:ROUTER_NAMES.CONTACT
        }
    ]

    return <header>
        <div className="P-multi-shop">
            <span className="text-primary">
                <h1>MULTI</h1>
            </span>
            <span className="text-dark">
                <h1>SHOP</h1>
            </span>
        </div>
        <div className="P-link">
            <div className="header-menu">
              <ul>
                {headerData.map((item, index) => {
                  return <li key={index}>
                    <NavLink to={item.path}
                             activeClassName='P-header-active'
                             exact={true}>{item.title}</NavLink>
                  </li>
                })}
                </ul>
           
            </div>
         <div className="P-shopping-cart">
                <div className="icon-heart"></div>
                <div className="icon-shopping_cart"></div>
            </div>
        </div>

    </header>

}
export default HeaderComponent