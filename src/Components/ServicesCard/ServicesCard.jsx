import React from 'react'
import './ServicesCard.css'
import check from '../Images/check.png'

const ServicesCard = ({item}) => {
  return (
    <div className="servicescard">
        <div className="flex">
        <div className="icon">
              <img style={{width:"10px",height:"10px"}} src={check} alt="" />
        </div>
        <h3>{item.title}</h3>
        </div>
        <p>{item.desc}</p>
    </div>
  )
}

export default ServicesCard