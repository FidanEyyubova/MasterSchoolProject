"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import Image from "next/image";
import { logo, navLinks } from "@/constants/data";
import ThemeToggle from "../hooks/theme/ThemeToggle";
import { Language, useLanguage } from "../hooks/language/useLanguage";

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { lang, changeLanguage } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    navLinks[lang].forEach((link) => {
      const element = document.getElementById(link.href.replace("#", ""));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [lang]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="h-20"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Image src={logo} width={110} height={40} alt="Logo" priority />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4 lg:gap-8" justify="center">
        {navLinks[lang].map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <NavbarItem key={link.name}>
              <Link
                href={link.href}
                className={`text-sm lg:text-base font-medium transition-colors ${
                  isActive ? "text-[#525FE1]" : "text-primary"
                }`}
              >
                {link.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <ThemeToggle />
        </NavbarItem>

        <NavbarItem>
          <Dropdown
            classNames={{
              content: "min-w-[60px] w-[60px] p-1",
            }}
          >
            <DropdownTrigger>
              <Button
                size="sm"
                className="bg-[#525FE1] text-white min-w-15 h-8 px-0"
                disableRipple
              >
                {lang.toUpperCase()}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language selection"
              onAction={(key) => changeLanguage(key as Language)}
              hideSelectedIcon
              itemClasses={{
                base: "py-1 px-0 text-tiny flex justify-center items-center",
                title: "w-full text-center",
              }}
            >
              {}
              {["az", "ru", "en"]
                .filter((l) => l !== lang)
                .map((l) => (
                  <DropdownItem key={l}>{l.toUpperCase()}</DropdownItem>
                ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarMenuToggle className="md:hidden" />
      </NavbarContent>

      <NavbarMenu className="pt-6">
        {navLinks[lang].map((link, index) => (
          <NavbarMenuItem key={`${link.name}-${index}`}>
            <Link
              className="w-full text-xl py-4"
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
