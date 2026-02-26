"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GallerySlider({ data }) {

  const images = data.imageSlider || [];

  return (
    <div className="mb-10">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={data.showArrows ?? true}
        pagination={(data.showDots ?? true) ? { clickable: true } : false}
        autoplay={
          data.autoPlay
            ? { delay: 3000, disableOnInteraction: false }
            : false
        }
        loop={true}
        className="custom-swiper rounded-2xl overflow-hidden"
      >
        {images.map((img) => {
          const imageUrl = img.url || null;

          return (
            <SwiperSlide key={img.id}>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Gallery"
                  className="w-full h-[400px] object-cover"
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
  );
}