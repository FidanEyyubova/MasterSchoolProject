"use client";

import { applicant, capApplicantTextByLang } from "@/constants/data";
import { Marquee } from "./ui/marquee";
import { Language, useLanguage } from "../hooks/language/useLanguage";

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure className="relative h-40 w-35 sm:h-45 sm:w-40 md:h-50 md:w-45 cursor-pointer overflow-hidden rounded-xl border border-gray-200 p-2 mx-2">
      <img
        className="h-full w-full object-cover rounded-lg"
        alt="applicant"
        src={img}
      />
    </figure>
  );
};

const ApplicantPage = () => {
  const { lang } = useLanguage();
  const data = capApplicantTextByLang[lang as Language][0];

  if (!data) return null;

  const lastSpaceIndex = data.capTitle.lastIndexOf(" ");
  const firstPart = data.capTitle.slice(0, lastSpaceIndex);
  const highlightedPart = data.capTitle.slice(lastSpaceIndex);

  const mid = Math.floor(applicant.length / 2);
  const firstRow = applicant.slice(0, mid);
  const secondRow = applicant.slice(mid);

  return (
    <div className="dark:bg-[#020618] relative flex w-full flex-col items-center justify-center overflow-hidden py-10 bg-background">
      {}
      <div className="max-w-lg flex flex-col items-center text-center gap-4 mb-10">
        <h1 className="text-3xl md:text-[40px] font-bold leading-tight">
          {firstPart}
          <span className="text-[#525FE1]">{highlightedPart}</span>
        </h1>
        <div className="bg-[#9ba2f0] h-2 w-40 rounded-2xl"></div>
        <p className="text-[#808080] text-base md:text-lg">{data.capDesc}</p>
      </div>

      {}
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((item) => (
          <ReviewCard key={item.id} img={item.img} />
        ))}
      </Marquee>

      {}
      <Marquee reverse pauseOnHover className="[--duration:50s] mt-4">
        {secondRow.map((item) => (
          <ReviewCard key={item.id} img={item.img} />
        ))}
      </Marquee>

      {}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-white dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-white dark:from-black"></div>
    </div>
  );
};

export default ApplicantPage;
