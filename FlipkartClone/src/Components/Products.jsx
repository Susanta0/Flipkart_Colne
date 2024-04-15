import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { BiRightArrowAlt } from "react-icons/bi";
// import data from "./db/mobileData.js"
import axios from "axios";

export const Products = () => {
  const [products, setProducts] = useState([]);
  var settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 5,
    slidesToShow: 5,
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://server-ecommerce-8nzl.onrender.com/mobileData`
      );
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mx-6 mt-3 bg-white flex justify-between gap-5 items-center pb-5">
        <div className="w-[84%]">
          <div className="flex items-center px-2 py-3 justify-between">
            <p className="text-xl font-bold text-black">Best Deals on Smartphones</p>
            <BiRightArrowAlt className="border size-6 text-white rounded-full bg-[#2A55E5]" />
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              {products.map((ele) => (
                <div key={ele.id} className=" border flex justify-center py-2 ">
                  <div className="flex justify-center">
                    <img src={ele.images} alt="mobile image" />
                  </div>
                  <div className="mt-1">
                  <p className="text-center text-lg ">{ele.title}</p>
                  <p className="text-center font-bold text-lg text-black">{ele.offer}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="">
          <img className=""
            src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/539fa6c2bada6e3e.png?q=20"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
