import React from 'react'

import Card from './Card'
import "./Data.css"
const Data = (carData) => {
   
  return (
    <div className='data-fetch'>
    {
            carData.data.map((data)=>{
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
  )
}

export default Data
