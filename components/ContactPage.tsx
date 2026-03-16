"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Clock, Mail, Phone } from "lucide-react";
import { addToast } from "@heroui/toast";
import { contactTextByLang } from "@/constants/data";
import { Language, useLanguage } from "../hooks/language/useLanguage";

const ContactPage = () => {
  const { lang } = useLanguage();
  const data = contactTextByLang[lang as Language];
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const getParts = (text: string) => {
    const lastIdx = text.lastIndexOf(" ");
    return {
      first: text.slice(0, lastIdx),
      last: text.slice(lastIdx),
    };
  };

  const mainTitle = getParts(data.capTitle);
  const formTitle = getParts(data.formTitle);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          addToast({
            title: data.toast.successTitle,
            description: data.toast.successDesc,
            color: "success",
          });
          formRef.current?.reset();
        },
        (error) => {
          addToast({
            title: data.toast.errorTitle,
            description: data.toast.errorDesc,
            color: "danger",
          });
          console.error("EmailJS Error:", error);
        },
      )
      .finally(() => setLoading(false));
  };

  return (
    <div id="contact" className="py-10">
      {}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-evenly gap-8 text-black">
        {}
        <div className="max-w-lg flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-3xl lg:text-[40px] font-bold leading-tight dark:text-white">
            {mainTitle.first}
            <span className="text-[#525FE1] block lg:inline">
              {mainTitle.last}
            </span>
          </h1>
          <div className="bg-[#9ba2f0] h-2 w-35 rounded-2xl mx-auto lg:mx-0"></div>
          <p className="text-[#808080] text-base lg:text-lg">{data.capDesc}</p>

          <div className="flex flex-col gap-6 mt-6">
            <a href="tel:0103103343" className="flex items-center gap-4 group">
              <div className="p-3 bg-[#f0f0f0] rounded-full group-hover:bg-[#525FE1] transition-colors">
                <Phone
                  size={20}
                  className="text-[#525FE1] group-hover:text-white"
                />
              </div>
              <div className="text-left">
                <p className="font-bold dark:text-white">{data.labels.phone}</p>
                <p className="text-[#808080] text-sm">010 310 33 43</p>
              </div>
            </a>

            <a
              href="mailto:info@masterschool.az"
              className="flex items-center gap-4 group"
            >
              <div className="p-3 bg-[#f0f0f0] rounded-full group-hover:bg-[#525FE1] transition-colors">
                <Mail
                  size={20}
                  className="text-[#525FE1] group-hover:text-white"
                />
              </div>
              <div className="text-left">
                <p className="font-bold dark:text-white">{data.labels.email}</p>
                <p className="text-[#808080] text-sm">info@masterschool.az</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#f0f0f0] rounded-full">
                <Clock size={20} className="text-[#525FE1]" />
              </div>
              <div className="text-left">
                <p className="font-bold dark:text-white">
                  {data.labels.workHours}
                </p>
                <p className="text-[#808080] text-sm">{data.labels.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="relative w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl dark:bg-[#12172e]">
          <div className="flex flex-col gap-3 mb-6">
            <h2 className="text-2xl font-bold dark:text-white">
              {formTitle.first}{" "}
              <span className="text-[#525FE1]">{formTitle.last}</span>
            </h2>
            <p className="text-[#808080] text-sm lg:text-base">
              {data.formDesc}
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder={data.labels.namePlaceholder}
              required
              className="h-12 p-3 border rounded-lg w-full bg-white dark:bg-[#020618] dark:text-white focus:ring-2 focus:ring-[#525FE1] outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder={data.labels.emailPlaceholder}
              required
              className="h-12 p-3 border rounded-lg w-full bg-white dark:bg-[#020618] dark:text-white focus:ring-2 focus:ring-[#525FE1] outline-none"
            />
            <input
              type="tel"
              name="user_phone"
              placeholder={data.labels.phonePlaceholder}
              required
              className="h-12 p-3 border rounded-lg w-full bg-white dark:bg-[#020618] dark:text-white focus:ring-2 focus:ring-[#525FE1] outline-none"
            />
            <textarea
              name="message"
              placeholder={data.labels.messagePlaceholder}
              required
              className="h-32 p-3 border rounded-lg w-full bg-white dark:bg-[#020618] dark:text-white focus:ring-2 focus:ring-[#525FE1] outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="h-12 bg-[#525FE1] text-white rounded-lg font-bold hover:bg-[#3f4dc9] transition disabled:opacity-50"
            >
              {loading ? data.labels.loadingBtn : data.labels.sendBtn}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
