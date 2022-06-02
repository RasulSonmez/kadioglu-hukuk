import React from "react";
import AboutArea from "../components/AboutArea/AboutArea";
import AttorneysArea from "../components/AttorneysArea/AttorneysArea";
import Banner from "../components/Banner/Banner";
import BlogArea from "../components/BlogArea/BlogArea";
import ContactArea from "../components/ContactArea/ContactArea";
import Hero from "../components/Hero/Hero";
import NewsLetterArea from "../components/NewsLetterArea/NewsLetterArea";
import PracticeArea from "../components/PracticeArea/PracticeArea";
import ServiceArea from "../components/ServiceArea/ServiceArea";
import TestmonialArea from "../components/TestmonialArea/TestmonialArea";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceArea />
      <AboutArea />
      <PracticeArea />
      <Banner />
      <TestmonialArea />
      <AttorneysArea />
      <ContactArea />

      <NewsLetterArea />
    </>
  );
};

export default Home;
