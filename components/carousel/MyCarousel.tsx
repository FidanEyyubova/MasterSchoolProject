"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { team } from "@/constants/data";

const MyCarousel = () => {
  return (
    <div className="w-full">
      <Splide
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: 4,
          gap: "1.5rem",
          fixedHeight: "350px",
          pagination: false,
          autoScroll: { speed: 1.5, pauseOnHover: true },
          breakpoints: {
            640: { perPage: 1, fixedHeight: "300px" },
            1024: { perPage: 2, fixedHeight: "400px" },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {team.map((member) => (
          <SplideSlide key={member.id}>
            {}
            <div className="flex flex-col items-center bg-white rounded-xl border-2 border-[#9a6ff9] overflow-hidden">
              {}
              <div className="w-full h-64 relative overflow-hidden flex items-center justify-center">
                <img
                  src={member.img}
                  alt={member.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>

              {}
              <div className="p-6 w-full text-center">
                <h3 className="font-bold text-[15px] text-gray-800">
                  {member.title}
                </h3>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MyCarousel;
