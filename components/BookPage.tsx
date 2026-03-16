"use client";

import { booksByLang, bookTextByLang } from "@/constants/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { Language, useLanguage } from "../hooks/language/useLanguage";

const BookPage = () => {
  const { lang } = useLanguage();
  const book = booksByLang[lang as Language];
  const bookCap = bookTextByLang[lang as Language][0];

  if (!bookCap) return null;

  const lastSpaceIndex = bookCap.capTitle.lastIndexOf(" ");
  const firstPart = bookCap.capTitle.slice(0, lastSpaceIndex);
  const highlightedPart = bookCap.capTitle.slice(lastSpaceIndex);

  return (
    <div
      className="w-full px-4 pt-10 pb-10 flex flex-col items-center"
      id="adress"
    >
      <div className="max-w-2xl flex flex-col items-center text-center gap-4">
        <h1 className="text-3xl md:text-[40px] font-bold leading-tight pt-6">
          {firstPart}
          <span className="text-[#525FE1]">{highlightedPart}</span>
        </h1>
        <div className="bg-[#9ba2f0] h-2 w-40 rounded-2xl"></div>
        <p className="text-[#808080] text-base md:text-lg">{bookCap.capDesc}</p>
      </div>

      <div className="w-full max-w-6xl py-6">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            gap: "1rem",
            autoplay: true,
            interval: 4000,
            pagination: false,
            padding: { left: "1.03rem" },
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              425: { perPage: 1 },
            },
          }}
          className="[&_.splide__track]:overflow-visible!"
        >
          {book.map((item) => (
            <SplideSlide key={item.id} className="py-4 flex justify-center">
              <div className="relative h-88 w-60 bg-white rounded-xl border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:border-gray-300 hover:z-50 cursor-pointer overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain pt-3"
                  />
                </div>
                <div className="absolute top-3 left-3 bg-[#525FE1] text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  {item.badge}
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                  <h3 className="text-lg font-bold text-black line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default BookPage;
