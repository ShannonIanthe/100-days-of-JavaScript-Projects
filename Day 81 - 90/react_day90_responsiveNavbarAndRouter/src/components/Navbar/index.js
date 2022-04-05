import React from 'react'
import {
    Nav, 
    Bars, 
    NavLink,
    NavMenu, 
    NavBtn, 
    NavBtnLink
} from './NavbarElements'

const Navbar  = () => {
  return (
    <>
        <Nav>
           <NavLink to="/">
               <h1>Logo</h1>
               <Bars />
               <NavMenu>
                   <NavLink to="/about" activeStyle>
                       About
                   </NavLink>
                   <NavLink to="/services" activeStyle>
                       Services
                   </NavLink>
                   <NavLink to="/contact-us" activeStyle>
                       Contact Us
                   </NavLink>
                   <NavLink to="/sign-up" activeStyle>
                       Sign Up
                   </NavLink>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to="/signin">Sign IN</NavBtnLink>
               </NavBtn>
           </NavLink> 
        </Nav>
    </>
  )
}

export default Navbar 