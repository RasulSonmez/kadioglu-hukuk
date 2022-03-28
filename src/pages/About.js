import React from "react";
import AboutAreaArea from "../components/AboutArea/AboutArea";
import AttorneysArea from "../components/AttorneysArea/AttorneysArea";
import BannerTwoArea from "../components/BannerTwoArea/BannerTwoArea";
import BreadcumbArea from "../components/BreadcumbArea/BreadcumbArea";
import ServiceArea from "../components/ServiceArea/ServiceArea";
import NewsLetterArea from "../components/NewsLetterArea/NewsLetterArea";
import TestmonialArea from "../components/TestmonialArea/TestmonialArea";
const About = () => {
  return (
    <>
      <BreadcumbArea />
      <ServiceArea />
      <AboutAreaArea />
      <BannerTwoArea />
      <TestmonialArea />
      <AttorneysArea />
      <NewsLetterArea />
    </>
  );
};

export default About;
