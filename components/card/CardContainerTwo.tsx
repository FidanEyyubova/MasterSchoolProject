"use client";

import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideType } from "@splidejs/splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { team } from "@/constants/data";

export default function TeamSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full overflow-hidden px-4">
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
          gap: "1.5rem",
          pagination: false,
          autoplay: true,
          interval: 3000,
          speed: 1300,
          pauseOnHover: true,
          breakpoints: {
            1280: { perPage: 4 },
            1024: { perPage: 3 },
            768: { perPage: 2 },
            500: { perPage: 1 },
          },
        }}
        onActive={(splide: SplideType) => setActiveIndex(splide.index)}
      >
        {team.map((member, index) => (
          <SplideSlide key={member.id}>
            <div
              className={`relative cursor-pointer overflow-hidden rounded-xl transition-all duration-500 my-4 mx-2 ${
                index === activeIndex
                  ? "shadow-[0_0_15px_rgba(82,95,225,0.2)] scale-100"
                  : "shadow-sm hover:shadow-md scale-95"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative w-full h-75">
                <Image
                  src={member.img}
                  alt={member.title}
                  fill
                  className={`transition-all duration-500 ease-in-out object-cover ${
                    index === activeIndex
                      ? "grayscale-0"
                      : "grayscale opacity-80"
                  }`}
                />
              </div>

              {}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 text-center border-t border-gray-100">
                <p
                  className={`font-bold transition-colors duration-300 ${
                    index === activeIndex ? "text-[#525FE1]" : "text-gray-400"
                  }`}
                >
                  {member.title}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
