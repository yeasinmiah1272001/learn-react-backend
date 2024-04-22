// import { useEffect, useState } from "react";
import SectionTitle from "../../component/SectionTitle/SectionTitle";import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";






const Testimonial = () => {
       const [testimonial, setTestimonial] = useState([[]])
       useEffect(() => {
              fetch("/reviews.json")
              .then(res => res.json())
              .then(data => setTestimonial(data))
       },[])
       
  return (
    <section>
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonial.map((item) => (
          <SwiperSlide key={item._id} className="p-20 text-center">
            <p>{item.details}</p>
            <h1 className="text-3xl font-bold text-orange-300">{item.name}</h1>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
