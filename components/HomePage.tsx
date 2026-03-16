"use client";
import { girl, homeText } from "@/constants/data";
import { Button } from "@heroui/react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Counter from "./counter/Counter";
import Link from "next/link";
import { Language, useLanguage } from "../hooks/language/useLanguage";

const HomePage = () => {
  const { lang } = useLanguage();

  const currentText = homeText[lang as Language][0];

  const [firstPart, secondPart] = currentText.title.split(",");

  return (
    <div id="home" className="pb-3">
      <div className="container mx-auto px-6 pt-8 flex flex-col-reverse md:flex-row items-center justify-evenly gap-8 text-black">
        <div className="max-w-lg flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-3xl md:text-[40px] font-bold leading-tight dark:text-white">
            {}
            {firstPart}
            {firstPart && ","}
            <span className="text-[#525FE1] block md:inline">
              {" "}
              {}
              {secondPart}
            </span>
          </h1>

          <p className="text-[#808080] text-base md:text-lg">
            {currentText.desc}
          </p>

          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <Button
              as="a"
              href="#about"
              className="text-white bg-black dark:bg-white dark:text-black font-semibold transition-transform duration-300 hover:scale-105"
            >
              {currentText.buttonOne}
            </Button>
            <Button
              className="group relative overflow-hidden bg-white border-2 border-[#525fe1] text-[#525fe1] dark:bg-[#525fe1] font-semibold transition-all duration-300 min-w-20"
              as={Link}
              href="#contact"
            >
              <span className="absolute inset-0 bg-[#525fe1] dark:bg-white -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative z-10 group-hover:hidden dark:text-white">
                {currentText.buttonTwo}
              </span>
              <span className="relative z-10 hidden group-hover:block text-white dark:text-[#525fe1]">
                <Phone size={20} />
              </span>
            </Button>
          </div>
        </div>

        <div className="relative w-full max-w-75 md:max-w-75 hidden md:block">
          <Image
            src={girl}
            alt="student-girl"
            width={400}
            height={400}
            className="w-full h-auto object-cover rounded-2xl"
            priority
          />
        </div>
      </div>

      <div className="relative w-full pb-0 lg:pb-20">
        <div
          className="bg-[#525fe1] py-5 flex items-center justify-center 
               shadow-lg 
               relative lg:absolute sm:px-4 -bottom-5 sm:-bottom-10 md:bottom-1 lg:-bottom-9 w-full"
        >
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
