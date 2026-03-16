"use client";
import { aboutByLang, masterPic } from "@/constants/data";
import Image from "next/image";
import { Language, useLanguage } from "../hooks/language/useLanguage";

const AboutPage = () => {
  const { lang } = useLanguage();
  const data = aboutByLang[lang as Language][0];

  if (!data) return null;

  const firstPart = data.titleOne.slice(0, 16);
  const commaIndex = data.titleOne.indexOf(",") + 1;
  const highlightedPart = data.titleOne.slice(16, commaIndex);
  const lastPart = data.titleOne.slice(commaIndex);

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 pt-0 lg:pt-16 pb-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16">
        <div className="w-full max-w-100 lg:max-w-113">
          <Image
            src={masterPic}
            alt="master-school-about"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div
          className="max-w-lg flex flex-col gap-4 text-center lg:text-left"
          id="about"
        >
          <h1 className="text-3xl lg:text-[40px] font-bold leading-tight">
            {firstPart}
            <span className="text-[#525FE1] block lg:inline">
              {highlightedPart}
            </span>
            {lastPart}
          </h1>

          <p className="text-[#808080] text-base lg:text-lg">{data.desc}</p>

          <div className="bg-[#9ba2f0] h-2 w-20 lg:w-35 rounded-2xl mx-auto lg:mx-0"></div>

          <div className="flex flex-col gap-4 pt-2">
            <h1 className="text-[20px] font-semibold">{data.titleTwo}</h1>
            <div className="space-y-3 text-[#808080] text-sm lg:text-base">
              {data.descTwo.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
