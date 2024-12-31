import React from 'react'
import OfferCards from '../OffersCard/OfferCards'
import './Offers.css'
import dumbbell from '../Images/dumbbell.png';
import muscle from '../Images/muscle.png';
import running from '../Images/running.png';
import yoga from '../Images/yoga.png';

 const offers=[
    {
        icon:dumbbell,
        title:"Strength Training",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur est consequatur reprehenderit architecto cumque harum? Tenetur neque facere aliquam. Impedit cupiditate cumque quod praesentium itaque facilis iusto, velit quasi maiores.",
        url:"#",

    },
    {
        icon:muscle,
        title:"Basic Yoga",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur est consequatur reprehenderit architecto cumque harum? Tenetur neque facere aliquam. Impedit cupiditate cumque quod praesentium itaque facilis iusto, velit quasi maiores.",
        url:"#",

    },
    {
        icon:running,
        title:"Body Building",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur est consequatur reprehenderit architecto cumque harum? Tenetur neque facere aliquam. Impedit cupiditate cumque quod praesentium itaque facilis iusto, velit quasi maiores.",
        url:"#",

    },
    {
        icon:yoga,
        title:"Weight Loss",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur est consequatur reprehenderit architecto cumque harum? Tenetur neque facere aliquam. Impedit cupiditate cumque quod praesentium itaque facilis iusto, velit quasi maiores.",
        url:"#",

    },
 ]

const Offers = () => {
  return (
    <div className="offers">
        <div className="container">
        <div className="offerstop">
           <h2 style={{textAlign:"left"}}>The Best Program We<br></br>Offers For You </h2>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur est consequatur reprehenderit architecto cumque harum? Tenetur neque facere aliquam. Impedit cupiditate cumque quod praesentium itaque facilis iusto, velit quasi maiores.</p>
        </div>
        <div className="offersright">
                {
                   offers.map((item, index)=>(
                    <OfferCards key={index} item={item}/>
                   )) 
                }
        </div>
        </div>
    </div>
  )
}

export default Offers
const Bodydumbbell =()=>(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="40px"><path fill="#d73e3e" d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"/></svg>
  )