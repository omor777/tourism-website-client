import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-slider-1  bg-cover bg-center bg-no-repeat h-[500px] ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
              <h1 className="text-[clamp(32px,5vw,55px)] font-bold font-rancho tracking-wide text-center text-white ">
                Adventure and Activities
              </h1>
              <p className=" max-w-2xl mx-auto text-center  text-white mt-3">
                Extreme sports: Display adrenaline-pumping activities like
                skydiving, base jumping, paragliding, and snowboarding for
                thrill-seekers.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slider-2  bg-cover bg-center bg-no-repeat h-[500px] ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
              <h1 className="text-[clamp(32px,5vw,55px)] font-bold font-rancho tracking-wide text-center  text-white">
                Destination Highlights
              </h1>
              <p className="text-white max-w-2xl mx-auto text-center mt-3">
                Stunning landscapes: Showcase breathtaking images of natural
                wonders like mountains, beaches, waterfalls, and forests from
                popular tourist destinations.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slider-3  bg-cover bg-center bg-no-repeat h-[500px] ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full ">
              <h1 className="text-[clamp(32px,5vw,55px)] font-bold font-rancho tracking-wide text-center text-white">
                Relaxation and Luxury
              </h1>
              <p className="text-white max-w-2xl mx-auto text-center mt-3">
                Luxury accommodations: Showcase luxurious resorts, boutique
                hotels, spa retreats, and private villas with stunning views and
                world-class amenities.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute sm:top-1/2 sm:-translate-y-1/2 z-40 sm:flex justify-between w-full bottom-6 left-4 sm:left-auto space-x-3 sm:bottom-auto">
        <button
          type="button"
          className="prev-button bg-primary-main text-white p-4 rounded-full"
        >
          <FaArrowLeftLong />
        </button>
        <button
          type="button"
          className="next-button bg-primary-main text-white p-4 rounded-full"
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Banner;
