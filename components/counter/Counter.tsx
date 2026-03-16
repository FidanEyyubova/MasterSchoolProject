import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { counterByLang } from "@/constants/data";
import { Language, useLanguage } from "../../hooks/language/useLanguage";

const Counter: React.FC = () => {
  const { lang } = useLanguage();

  const service = counterByLang[lang as Language];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  if (!service || service.length === 0) return null;

  const titles = service[0].title;

  return (
    <div ref={ref} className="count-page py-2 text-white">
      <div className="container mx-auto px-4">
        {}
        <div className="grid grid-cols-2 min-[375px]:grid-cols-3 gap-15 items-center w-full">
          {}
          <div className="text-center space-y-1">
            <h3 className="font-bold text-2xl md:text-4xl">
              {inView && <CountUp start={0} end={85} duration={2.5} />}%+
            </h3>
            <p className="text-xs md:text-base">{titles[0]}</p>
          </div>

          {}
          <div className="text-center space-y-1">
            <h3 className="font-bold text-2xl md:text-4xl">
              {inView && <CountUp start={0} end={53} duration={2.5} />}
            </h3>
            <p className="text-xs md:text-base">{titles[1]}</p>
          </div>

          {}
          <div className="text-center space-y-1 col-span-2 min-[375px]:col-span-1">
            <h3 className="font-bold text-2xl md:text-4xl">
              {inView && <CountUp start={0} end={10} duration={2.5} />}K+
            </h3>
            <p className="text-xs md:text-base">{titles[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
