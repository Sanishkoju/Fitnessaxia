import React from 'react'
import HeroBanner from '../Components/HeroBanner/HeroBanner';
import Partners from '../Components/Partners/Partners';
import Goals from '../Components/Goals/Goals';
import Offers from '../Components/Offers/Offers';
import Plans from '../Components/Plans/Plans';
import Services from'../Components/Services/Services';
import Testimonial from '../Components/Testimonial/Testimonial';
const Home = () => {
  return (
    <div>
            <HeroBanner/>
            <Partners />
            <Goals />
            <Offers />
            <Services />
            <Plans />
            <Testimonial />
    </div>
  )
}

export default Home