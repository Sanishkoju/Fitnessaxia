import React from 'react'
import './OfferCards.css'

const OfferCards = ({item}) => {
  return (
    <div className="offerscard">
        <div className="icon">
              <img src={item.icon} alt="" />
        </div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <a href={item.url}>Learn More</a>
    </div>
  )
}

export default OfferCards