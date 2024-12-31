import { useRef ,useState} from 'react';
import './TestimonialBox.css'
import rating from '../Images/rating.png'
const TestimonialBox= (props)=>{ 
    const Read = useRef();
    const [open, setOpen] = useState(true);
    
    const handleRead = (e)=>{
        console.log("rad",Read.current)
        console.log("e",e)
        setOpen(!open);
        console.log("open",open)
        Read.current.style.overflow= open ? "auto" : "hidden";
        

    }
    return(
        <div style={{
            padding: '23px',
            backgroundColor: 'rgb(79 78 78)',
            borderRadius:"8px"
          }}
          >
        <div style={{
            display: 'flex',
            gap: '8px',
            }}
            >
           <img
           src={props.src}
           alt={props.name}
           width={300}
           height={200}
           style={{
            height: '50px',
            width: '50px',
            objectFit: 'cover',
            overflow: 'hidden',
            borderRadius: '50%',
            display: 'inline-block',
          }}
          
           />
           <div className="self-center">
          <div className='name' style={{color:"#fff", fontSize:"14px",fontWeight:"500"}}>{props.name}</div>
           <p style={{
            color: '#fff',
            marginTop: '4px',
            fontStyle: 'italic',
            fontSize: '0.75rem',
            }}
            >{props.position}</p>
           </div>
           </div> 

           <img
           src={rating}
           alt="star"
           width={300}
           height={20}
           style={{
            height: '20px', // Adjust based on your interpretation of `h-[20]`
            objectFit: 'contain',
            width: 'auto',
    
            marginTop:"15px"
          }}
          
           />
    <>
           <div style={{
            marginTop: '28px',
            }}
            >
            <p ref={Read} style={{
            color: '#fff',
            fontSize: '0.875rem',
            height: "80px" ,overflow:"hidden"
            }}
            >{props.desc}</p>
            <span onClick={() => handleRead(props.e)}   style={{cursor:"pointer"}} >{open ? "readmore..." : "readless" }</span>
           </div>
           </>

       </div>
    )
}
export default TestimonialBox;