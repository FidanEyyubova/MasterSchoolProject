"use client";

import { partnersByLang, partnerTextByLang } from "@/constants/data";
import Image from "next/image";
import { Language, useLanguage } from "../hooks/language/useLanguage";

const PartnersPage = () => {
  const { lang } = useLanguage();

  const capData = partnerTextByLang[lang as Language]?.[0];
  const partnersList = partnersByLang[lang as Language];

  if (!capData) return null;

  const lastSpaceIndex = capData.capTitle.lastIndexOf(" ");
  const firstPart = capData.capTitle.slice(0, lastSpaceIndex);
  const highlightedPart = capData.capTitle.slice(lastSpaceIndex);

  return (
    <div id="partners" className="py-16 mx-5">
      <div className="container mx-auto px-4 flex flex-col items-center gap-12">
        {}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl">
          <h1 className="text-3xl md:text-[40px] font-bold leading-tight text-black dark:text-white">
            {firstPart}
            <span className="text-[#525FE1]">{highlightedPart}</span>
          </h1>
          <div className="bg-[#9ba2f0] h-2 w-40 rounded-2xl"></div>
          <p className="text-[#808080] text-base md:text-lg">
            {capData.capDesc}
          </p>
        </div>

        {}
        <div className="flex flex-wrap justify-center gap-6 w-full p-4">
          {partnersList?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col dark:bg-[#18181b] bg-white rounded-xl shadow-sm overflow-hidden w-full lg:w-[45%] transition-all duration-300"
            >
              {}
              <div className="flex flex-col sm:flex-row items-center gap-6 p-6 grow text-center sm:text-left">
                <div className="shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover w-20 h-20"
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-[#808080] text-sm">{item.description}</p>
                </div>
              </div>

              <div className="bg-[#9ba2f0] h-2 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
