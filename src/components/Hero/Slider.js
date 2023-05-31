import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper";
import Slide from "./Slide";

import imgOne from "../../assets/slide-1.jpg";
import imgTwo from "../../assets/slide-2.jpg";
import imgThree from "../../assets/slide-3.jpg";
import imgFour from "../../assets/slide-4.jpg";

const SLIDES = [
  {
    img: imgOne,
    title: "The Biggest",
    marked: "Sale",
    subTitle: "Special for today",
  },
  {
    img: imgTwo,
    title: "Summer",
    marked: "Collection",
    subTitle: "New Arrivals On Sale",
  },
  {
    img: imgThree,
    title: "The Biggest",
    marked: "Sale",
    subTitle: "Special for today",
  },
  {
    img: imgFour,
    title: "Summer",
    marked: "Collection",
    subTitle: "Special for today",
  },
];

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {SLIDES.map((item) => {
          return (
            <SwiperSlide key={item.img}>
              <Slide
                img={item.img}
                title={item.title}
                subTitle={item.subTitle}
                marked={item.marked}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
