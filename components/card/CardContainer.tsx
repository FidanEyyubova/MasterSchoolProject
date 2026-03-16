"use client";
import { servicesByLang } from "@/constants/data";
import { Language, useLanguage } from "@/hooks/language/LanguageContext";
import { Card, CardHeader, CardBody } from "@heroui/react";

export default function CardContainer() {
  const { lang } = useLanguage();

  const service = servicesByLang[lang as Language];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
      {service.map((item) => (
       <Card
  key={item.id}
  style={
    {
      "--hover-border": item.color,
    } as React.CSSProperties
  }
  className="max-w-full h-45 cursor-pointer  transition-all duration-300 group overflow-hidden
  hover:bg-linear-to-r hover:from-[#3d4adc] hover:to-[#9aa2fa]"
>
          <div className="h-full flex flex-col justify-between px-2">
            <CardHeader className="flex items-center gap-3">
              <div
                className="text-2xl transition-colors bg-(--bg) p-2 rounded-xl text-white"
                style={
                  {
                    "--bg": item.color,
                  } as React.CSSProperties
                }
              >
                {item.icon && <item.icon />}
              </div>

              <div className="flex flex-col">
                <p className="text-xl font-bold transition-colors group-hover:text-white">
                  {item.title}
                </p>
              </div>
            </CardHeader>

            <CardBody className="p-0 px-2">
              <p className="text-[15px] transition-colors text-[#808080] group-hover:text-white/90 text-center">
                {item.description}
              </p>
            </CardBody>
          </div>
        </Card>
      ))}
    </div>
  );
}
