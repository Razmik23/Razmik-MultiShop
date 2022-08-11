import React from 'react'
import { ROUTER_NAMES } from '../../routers'
import { NavLink } from 'react-router-dom'
import Payments from '../../images/payments.png'

const Footer = () =>{
    const footerData = [
        {
            title: 'Home',
            path: ROUTER_NAMES.HOME
        },
        {
            title:'Our Shop',
            path:ROUTER_NAMES.SHOP
        },
        {
            title:'Shop Detail',
            path:ROUTER_NAMES.SHOP
        },
        {
            title:'Shopping Cart',
            path:ROUTER_NAMES.SHOP
        },
        {
            title:'Contact Us',
            path:ROUTER_NAMES.CONTACT
        }
    ]
    return<div className='F-div'>
            <div className='F-link'>
                <div className='F-info'>
                    <h3>GET IN TOUCH</h3>
                    <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                    <p>123 Street, New York, USA</p>
                    <p>info@example.com</p>
                    <p>+012 345 67890</p>

                </div>
                <div className='F-info'>
                    <h3>QUICK SHOP</h3>
                    
                    <div>
                {footerData.map((item, index) => {
                  return <li key={index}>
                    <NavLink to={item.path}
                             activeClassName='P-header-active'
                             exact={true}>{item.title}</NavLink>
                  </li>
                })}
                </div>
            

                </div>
                <div className='F-info'>
                    
                    <h3>MY ACCOUNT</h3>
                    <div>
                {footerData.map((item, index) => {
                  return <li key={index}>
                    <NavLink to={item.path}
                             activeClassName='P-header-active'
                             exact={true}>{item.title}</NavLink>
                        </li>
                    })}
                    </div>

                    
                </div>
                <div className='F-info'>
                    <h3>NEWSLETTER</h3>
                    <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                    <h4>FOLLOW US</h4>

                </div>
            </div>
            <div className='F-under'>
                <div>
                    <p>© Domain. All Rights Reserved. Designed by HTML Codex</p>
                </div>
                <div className='F-payments' style={{backgroundImage:`url('${Payments}')`}}></div>
            </div>
       

    </div>
}
export default Footer