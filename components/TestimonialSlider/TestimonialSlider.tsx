"use client";

import React from "react";
import TestimonialCard from "../common/Cards/TestimonialCard/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { testimonials } from "@/data/data";

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      centeredSlides={true}
      pagination={true}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: "auto",
        },
      }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <TestimonialCard {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
