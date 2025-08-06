import axios from 'axios';
import Container from '../Container';
import Product from '../Product';
import React, { useState, useEffect } from 'react';

// slider 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import { Link } from 'react-router-dom';
// slider 

const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    fetchData();
  }, []); // ✅ use empty dependency array to avoid infinite re-render

  return (
    <Container>
      <div className="-mx-4">
        <Slider {...settings}>
          {allData.map((item) => (
            <div key={item.id} className="px-4">
              <Link to={`/ProductDetails`}>
                <Product
                  productImg={item.thumbnail}
                  bajText={"New"}
                  badgeText={item.title}
                  badgePrice={item.price}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default NewArrival;
