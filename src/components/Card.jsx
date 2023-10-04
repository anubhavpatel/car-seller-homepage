import React from 'react'
import "./Card.css"
import {GoPeople} from "react-icons/go"
import {PiGasPump,PiHeart} from "react-icons/pi"
import {IoSpeedometerOutline} from "react-icons/io5"
import {MdOutlineMotionPhotosAuto} from "react-icons/md"

const Card = ({title,image,year}) => {
  return (

    
    <div className='card-container'>

      <div className='car-image'>
      <img src={image}></img>
      </div>
      <div className='content'>
        <div className='c1'>
           <h2>{title}</h2>
            <div className='year'>{year}</div>
        </div>
        <div className='c2'>
        <div className='c2in'><GoPeople color='#21a0ef'/> 4 people</div>
        <div className='c2in'><PiGasPump color='#21a0ef'/> Hybrid</div>
        <div className='c2in'> <IoSpeedometerOutline color='#21a0ef'/> 6.1km/1-litre</div>
        <div className='c2in'> <MdOutlineMotionPhotosAuto color='#21a0ef'/> Automatic</div>
        </div>
        <hr />
        <div className='c3'>
          <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
          <h2>$440</h2><p>/month</p>
          </div>
            <div className='c31'>
                <div style={{ backgroundColor:"#b4e3fd",color:"#21a0ef", display:"flex", justifyContent: "center", 
                alignItems: "center",borderRadius:"0.5rem", height:"2rem", width:"2rem",marginRight:"1rem" }}><PiHeart size={20}/></div>
                <button>Rent now</button>
            </div>
        </div>
      </div>
      
    </div>
   
  )
}

export default Card
