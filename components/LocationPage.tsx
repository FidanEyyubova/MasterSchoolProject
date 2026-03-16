"use client";

import { useState, useEffect } from "react";
import { addressByLang, addressTextByLang } from "@/constants/data";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Language, useLanguage } from "@/hooks/language/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomSlider = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full group/slider overflow-hidden">
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`${title}-${idx}`}
          fill
          className={`object-cover transition-opacity duration-700 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, 224px"
        />
      ))}

      {}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full opacity-0 group-hover/slider:opacity-100 transition"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full opacity-0 group-hover/slider:opacity-100 transition"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}
    </div>
  );
};

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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section
      id="address"
      className="w-full px-4 py-16 flex flex-col items-center"
      data-aos="fade-down"
    >
      {}
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

      {}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        {addressData.map((item, index) => (
          <div
            key={item.id}
            className={`cursor-pointer group flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-white dark:bg-[#18181b] border border-gray-200 dark:border-[#27272a] transition-all duration-300 hover:scale-[1.02] w-full`}
          >
            {}
            <div className="relative w-full sm:w-56 h-48 sm:h-auto overflow-hidden shrink-0 bg-gray-100">
              <CustomSlider images={item.addressImg} title={item.title} />
            </div>

            {}
            <div className="flex flex-col justify-between gap-3 p-5 w-full">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <MapPin size={14} className="shrink-0" />
                  <span className="truncate">
                    {item.address.length > 30
                      ? `${item.address.slice(0, 30)}...`
                      : item.address}
                  </span>
                </div>
                <a
                  href={`tel:${item.phoneNum}`}
                  className="flex items-center gap-2 text-[#525FE1] font-medium text-sm hover:underline"
                >
                  <Phone size={14} />
                  {item.phoneNum}
                </a>
              </div>

              <Link
                href={`/locations/${item.id}`}
                className="w-fit text-xs font-semibold px-4 py-2 rounded-lg bg-[#525FE1] text-white hover:bg-[#3d47c7] transition"
              >
                {lang === "az" ? "Ətraflı məlumat" : "Detailed information"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationPage;
