
import Slider from "react-slick";
// react slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ResSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        
        }
      },
    ]
  };

  return (
      <div className=" mt-2 mx-6 bg-white">
        <Slider{...settings}>
          {bannerData.map((ele) => (
            <div id="bannercontent" style={{border:"1px solid"}} key={ele.id}>
              <div className="bannerImages">
                <img className="  " src={ele.image} alt="image" />
              </div>
            
            </div>
          ))}
        </Slider>
      </div>
  );
};

const bannerData = [
  {
    id: "1",
    image:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/fd78c56eb85bafd5.jpg?q=20",
  },
  {
    id: "2",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/15abbf51dbd46209.jpg?q=20",
  },
  {
    id: "3",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1716f18fdf7edbbb.png?q=20",
    
  },
  {
    id: "4",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cddefe114292edc3.png?q=20",
   
  },
  {
    id: "5",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/07e1b1bafa69088c.jpg?q=20",
    
  },
  {
    id: "6",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/25e306273d3609bc.jpg?q=20",
   
  },
  {
    id: "7",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/86593ec696b20c99.jpg?q=20",
   
  },
  {
    id: "8",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1686434dbad73524.jpg?q=20",
   
  },
];

