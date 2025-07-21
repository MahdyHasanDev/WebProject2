import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };
  return (

    <>
     <Slider {...settings}>
      <div>
        <div className="bg-[url('/Banner.png')] bg-cover bg-center py-[300px]"></div>
      </div>
      <div>
        <div className="bg-[url('/Banner.png')] bg-cover bg-center py-[300px]"></div>
      </div>
      <div>
        <div className="bg-[url('/Banner.png')] bg-cover bg-center py-[300px]"></div>
      </div>
     
    </Slider>
    
    </>

)
}

export default Banner