import React from 'react';
import "swiper/css";
import slider_1 from '../../../assets/slider/img1.jpg'
import slider_2 from '../../../assets/slider/img2.jpg'
import slider_3 from '../../../assets/slider/img3.jpg'
import slider_4 from '../../../assets/slider/img4.jpg'
import './HeroSection.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroSection = () => {
    return (
        <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide><img src={slider_1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slider_2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slider_3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slider_4} alt="" /></SwiperSlide>
        </Swiper>
      </>
    );
};

export default HeroSection;


