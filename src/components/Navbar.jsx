import React  from 'react'
import {CiSearch} from "react-icons/ci"
import {BsChevronCompactDown} from "react-icons/bs"
import { Link } from 'react-router-dom'
import "./Navbar.css"
import search from "../assests/search.png"
import { useState } from "react"
const Navbar = () => {
  return (
    <div className='main-container'>

   
    <div className='header'>
    <div className='searchbar'>
    <form style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
  <input type="text" name="search" placeholder="Search by car name" />
  <CiSearch size={30}/>
</form>
    </div>
   

 <Link className='rel' >Relevance <BsChevronCompactDown/></Link>
 <Link className='brands'>All Brands  <BsChevronCompactDown/></Link>
 
</div>
 </div>
  )
}

export default Navbar
