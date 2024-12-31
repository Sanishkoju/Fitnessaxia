import React from 'react'
import './HeroBanner.css'
import hero_img from '../Images/hero.png'
import couple_img from '../Images/couple.jpg'

const counterData=[
    {
        counter:"105+",
        desc:"Export Trainers",

    },
    {
        counter:"970+",
        desc:"Member Joined",
    },
    {
        counter:"135+",
        desc:"Fitness Programs",
    }
]

const HeroBanner = () => {
  return (
    <div className='herobanner'>
        <div className="container">
            <div className="wrapper">
            <div className="heroleft">
                <div className="herotop">
                <h1>GET HEALTHY BODY WITH THE PERFECT EXCERCISES<span>
                    <img src={couple_img} alt="" />
                </span>
                </h1>
                </div>
                <p>
                    we wre always there to help yoy to make a healthy body and <br></br> mind through the power of fitness.
                </p>
                <div className="heromiddle">
                    <button>Get Started</button>
                    <div className="video">
                        <div className="icon">
                            <Playbutton />
                        </div>
                        <span>Watch Video</span>
                    </div>
                </div>
                <div className="bottom">
                    {
                        counterData.map((item, index)=>{
                            return(
                                <div className="counterbox">
                                <div className="counter">
                                {item.counter}
                                </div>
                                <p>{item.desc}</p>
                            </div>
                            )
                        })

                    }
                </div>
            </div>
            <div className="heroright">
                <img width="500px" height="500px" src={hero_img} alt=""/>
                <div className="caloriesbox">
                    <div className="calbox-left">
                        <div className='cal-top'>Today's Calories</div>
                        <div className="cal-count">150 Cal</div>
                        <div className="cal-graph">
                            <span><Graphtop /></span>
                            <span>+2.75%</span>
                            <span>This Week</span>
                        </div>
                    </div>
                    <div className="cal-bar">
                    <Graph />
                    </div>
                </div>

            </div>
            </div>

        </div>
    </div>
  )
}

export default HeroBanner


const Playbutton = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#fff" width="15px"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>

)
const Graph =()=>(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"height="50px"><path fill="#d73e3e" d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/></svg>
)
const Graphtop =()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="10px" viewBox="0 0 24 24" stroke="#D73E3E" fill='none'>
<path stroke="#D73E3E" d="M20 20H4V4" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path stroke="#D73E3E" d="M4 16.5L12 9L15 12L19.5 7.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)