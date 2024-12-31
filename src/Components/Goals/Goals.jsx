import React from 'react'
import './Goals.css'
import goal_img from '../Images/couple.jpg'

const Goals = () => {
  return (
    <div className="goals">
      <div className="container">
        <div className="wrapper">
        <div className="goalsleft">
        <img src={goal_img} alt="" />
        </div>
        <div className="goalsright">
          <h2>Get Ready To Reach Your Fitness Goals</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum distinctio minus ratione neque tempora sit consequuntur, a dignissimos maxime, inventore aliquid. Alias reiciendis provident sunt, eum cum quis vero ut aliquid iure autem. Rem, dicta dolorum a quos, quaerat quasi repudiandae voluptatum vel iure consequuntur, recusandae saepe assumenda non!</p>
          <button>Free Trial Today</button>
        </div>
        <div className="side-card">
          <div className="left">
            <Bodydumbbell />
          </div>
          <div className="right">
            Professional <br></br> Training
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Goals


const Bodydumbbell =()=>(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="40px"><path fill="#d73e3e" d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"/></svg>
)
