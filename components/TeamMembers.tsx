"use client";
import { teamTextByLang } from "@/constants/data";
import TeamSlider from "./card/CardContainerTwo";
import { Language, useLanguage } from "@/hooks/language/LanguageContext";

const TeamMembers = () => {
  const { lang } = useLanguage();
  const teamData = teamTextByLang[lang as Language][0];

  if (!teamData) return null;

  const lastSpaceIndex = teamData.capTitle.lastIndexOf(" ");

  const firstPart = teamData.capTitle.slice(0, lastSpaceIndex);

  const highlightedPart = teamData.capTitle.slice(lastSpaceIndex);

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 pt-10"
      id="team"
    >
      <div className="max-w-2xl flex flex-col items-center text-center gap-4">
        <h1 className="text-3xl md:text-[40px] font-bold leading-tight">
          {firstPart}
          <span className="text-[#525FE1] block md:inline">
            {highlightedPart}
          </span>
        </h1>

        <div className="bg-[#9ba2f0] h-2 w-40 rounded-2xl"></div>

        <p className="text-[#808080] text-base md:text-lg">
          {teamData.capDesc}
        </p>
      </div>

      <div className="w-full flex justify-center mt-8">
        <TeamSlider />
      </div>
    </div>
  );
};

export default TeamMembers;
