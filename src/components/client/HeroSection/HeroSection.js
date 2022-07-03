import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from 'swiper'
import slider_1 from '../../../assets/slider/img1.jpg'
import slider_2 from '../../../assets/slider/img2.jpg'
import slider_3 from '../../../assets/slider/img3.jpg'
import slider_4 from '../../../assets/slider/img4.jpg'
import './HeroSection.css'



const HeroSection = () => {
    return (
        <>
        <Swiper  slidesPerView={1}
         autoplay={{
             delay: 3000,
         }}
         modules={[Autoplay]}
          pagination={true} modules={[Pagination]  } className="mySwiper">
          <SwiperSlide><img src={slider_1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slider_2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slider_3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slider_4} alt="" /></SwiperSlide>
        </Swiper>
      </>
    );
};

export default HeroSection;


