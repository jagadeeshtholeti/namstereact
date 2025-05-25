import { useState } from "react";

const Carousel = () => {
    const carouselItems = [1,2,3,4,5,6,7,8,9,10];
    const [transform,setTransform] = useState(-500);
    return(
        <div className="carousel-container">
            <div className="carouselTrack" style={{transform:`translateX(${transform}px)`}}>
                          {
                carouselItems.map((item, index)=>{
                    return <div className="carousel-iem" key={index}>{item}</div>
                })
            }
            </div>
            <div className="prev" onClick={()=>setTransform((prev)=>prev+500)}>prev</div>
            <div className="next" onClick={()=>setTransform((prev)=>prev-500)}>next</div>
        </div>
    )
}

export default Carousel
