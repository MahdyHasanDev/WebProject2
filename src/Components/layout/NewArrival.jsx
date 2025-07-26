import Container from '../Container'
import Product from '../Product'
import jbkncvds from "../../assets/clock.png"
import jbkncvd from "../../assets/smartclock.png"
import jbkncv from "../../assets/jhuri.png"
import jbknc from "../../assets/Indur.png"

// slider 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import { Link } from 'react-router-dom'

// slider 

const NewArrival = () => {
  var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,  // ✅ fix here
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

  return (
    <>       
    <Container>
     <div className="-mx-4">
       <Slider {...settings}>
<div>
<div className='px-4'>
  <Link to={'/'}>
  <Product 
            productImg={jbkncvds}
            bajText={"10%"}
            badgeText={"Basic Crew Neck Tree"}
            badgePrice={"$44.00"}
            />
  </Link> 
  </div>
</div>
<div>
<div className='px-4'>
    <Link to={'/'}>

            <Product productImg={jbkncvd}
            bajText={"New"} 
            badgeText={"Basic Crew Neck Tree"}
            badgePrice={"$44.00"}
            />
            </Link>
            </div>
</div>
<div>
<div className='px-4'>
    <Link to={'/'}>
            <Product productImg={jbkncv} 
            bajText={"New"}
            badgeText={"Basic Crew Neck Tree"}
            badgePrice={"$44.00"}
            />
            </Link>
               </div>
</div>
<div>
<div className='px-4'>
    <Link to={'/'}>
            <Product productImg={jbknc} 
            bajText={"New"}
            badgeText={"Basic Crew Neck Tree"}
            badgePrice={"$44.00"}/>
            </Link>
             </div>
</div>
      </Slider>
          </div>
    </Container>
    


    
</>
  )
}

export default NewArrival