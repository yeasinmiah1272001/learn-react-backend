import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";



import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide1.jpg";
import slide6 from "../../assets/home/slide1.jpg";
import slide7 from "../../assets/home/slide3.jpg";
import SectionTitle from "../../component/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <div className="mt-4">
        <SectionTitle
          subHeading={"---From 11:00am to 10:00pm---"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-3"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-center -mt-9 font-bold text-2xl">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-center -mt-9 font-bold text-2xl">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-center -mt-9 font-bold text-2xl">Desert</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-center -mt-9 font-bold text-2xl">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-center -mt-9 font-bold text-2xl">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
          <p className="text-center -mt-9 font-bold text-2xl">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt="" />
          <p className="text-center -mt-9 font-bold text-2xl">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-center -mt-9 font-bold text-2xl">Soups</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
