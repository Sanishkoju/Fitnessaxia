import React from 'react'
import './Services.css'
import ServicesCard from '../ServicesCard/ServicesCard'
import hero_img from '../Images/hero.png';

const services=[
    {
        title:"Personal Training",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur est consequatur reprehenderit architecto cumque harum? Tenetur neque facere aliquam. Impedit cupiditate cumque quod praesentium itaque facilis iusto, velit quasi maiores.",

    },
    {

        title:"Expert Trainer",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur est consequatur reprehenderit architecto cumque harum? Tenetur neque facere aliquam. Impedit cupiditate cumque quod praesentium itaque facilis iusto, velit quasi maiores.",

    },
    {

        title:"Flexible Time",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur est consequatur reprehenderit architecto cumque harum? Tenetur neque facere aliquam. Impedit cupiditate cumque quod praesentium itaque facilis iusto, velit quasi maiores.",
    },

 ]

const Services = () => {
  return (
    <div className='services'>
        <div className="container">
            <div className="wrapper">
                <div className="left">
                    <h2 style={{textAlign:"left"}}>Why Should People Choose <br></br>Fitnesxia Services</h2>
                    <div className="servicescard">
                    {
                    services.map((item, index)=>(
                        <ServicesCard key={index} item={item}/>
                    )) 
                   }   
                    </div>
                    <button>Join Today</button>
                </div>
                <div className="right">
                 <div className="circle"></div>
                 <img src={hero_img} alt="" />
                 <div className="side-card side-card1" >
          <div className="left">
            <Heart />
          </div>
          <div className="right" >
            <span style={{fontSize:"20px",fontWeight:"600", color:"#000",marginBottom:"5px"}}>70bpm</span><span style={{fontSize:"16px",fontWeight:"400", color:"#000"}}>Heart Rate</span>
          </div>
        </div>
                <div className="side-card side-card2">
                <div className="left">
                    <Fire />
                </div>
                <div className="right">
                   <span style={{fontSize:"20px",fontWeight:"600", color:"#000",marginBottom:"5px"}}>24%</span><span style={{fontSize:"16px",fontWeight:"400", color:"#000"}}>Flat Burning</span>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services


const Fire =()=>(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="25px" width="25px"><path fill="#d73e3e" d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/></svg>
)
const Heart =()=>(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="25px" width="25px"><path fill="#d73e3e" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4l87 0c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31l104.5 0c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240l-132 0c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9L16 240c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9l0-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1l0 5.8c0 16.9-2.8 33.5-8.3 49.1z"/></svg>
)