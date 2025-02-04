import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Slider1() {
  return (
    <div className="mm">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide
          className="swiper-slides"
          style={{ height: "280px", width: "280px" }}
        >
          <Link to="/ladakh">
            <img src="ladakh.jpg" alt="coming soon..." />
            <p className="content" style={{ fontSize: "24px" }}>
              Ladakh
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slides"
          style={{ height: "280px", width: "280px" }}
        >
          <Link to="/JammuAndKashmir">
            <img
              src="jandk.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p className="content" style={{ fontSize: "24px" }}>
              Jammu & Kashmir
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slides"
          style={{ height: "280px", width: "280px" }}
        >
          <Link to="/Himachal_Pradesh">
            <img
              src="handp.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p className="content" style={{ fontSize: "24px" }}>
              Himachal Pradesh
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slides"
          style={{ height: "280px", width: "280px" }}
        >
          <Link to="/meghalaya">
            <img
              src="meghalaya.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p className="content" style={{ fontSize: "24px" }}>
              Meghalaya
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slides"
          style={{ height: "280px", width: "280px" }}
        >
          <Link to="/mp">
            <img
              src="mp.jpeg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p className="content" style={{ fontSize: "24px" }}>
              Madhya Pradesh
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slides"
          style={{ height: "280px", width: "280px" }}
        >
          <Link to="/gujrat">
            <img
              src="gujrat.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p className="content" style={{ fontSize: "24px" }}>
              Gujarat
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slides"
          style={{ height: "280px", width: "280px" }}
        >
          <Link to="/keral">
            <img
              src="keral.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p className="content" style={{ fontSize: "24px" }}>
              Kerala
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slides"
          style={{ height: "280px", width: "280px" }}
        >
          <Link to="/TamilNadu">
            <img
              src="tamilnadu.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p className="content" style={{ fontSize: "24px" }}>
              Tamil Nadu
            </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slides"
          style={{ height: "280px", width: "280px" }}
        >
          <Link to="/up">
            <img
              src="up.jpg"
              alt="coming soon..."
              style={{ borderRadius: "30px" }}
            />
            <p className="content" style={{ fontSize: "24px" }}>
              Uttar Pradesh
            </p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider1;
