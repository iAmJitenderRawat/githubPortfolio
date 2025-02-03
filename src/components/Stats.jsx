import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const Stats = () => {
  return (
    <div className="p-15" id="stats">
      <Heading className="center ptb-10">GitHub Stats</Heading>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="stats"
            w={{ md: "80%", sm: "95%", base: "98%" }}
            h={"30vh"}
            src="https://github-readme-stats.vercel.app/api?username=iamjitenderrawat&show_icons=true&locale=en"
            alt="iamjitenderrawat"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="stats"
            w={{ md: "80%", sm: "95%", base: "98%" }}
            h={"30vh"}
            src="https://github-readme-streak-stats.herokuapp.com/?user=iamjitenderrawat&"
            alt="iamjitenderrawat"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="stats"
            w={{ md: "80%", sm: "95%", base: "98%" }}
            h={"30vh"}
            src="https://github-readme-stats.vercel.app/api/top-langs?username=iamjitenderrawat&show_icons=true&locale=en&layout=compact"
            alt="iamjitenderrawat"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
