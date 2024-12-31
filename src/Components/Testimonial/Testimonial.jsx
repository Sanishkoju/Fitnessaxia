import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';
import './Testimonial.css'
import TestimonialBox from '../TestimonialBox/TestimonialBox'
import customer1 from '../Images/gym-8108016_1280.png';
import customer2 from '../Images/gym-8108019_1280.png';
import customer3 from '../Images/hero.png';
const customer=[
    {
     image:customer1,

    },
    {
        image:customer2,

    },
    {
        image:customer1,

    },

 ]
const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className="container">
            <div className="wrapper">
                <div className="left">
                    <h2 style={{textAlign:"left"}}>Why Should People Choose <br></br>Fitnesxia testimonial</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illo accusantium perspiciatis quia nihil, ut alias officia consectetur quod iste odit. Dolorum alias nihil eveniet at nulla, nostrum commodi facere!</p>
                     <div className="customersbox">
                          <div className="customer">
                            {
                            customer.map((item , index)=>(
                                <figure key={index}>
                                    <img src={item.image} alt=""/>
                                </figure>
                                
                            ))
                            }
                            <div className="circle">
                                +
                            </div>
                          </div>
                          <div className="reviews">
                          <Singlstar />
                            <span>4.9(450Reviews)</span>
                          </div>
                     </div>
                    
                </div>
                <div className="right">
                <Swiper
    spaceBetween={20}
    slidesPerView={3} // Default for larger screens
    navigation={true}
    pagination={false}
    scrollbar={{ draggable: true }}
    className="w-[80%]"
    loop={true}
    modules={[Pagination, Navigation]}
    style={{
        '--swiper-navigation-size': '20px', // Set the navigation button size to 20px
        '--swiper-navigation-color': '#000', // Set the navigation button color to black
        '--swiper-pagination-color': '#000', // Set pagination color to black
        '--swiper-pagination-button-color': '#000', // Set the color of the pagination buttons to black
        '--swiper-pagination-button-size': '20px', 

    }}
    breakpoints={{
        320: { // for small screens (mobile)
            slidesPerView: 1, // 1 slide per view on mobile
        },
        768: { // for tablets and larger screens
            slidesPerView: 1, // Optionally adjust for tablets
        },
        1024: { // for large screens
            slidesPerView: 1, // 3 slides per view on desktop and larger screens
        },
    }}
>
                {Testimonialselement.map((item, index) => (
                <SwiperSlide key={index} style={{ height: 'unset',  }}>
                    <div style={{
                        height: '100%',
                        borderRadius: '0.5rem',
                        // overflow: 'hidden',
                        }}
                        >
                    <TestimonialBox src={item.image } name={item.names} position={item.positions}  desc={item.description} e={index}/>
                    </div>         
                </SwiperSlide>
))}
        </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
const Testimonialselement = [
    {
        names: "Farhan",
        image: customer1,
        positions: 'Happy Customer',
        description: "Front-end development brings ideas to life! It’s amazing how code transforms into stunning, interactive designs.Front-end development brings ideas to life! It’s amazing how code transforms into stunning, interactive designs.Front-end development brings ideas to life! It’s amazing how code transforms into stunning, interactive designs. It’s amazing how code transforms into stunning, interactive designs.",
    },
    {
        names: "Farhan",
        image: customer2,
        positions: 'Happy Customer',
        description: "The power of a well-designed UI cannot be overstated—front-end is where user experience begins Front-end development brings ideas to life! It’s amazing how code transforms into stunning, interactive designs.Front-end development brings ideas to life! It’s amazing how code transforms into stunning, interactive designs. It’s amazing how code transforms into stunning, interactive designs. It’s amazing how code transforms into stunning, interactive designs.",
    },
    {
        names: "Farhan",
        image: customer3,
        positions: 'Happy Customer',
        description: "Mastering front-end feels like painting with code—each element adds to the user’s story. Front-end development brings ideas to life! It’s amazing how code transforms into stunning, interactive designs.Front-end development brings ideas to life! It’s amazing how code transforms into stunning, interactive designs.",
    },

];


const Singlstar = ()=>(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="15px"><path fill="#e1c741" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
)