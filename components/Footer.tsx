"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerByLang, logo } from "@/constants/data";
import { Language, useLanguage } from "../hooks/language/useLanguage";

const Footer = () => {
  const { lang } = useLanguage();
  const data = footerByLang[lang as Language];

  if (!data) return null;

  return (
    <footer className="w-full bg-white dark:bg-[#12172e] border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-12 py-12 md:py-16">
          {}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                width={130}
                height={45}
                alt="MasterSchool Logo"
                className="object-contain"
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-xs">
              {data.description}
            </p>
          </div>

          {}
          {data.sections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h4 className="text-base font-semibold text-gray-900 mb-6 border-b-2 border-[#525FE1] w-fit pb-1 dark:text-white">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-[#525FE1] transition-all duration-200"
                    >
                      {link.icon && (
                        <link.icon
                          size={18}
                          className="text-[#525FE1] mb-1 shrink-0 group-hover:scale-110 transition-transform"
                        />
                      )}
                      <span className="leading-snug">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MasterSchool, {data.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
