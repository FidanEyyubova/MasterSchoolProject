"use client";
import React, { useEffect } from "react";
import CardContainer from "./card/CardContainer";
import { Language, useLanguage } from "@/hooks/language/LanguageContext";
import { capTextByLang } from "@/constants/data";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesPage = () => {
  const { lang } = useLanguage();
  const data = capTextByLang[lang as Language][0];
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const firstSpaceIndex = data.capTitle.indexOf(" ");
  const firstWord = data.capTitle.slice(0, firstSpaceIndex);
  const restOfTitle = data.capTitle.slice(firstSpaceIndex);

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 pt-10 pb-10"
      data-aos="fade-down"
      id="services"
    >
      <div className="max-w-lg flex flex-col items-center text-center gap-4">
        <h1 className="text-3xl md:text-[40px] font-bold leading-tight dark:text-white">
          {firstWord}
          <span className="text-[#525FE1] block md:inline">{restOfTitle}</span>
        </h1>
        <div className="bg-[#9ba2f0] h-2 w-40 rounded-2xl"></div>
        <p className="text-[#808080] text-base md:text-lg">{data.capDesc}</p>
      </div>

      <div className="w-full flex justify-center mt-8">
        <CardContainer />
      </div>
    </div>
  );
};

export default ServicesPage;
