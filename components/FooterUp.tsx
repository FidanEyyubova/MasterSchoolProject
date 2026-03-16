"use client";
import { Button } from "@heroui/react";
import React from "react";
import { footerUpTextByLang } from "@/constants/data";
import { Language, useLanguage } from "../hooks/language/useLanguage";

const FooterUp = () => {
  const { lang } = useLanguage();
  const data = footerUpTextByLang[lang as Language];

  if (!data) return null;

  return (
    <div className="bg-linear-to-r from-[#3d4adc] to-[#9aa2fa] py-12 px-10 shadow-xl mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {}
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {data.title}
          </h1>
          <p className="text-[#e0e0e0] text-md md:text-md">{data.desc}</p>
        </div>

        {}
        <div className="shrink-0">
          <Button
            as="a"
            href="#contact"
            className="bg-white text-[#525FE1] font-bold px-8 py-6 text-lg rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            {data.btnText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterUp;
