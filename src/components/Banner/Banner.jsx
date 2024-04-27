import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.css";

const Banner = () => {
  let settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container">
      <div>
        <Slider {...settings}>
          <div className="bg-slider-1 h-[450px] bg-cover bg-center bg-no-repeat"></div>
          <div className="bg-slider-2 h-[450px] bg-cover bg-center bg-no-repeat"></div>
          <div className="bg-slider-3 h-[450px] bg-cover bg-center bg-no-repeat"></div>
        </Slider>
      </div>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: "10px",
        background: "#3B82F6",
        padding: "1.5rem",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: "10px",
        background: "#3B82F6",
        padding: "1.5rem",
        borderRadius: "100%",
        zIndex: "1000",
      }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

export default Banner;
