"use client";

import { addressByLang, addressTextByLang } from "@/constants/data";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Language, useLanguage } from "../hooks/language/useLanguage";

const LocationPage = () => {
  const { lang } = useLanguage();

  const langDataArray = addressTextByLang[lang as Language];
  const addressData = addressByLang[lang as Language];
  const langData = Array.isArray(langDataArray)
    ? langDataArray[0]
    : langDataArray;

  const title = langData?.capTitle || "";
  const lastSpaceIndex = title.lastIndexOf(" ");
  const firstPart = lastSpaceIndex !== -1 ? title.slice(0, lastSpaceIndex) : "";
  const highlightedPart =
    lastSpaceIndex !== -1 ? title.slice(lastSpaceIndex) : title;

  return (
    <div
      className="w-full px-4 pt-10 pb-10 flex flex-col items-center"
      id="address"
    >
      <div className="max-w-lg flex flex-col items-center text-center gap-4 mb-8">
        <h1 className="text-3xl md:text-[40px] font-bold leading-tight">
          {firstPart}
          <span className="text-[#525FE1]"> {highlightedPart}</span>
        </h1>
        <div className="bg-[#9ba2f0] h-2 w-40 rounded-2xl"></div>
        <p className="text-[#808080] text-base md:text-lg">
          {langData?.capDesc}
        </p>
      </div>

      <div className="w-full max-w-6xl py-3">
        <Splide
          options={{
            type: "loop",
            perPage: 2,
            gap: "1.2rem",
            autoplay: false,
            arrows: true,
            pagination: false,
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
          aria-label="Filiallar Karuseli"
        >
          {addressData.map((item) => (
            <SplideSlide key={item.id}>
              <div className="cursor-pointer flex flex-col sm:flex-row items-center dark:bg-[#18181b] bg-white border-2 border-[#c4c1c1] dark:border-[#18181b] shadow-sm rounded-2xl hover:border-[#525FE1] hover:dark:border-[#525FE1] transition-all duration-300 h-auto sm:h-64 p-3">
                {}
                <div className="hidden sm:block w-full sm:w-48 md:w-60 h-64 sm:h-full shrink-0 overflow-hidden rounded-2xl relative">
                  <Splide
                    options={{
                      type: "fade",
                      rewind: true,
                      arrows: false,
                      pagination: false,
                      autoplay: true,
                      interval: 3000,
                      drag: false,
                      height: "100%",
                    }}
                    className="inner-splide h-full"
                  >
                    {item.addressImg.map((imgUrl, idx) => (
                      <SplideSlide key={idx} className="h-full">
                        <Image
                          src={imgUrl}
                          alt={`${item.title}-${idx}`}
                          fill
                          className="object-cover object-center rounded-xl"
                          sizes="(max-width: 768px) 100vw, 240px"
                        />
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>

                <div className="flex flex-col gap-2 p-4 w-full text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white truncate">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    <MapPin size={16} className="text-gray-500 shrink-0" />
                    <p className="text-sm text-gray-500">
                      {item.address.length > 30
                        ? `${item.address.slice(0, 20)}...`
                        : item.address}
                    </p>
                  </div>
                  <a
                    href={`tel:${item.phoneNum}`}
                    className="flex items-center justify-center sm:justify-start gap-1 text-sm font-semibold text-[#525FE1] hover:underline"
                  >
                    <Phone size={14} />
                    {item.phoneNum}
                  </a>
                  <Link
                    href={`/locations/${item.id}`}
                    className="text-sm font-bold mt-1 text-black hover:underline dark:text-white"
                  >
                    {lang === "az" ? "Ətraflı məlumat" : "Detailed info"}
                  </Link>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default LocationPage;
