import React from 'react'
import { CiSearch } from "react-icons/ci"
import { BsChevronCompactDown } from "react-icons/bs"
import { Link } from 'react-router-dom'
import "./Navbar.css"
import data from "../data.json"
import { useState } from "react"
import Pagination from './Pagination'
import Card from './Card'
const Navbar = () => {
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);



  return (
    <>
      <div className='main-container'>


        <div className='header'>
          <div className='searchbar'>
            <form style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <input type="text" name="search" placeholder="Search by car name" autoComplete="off" onChange={(e) => setSearchName(e.target.value)}
              />
              <CiSearch size={30} />
            </form>
          </div>


          <Link className='rel' >Relevance <BsChevronCompactDown /></Link>
          <Link className='brands'>All Brands  <BsChevronCompactDown /></Link>

        </div>

      </div>
     
      <div className='data-fetch'>
        {
          currentPosts.filter(i => {
            if (searchName === '') {
              return i;
            } else if (i.title.toLowerCase().includes(searchName.toLowerCase())) {
              return i;
            }
          }).map((data) => {
            return (
              <Card
                key={data}
                title={data.title}
                image={data.image}
                year={data.start_production}
              />

            )
          })
        }
      </div>
      <Pagination totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
    </>
  )
}

export default Navbar
