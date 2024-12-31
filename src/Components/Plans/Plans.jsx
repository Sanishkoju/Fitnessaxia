import React from 'react'
import { PlanCard } from '../PlanCard/PlanCard'
import './Plans.css'
const offers=[
    {
        title:"DISCOVER",
        price:"$99",
        list:[
            "5 Classes per month",
            "4 Classes per month",
            "3 Classes per month",
            "2 Classes per month"
        ]

    },
    {
        title:"ENTERPRISE",
        price:"$299",
        list:[
            "6 Classes per month",
            "5 Classes per month",
            "4 Classes per month",
            "3 Classes per month",
            "2 Classes per month",
            "1 Classes per month",
        ]

    },
    {
        title:"PROFESSIONAL",
        price:"$199",
        list:[
            "5 Classes per month",
            "4 Classes per month",
            "3 Classes per month",
            "2 Classes per month"
        ]
    },

 ]

const Plans = () => {
  return (
    <div className="plans">
        <div className="container">
        <h2>Choose The Best Plan</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, eaque?</p>
        <div className="buttons">
            <button className="monthly">Monthly</button>
            <button className="annual">Annual</button>
        </div>
        <div className="plancards-row">
            {
             offers.map((item,index)=>(
                <PlanCard  key={index} item={item} />
             ))
            }
        </div>
    </div>
    </div>
  )
}

export default Plans