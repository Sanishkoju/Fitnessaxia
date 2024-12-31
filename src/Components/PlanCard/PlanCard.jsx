import React from 'react'
import './PlanCard.css'
import check from '../Images/check-mark.png'

export const PlanCard = ({item}) => {
  return (
    <div className="plancards">
        <h3 className="title">
            {item.title}
        </h3>
      <div className="price">{item.price}<span>/Per Month</span></div>
      <ul>
        {item.list.map((list, index)=>
            (<li key={index} style={{display:"flex",gap:"5px"}}>
              <span><img style={{width:"15px", height:"15px"}} width="20px" src={check} alt="" /></span>
                {list}
                </li>)
            )
            }
      </ul>
      <button>Choose Plan</button>
    </div>
  )
}
