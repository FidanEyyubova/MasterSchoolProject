import { Language } from "@/hooks/language/useLanguage";
import {
  Book,
  Users,
  Laptop,
  GraduationCap,
  Backpack,
  Headphones,
  LucideIcon,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
export const logo = "/assets/logo.png";
export const girl = "/assets/girl1.png";
export const masterPic = "/assets/mezunmaster.png";

//    ---NavLink---    //
interface NavLink {
  name: string;
  href: string;
}
export const navLinks: Record<Language, NavLink[]> = {
  az: [
    { name: "Ana səhifə", href: "#home" },
    { name: "Haqqımızda", href: "#about" },
    { name: "Xidmətlər", href: "#services" },
    { name: "Müəllimlər", href: "#team" },
    { name: "Filiallar", href: "#adress" },
    { name: "Əlaqə", href: "#contact" },
  ],
  ru: [
    { name: "Главная", href: "#home" },
    { name: "О нас", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Преподаватели", href: "#team" },
    { name: "Филиалы", href: "#adress" },
    { name: "Контакты", href: "#contact" },
  ],
  en: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Branches", href: "#adress" },
    { name: "Contact", href: "#contact" },
  ],
};

//    ---Home Section---    //
interface HomeText {
  title: string;
  desc: string;
  buttonOne: string;
  buttonTwo: string;
}
interface CounterText {
  title: string[];
}
export const homeText: Record<Language, HomeText[]> = {
  az: [
    {
      title: "Peşəkar təhsil, parlaq gələcək!",
      desc: "Sənaye peşəkarları tərəfindən hazırlanmış ən müasir kurslarla karyeranızı dəyişdirin. Öz tempinizdə öyrənin və arzularınıza nail olun.",
      buttonOne: "Haqqımızda",
      buttonTwo: "Əlaqə",
    },
  ],
  ru: [
    {
      title: "Профессиональное образование, светлое будущее!",
      desc: "Измените свою карьеру с помощью современных курсов, разработанных профессионалами индустрии. Учитесь в своем темпе и достигайте своих целей.",
      buttonOne: "О нас",
      buttonTwo: "Контакты",
    },
  ],
  en: [
    {
      title: "Professional Education, Bright Future!",
      desc: "Transform your career with cutting-edge courses designed by industry professionals. Learn at your own pace and achieve your dreams.",
      buttonOne: "About Us",
      buttonTwo: "Contact",
    },
  ],
};
export const counterByLang: Record<Language, CounterText[]> = {
  az: [{ title: ["İmtahan nəticələri", "Bütün Komanda", "Bütün tələbələr"] }],
  ru: [{ title: ["Результаты экзаменов", "Вся команда", "Все студенты"] }],
  en: [{ title: ["Exam results", "All Team", "All students"] }],
};

//    ---About Section---    //
interface AboutText {
  titleOne: string;
  desc: string;
  titleTwo: string;
  descTwo: string[];
}
export const aboutByLang: Record<Language, AboutText[]> = {
  az: [
    {
      titleOne: "Master School – 10 illik təcrübə, yüzlərlə uğur!",
      desc: "Artıq 10 ildir ki, Master School Təhsil Mərkəzi təhsildə keyfiyyətin, peşəkarlığın və uğurun ünvanıdır...",
      titleTwo: "Uğurlarımızla fəxr edirik:",
      descTwo: [
        "Magistratura üzrə son 6 ildə həm Azərbaycan, həm də Rus bölmələri üzrə 11 Respublika birincimiz olub.",
        "Həmçinin Dövlət qulluğu və Doktorantura istiqamətlərində onlarla Respublika birinciliyi qazanmışıq.",
      ],
    },
  ],
  ru: [
    {
      titleOne: "Master School – 10 лет опыта, сотни успехов!",
      desc: "Вот уже 10 лет Образовательный Центр Master School является адресом качества, профессионализма и успеха в образовании...",
      titleTwo: "Мы гордимся своими достижениями:",
      descTwo: [
        "За последние 6 лет в магистратуре у нас было 11 первых мест по республике как в азербайджанском, так и в русском секторах.",
        "Мы также завоевали десятки первых мест по республике в направлениях Государственной службы и Докторантуры.",
      ],
    },
  ],
  en: [
    {
      titleOne:
        "Master School – 10 years of experience, hundreds of successes!",
      desc: "For 10 years, Master School Education Center has been the address of quality, professionalism, and success in education...",
      titleTwo: "We are proud of our achievements:",
      descTwo: [
        "In the last 6 years, we have had 11 National first-place winners in Master's degree programs across both Azerbaijani and Russian sectors.",
        "We have also achieved dozens of first-place rankings in Civil Service and Doctorate programs.",
      ],
    },
  ],
};


//    ---Service Section---    //
export interface Service {
  id: number;
  title: string;
  color: string;
  icon: LucideIcon;
  description: string;
}

interface ServiceCap {
  capTitle: string;
  capDesc: string;
}
export const capTextByLang: Record<Language, ServiceCap[]> = {
  az: [
    {
      capTitle: "Nə Təklif Edirik?",
      capDesc: "Tələbələrimizə ən yaxşı təhsil xidmətlərini təqdim edirik",
    },
  ],
  ru: [
    {
      capTitle: "Что мы предлагаем?",
      capDesc: "Мы предлагаем нашим студентам лучшие образовательные услуги",
    },
  ],
  en: [
    {
      capTitle: "What Do We Offer?",
      capDesc: "We provide the best educational services to our students",
    },
  ],
};
export const servicesByLang: Record<Language, Service[]> = {
  az: [
    {
      id: 1,
      title: "Magistratura",
      color: "#9ba2f0",
      icon: Book,
      description:
        "Magistratura hazırlığı 3 fənn üzrə tədris edilir: Məntiq, İnformatika, Xarici dil. Hər fənn həftədə 2 dəfə olmaqla 90 dəqiqə keçirilir.",
    },
    {
      id: 2,
      title: "Dövlət Qulluğu",
      color: "#9ba2f0",
      icon: Users,
      description:
        "Həftədə 2 dəfə, 90 dəqiqə olmaqla keçirilir. Hər həftə sonu sınaq imtahanları təşkil edilir.",
    },
    {
      id: 3,
      title: "Miq və Sertifikasiya",
      color: "#9ba2f0",
      icon: Laptop,
      description:
        "Dərslərimiz həftədə 2 dəfə, 1.5 saat olmaqla keçirilir. İlk dərs ödənişsiz sınaq dərsidir.",
    },
    {
      id: 4,
      title: "Abituriyent",
      color: "#9ba2f0",
      icon: GraduationCap,
      description:
        "Dərslərimiz həftədə 2 dəfə, 1.5 saat olmaqla keçirilir. İlk dərs ödənişsiz sınaq dərsidir.",
    },
    {
      id: 5,
      title: "Məktəbəqədər",
      color: "#9ba2f0",
      icon: Backpack,
      description:
        "Dərslərimiz həftədə 2 dəfə, 1.5 saat olmaqla keçirilir. İlk dərs ödənişsiz sınaq dərsidir.",
    },
    {
      id: 6,
      title: "İELTS",
      color: "#9ba2f0",
      icon: Headphones,
      description:
        "Həftədə 2 dəfə, 1.5 saatlıq dərslər və əlavə danışıq klubları. Hər ayın sonu imtahan keçirilir.",
    },
  ],
  ru: [
    {
      id: 1,
      title: "Магистратура",
      color: "#9ba2f0",
      icon: Book,
      description:
        "Подготовка к магистратуре по 3 предметам: Логика, Информатика, Иностр. язык. Занятия 2 раза в неделю по 90 минут.",
    },
    {
      id: 2,
      title: "Госслужба",
      color: "#9ba2f0",
      icon: Users,
      description:
        "Занятия 2 раза в неделю, 90 минут. Еженедельные пробные экзамены.",
    },
    {
      id: 3,
      title: "Миг и Сертификация",
      color: "#9ba2f0",
      icon: Laptop,
      description:
        "Занятия 2 раза в неделю по 1.5 часа. Первый урок бесплатный.",
    },
    {
      id: 4,
      title: "Абитуриент",
      color: "#9ba2f0",
      icon: GraduationCap,
      description:
        "Занятия 2 раза в неделю по 1.5 часа. Первый урок бесплатный.",
    },
    {
      id: 5,
      title: "Дошкольное",
      color: "#9ba2f0",
      icon: Backpack,
      description:
        "Занятия 2 раза в неделю по 1.5 часа. Первый урок бесплатный.",
    },
    {
      id: 6,
      title: "IELTS",
      color: "#9ba2f0",
      icon: Headphones,
      description:
        "Занятия 2 раза в неделю по 1.5 часа, разговорные клубы и ежемесячные экзамены.",
    },
  ],
  en: [
    {
      id: 1,
      title: "Master's Degree",
      color: "#9ba2f0",
      icon: Book,
      description:
        "Preparation in 3 subjects: Logic, Informatics, Foreign language. Classes twice a week for 90 minutes.",
    },
    {
      id: 2,
      title: "Public Service",
      color: "#9ba2f0",
      icon: Users,
      description:
        "Classes twice a week for 90 minutes. Weekly mock exams included.",
    },
    {
      id: 3,
      title: "Miq & Certification",
      color: "#9ba2f0",
      icon: Laptop,
      description: "Classes twice a week for 1.5 hours. First lesson is free.",
    },
    {
      id: 4,
      title: "Abiturient",
      color: "#9ba2f0",
      icon: GraduationCap,
      description: "Classes twice a week for 1.5 hours. First lesson is free.",
    },
    {
      id: 5,
      title: "Preschool",
      color: "#9ba2f0",
      icon: Backpack,
      description: "Classes twice a week for 1.5 hours. First lesson is free.",
    },
    {
      id: 6,
      title: "IELTS",
      color: "#9ba2f0",
      icon: Headphones,
      description:
        "Twice a week for 1.5 hours, plus speaking clubs and monthly exams.",
    },
  ],
};

//    ---Team Section---    //
export interface TeamMember {
  id: number;
  title: string;
  img: string;
}

interface TeamMemberCap {
  capTitle: string;
  capDesc: string;
}

export const teamTextByLang: Record<Language, TeamMemberCap[]> = {
  az: [
    {
      capTitle: "Bizim Komanda",
      capDesc:
        "Peşəkar və təcrübəli mütəxəssislərdən ibarət komandamız sizə ən yaxşı xidməti təqdim etməyə hazırdır",
    },
  ],
  ru: [
    {
      capTitle: "Наша Команда",
      capDesc:
        "Наша команда профессиональных и опытных специалистов готова предоставить вам лучший сервис",
    },
  ],
  en: [
    {
      capTitle: "Our Team",
      capDesc:
        "Our team of professional and experienced specialists is ready to provide you with the best service",
    },
  ],
};
export const team: TeamMember[] = [
  { id: 1, title: "Abdı Dilbər", img: "/team/team1.jpg" },
  { id: 2, title: "Adil Alışlı", img: "/team/team2.jpg" },
  { id: 3, title: "Amin Həsənov", img: "/team/team3.jpg" },
  { id: 4, title: "Atəş Məcnunov", img: "/team/team4.jpg" },
  { id: 5, title: "Aydan Şəkixanlı", img: "/team/team5.jpg" },
  { id: 6, title: "Aytən Həşimova", img: "/team/team6.jpg" },
  { id: 7, title: "Azadə Əsgərli", img: "/team/team7.jpg" },
  { id: 8, title: "Azadə Kiçibəyova", img: "/team/team8.jpg" },
  { id: 9, title: "Bahar Məmmədova", img: "/team/team9.jpg" },
  { id: 10, title: "Cavid Cəfərli", img: "/team/team10.jpg" },
  { id: 11, title: "Cavid Cəlilli", img: "/team/team11.jpg" },
  { id: 12, title: "Cəvahir Səfərova", img: "/team/team12.jpg" },
  { id: 13, title: "Çingiz Çingizzadə", img: "/team/team13.jpg" },
  { id: 14, title: "Elvira Məmmədova", img: "/team/team14.jpg" },
  { id: 15, title: "Emil Aydinov", img: "/team/team15.jpg" },
  { id: 16, title: "Əkbər Səmədzadə", img: "/team/team16.jpg" },
  { id: 17, title: "Fidan Xanım Əhmədzadə", img: "/team/team17.jpg" },
  { id: 18, title: "Gülnar Əhmədova", img: "/team/team18.jpg" },
  { id: 19, title: "İlkanə Qasımzadə", img: "/team/team19.jpg" },
  { id: 20, title: "İlkin Məhərrəmov", img: "/team/team20.jpg" },
  { id: 21, title: "Inci Abdullayeva", img: "/team/team21.jpg" },
  { id: 22, title: "Könül Qəniyeva", img: "/team/team22.jpg" },
  { id: 23, title: "Maarifə Gülməmmədova", img: "/team/team23.jpg" },
  { id: 24, title: "Mehriban Fərzəliyeva", img: "/team/team24.jpg" },
  { id: 25, title: "Məhəmmədəli Məmmədov", img: "/team/team26.jpg" },
  { id: 27, title: "Məmməd Mirzəyev", img: "/team/team27.jpg" },
  { id: 28, title: "Nərgiz Hüseynova", img: "/team/team28.jpg" },
  { id: 29, title: "Nərgiz Rəhimova", img: "/team/team29.jpg" },
  { id: 30, title: "Nigar Abbasova", img: "/team/team30.jpg" },
  { id: 31, title: "Nigar Hüseynli", img: "/team/team31.jpg" },
  { id: 32, title: "Nihad Zeynalı", img: "/team/team32.jpg" },
  { id: 33, title: "Nişat Zülfüqarlı", img: "/team/team33.webp" },
  { id: 34, title: "Nuranə Məmmədzadə", img: "/team/team34.webp" },
  { id: 35, title: "Orxan Əlizadə", img: "/team/team35.webp" },
  { id: 36, title: "Pərvanə Əliyeva", img: "/team/team36.webp" },
  { id: 37, title: "Qəmzə Yahyayeva", img: "/team/team37.webp" },
  { id: 38, title: "Rəfiqə Abdullazadə", img: "/team/team38.webp" },
  { id: 39, title: "Rəşad Kazımzadə", img: "/team/team39.webp" },
  { id: 40, title: "Rəvan Quliyev", img: "/team/team40.webp" },

  { id: 41, title: "Şamama Məhərrəmi", img: "/team/team41.webp" },
  { id: 42, title: "Samid Mirsaaabov", img: "/team/team42.webp" },
  { id: 43, title: "Seyid Rəhimov", img: "/team/team43.webp" },
  { id: 44, title: "Seymur Əliyev", img: "/team/team44.webp" },
  { id: 45, title: "Şəhriyar Kərimli", img: "/team/team45.webp" },
  { id: 46, title: "Səriyyə Ağalarova", img: "/team/team46.webp" },
  { id: 47, title: "Sitara orucova", img: "/team/team47.jpg" },
  { id: 48, title: "Tamerlan Alanlı", img: "/team/team48.webp" },
  { id: 49, title: "Turanə Ağayeva", img: "/team/team49.webp" },
  { id: 50, title: "Türkan İsmayılova", img: "/team/team50.webp" },
  { id: 51, title: "Rəvan Quliyev", img: "/team/team51.png" },
  { id: 52, title: "Xumar Şirəliyeva", img: "/team/team52.webp" },
  { id: 53, title: "Xuraman Sultanova", img: "/team/team53.webp" },
];

//    ---Partner Section---    //
export interface Partner {
  id: number;
  img: string;
  title: string;
  description: string;
}
export interface PartnerCap {
  capTitle: string;
  capDesc: string;
}
export const partnerTextByLang: Record<Language, PartnerCap[]> = {
  az: [
    {
      capTitle: "Bizim Partnyorlarımız",
      capDesc:
        "Keyfiyyətli təhsil təcrübəsini təmin etmək üçün sənayenin öndə gedən qurumları və universitetləri ilə əməkdaşlıq edirik.",
    },
  ],
  ru: [
    {
      capTitle: "Наши Партнеры",
      capDesc:
        "Мы сотрудничаем с ведущими организациями и университетами отрасли, чтобы обеспечить качественный образовательный опыт.",
    },
  ],
  en: [
    {
      capTitle: "Our Partners",
      capDesc:
        "We collaborate with industry-leading organizations and universities to ensure a high-quality educational experience.",
    },
  ],
};
export const partnersByLang: Record<Language, Partner[]> = {
  az: [
    {
      id: 1,
      img: "/assets/bdu.jpeg",
      title: "Bakı Dövlət Universiteti",
      description:
        "Bakı Dövlət Universiteti Azərbaycanın ilk və ən qədim ali təhsil müəssisəsi olaraq...",
    },
    {
      id: 2,
      img: "/assets/unec.png",
      title: "Azərbaycan Dövlət İqtisad Universiteti",
      description:
        "Azərbaycan Dövlət İqtisad Universiteti iqtisadiyyat və biznes sahəsində...",
    },
  ],
  ru: [
    {
      id: 1,
      img: "/assets/bdu.jpeg",
      title: "Бакинский государственный университет",
      description:
        "Бакинский государственный университет — старейшее высшее учебное заведение Азербайджана...",
    },
    {
      id: 2,
      img: "/assets/unec.png",
      title: "Азербайджанский государственный экономический университет",
      description:
        "UNEC является крупнейшим высшим учебным заведением Азербайджана...",
    },
  ],
  en: [
    {
      id: 1,
      img: "/assets/bdu.jpeg",
      title: "Baku State University",
      description:
        "Baku State University is the first and oldest higher education institution in Azerbaijan...",
    },
    {
      id: 2,
      img: "/assets/unec.png",
      title: "Azerbaijan State University of Economics",
      description:
        "UNEC is the largest higher education institution in Azerbaijan specializing in economics...",
    },
  ],
};

//    ---Address Section---    //
export interface Address {
  id: number;
  title: string;
  phoneNum: string;
  address: string;
  addressImg: string[];
}

export interface AddressCap {
  capTitle: string;
  capDesc: string;
}
export const addressTextByLang: Record<Language, AddressCap[]> = {
  az: [
    {
      capTitle: "Filiallarımız",
      capDesc: "Şəhərin müxtəlif nöqtələrində sizə xidmət göstəririk",
    },
  ],
  ru: [
    {
      capTitle: "Наши Филиалы",
      capDesc: "Мы обслуживаем вас в разных точках города",
    },
  ],
  en: [
    {
      capTitle: "Our Branches",
      capDesc: "We serve you at various locations across the city",
    },
  ],
};
export const addressByLang: Record<Language, Address[]> = {
  az: [
    {
      id: 1,
      title: "28 May",
      phoneNum: "010 310 33 43",
      address: "Nizami Küç. 203B, Af Business House 5-ci mərtəbə",
      addressImg: [
        "/address/28may/image.png",
        "/address/28may/image2.jpeg",
        "/address/28may/image3.jpeg",
      ],
    },
    {
      id: 2,
      title: "Elmlər",
      phoneNum: "077 537 24 51",
      address: "30a Zahid Xəlilov Küçəsi, Bakı",
      addressImg: [
        "/address/elmler/image.png",
        "/address/elmler/image2.jpeg",
        "/address/elmler/image3.webp",
      ],
    },
    {
      id: 3,
      title: "Hövsan",
      phoneNum: "070-957-58-78",
      address: "Hövsan qəsəbəsi",
      addressImg: [
        "/address/hovsan/img1.webp",
        "/address/hovsan/img2.webp",
        "/address/hovsan/img3.webp",
      ],
    },
    {
      id: 4,
      title: "Günəşli",
      phoneNum: "070 678 55 75",
      address:
        "Suraxanı rayonu, Yeni Günəşli qəsəbəsi, Samir Cəfərov küçəsi, 33-cü polis bölməsi ilə üzbəüz",
      addressImg: [
        "/address/gunesli/img1.png",
        "/address/gunesli/img2.png",
        "/address/gunesli/img3.png",
      ],
    },
    {
      id: 5,
      title: "Mida",
      phoneNum: "070-610-33-43",
      address:
        "Yasamal rayonu, MİDA yaşayış kompleksi, bina 3 (133 və 161 saylı məktəblərin yaxınlığı)",
      addressImg: [
        "/address/hovsan/img1.web",
        "/address/hovsan/img2.web",
        "/address/hovsan/img3.web",
      ],
    },
  ],
  ru: [
    {
      id: 1,
      title: "28 Мая",
      phoneNum: "010 310 33 43",
      address: "Ул. Низами 203B, Af Business House, 5-й этаж",
      addressImg: [
        "/address/28may/image.png",
        "/address/28may/image2.jpeg",
        "/address/28may/image3.jpeg",
      ],
    },
    {
      id: 2,
      title: "Элмляр",
      phoneNum: "077 537 24 51",
      address: "Ул. Захида Халилова 30a, Баку",
      addressImg: [
        "/address/elmler/image.png",
        "/address/elmler/image2.jpeg",
        "/address/elmler/image3.webp",
      ],
    },
    {
      id: 3,
      title: "Говсаны",
      phoneNum: "070-957-58-78",
      address: "Поселок Говсаны",
      addressImg: [
        "/address/hovsan/img1.webp",
        "/address/hovsan/img2.webp",
        "/address/hovsan/img3.webp",
      ],
    },
    {
      id: 4,
      title: "Гюнешли",
      phoneNum: "070 678 55 75",
      address:
        "Сураханский район, пос. Ени Гюнешли, ул. Самира Джафарова, напротив 33-го отделения полиции",
      addressImg: [
        "/address/gunesli/img1.png",
        "/address/gunesli/img2.png",
        "/address/gunesli/img3.png",
      ],
    },
    {
      id: 5,
      title: "Мида",
      phoneNum: "070-610-33-43",
      address:
        "Ясамальский район, жилой комплекс MIDA, здание 3 (рядом со школами №133 и №161)",
      addressImg: [
        "/address/hovsan/img1.web",
        "/address/hovsan/img2.web",
        "/address/hovsan/img3.web",
      ],
    },
  ],
  en: [
    {
      id: 1,
      title: "28 May",
      phoneNum: "010 310 33 43",
      address: "203B Nizami St., Af Business House, 5th floor",
      addressImg: [
        "/address/28may/image.png",
        "/address/28may/image2.jpeg",
        "/address/28may/image3.jpeg",
      ],
    },
    {
      id: 2,
      title: "Elmlar",
      phoneNum: "077 537 24 51",
      address: "30a Zahid Khalilov St., Baku",
      addressImg: [
        "/address/elmler/image.png",
        "/address/elmler/image2.jpeg",
        "/address/elmler/image3.webp",
      ],
    },
    {
      id: 3,
      title: "Hovsan",
      phoneNum: "070-957-58-78",
      address: "Hovsan settlement",
      addressImg: [
        "/address/hovsan/img1.webp",
        "/address/hovsan/img2.webp",
        "/address/hovsan/img3.webp",
      ],
    },
    {
      id: 4,
      title: "Guneshli",
      phoneNum: "070 678 55 75",
      address:
        "Surakhani district, Yeni Guneshli settlement, Samir Jafarov St., opposite the 33rd police station",
      addressImg: [
        "/address/gunesli/img1.png",
        "/address/gunesli/img2.png",
        "/address/gunesli/img3.png",
      ],
    },
    {
      id: 5,
      title: "Mida",
      phoneNum: "070-610-33-43",
      address:
        "Yasamal district, MIDA residential complex, building 3 (near schools No. 133 and 161)",
      addressImg: [
        "/address/hovsan/img1.web",
        "/address/hovsan/img2.web",
        "/address/hovsan/img3.web",
      ],
    },
  ],
};


//    ---Applicant Section---    //
export interface Applicant {
  id: number;
  img: string;
}

export interface ApplicantCap {
  capTitle: string;
  capDesc: string;
}
export const applicant: Applicant[] = [
  {
    id: 1,
    img: "/applicant/img1.png",
  },
  {
    id: 2,
    img: "/applicant/img2.png",
  },
  {
    id: 3,
    img: "/applicant/img3.png",
  },
  {
    id: 4,
    img: "/applicant/img4.png",
  },
  {
    id: 5,
    img: "/applicant/img5.png",
  },
  {
    id: 6,
    img: "/applicant/img6.png",
  },
  {
    id: 7,
    img: "/applicant/img7.png",
  },
  {
    id: 8,
    img: "/applicant/img8.png",
  },
  {
    id: 9,
    img: "/applicant/img9.png",
  },
  {
    id: 10,
    img: "/applicant/img10.png",
  },
  {
    id: 11,
    img: "/applicant/img11.png",
  },
  {
    id: 12,
    img: "/applicant/img12.png",
  },
  {
    id: 13,
    img: "/applicant/img13.png",
  },
  {
    id: 14,
    img: "/applicant/img14.png",
  },
  {
    id: 15,
    img: "/applicant/img15.png",
  },
];
export const capApplicantTextByLang: Record<Language, ApplicantCap[]> = {
  az: [
    {
      capTitle: "Abituriyent Nəticələrimiz",
      capDesc: "Kursumuzun olmazsa olmazı yüksək nəticələrimiz",
    },
  ],
  ru: [
    {
      capTitle: "Результаты наших абитуриентов",
      capDesc: "Высокие результаты — неотъемлемая часть нашего курса",
    },
  ],
  en: [
    {
      capTitle: "Our Student Results",
      capDesc: "High achievements are the essential core of our courses",
    },
  ],
};

//    ---Master Section---    //
export interface MasterCap {
  capTitle: string;
  capDesc: string;
}
export interface Master {
  id: number;
  img: string;
}
export const capMasterTextByLang: Record<Language, MasterCap[]> = {
  az: [
    {
      capTitle: "Magistratura Nəticələrimiz",
      capDesc: "Kursumuzun olmazsa olmazı yüksək nəticələrimiz",
    },
  ],
  ru: [
    {
      capTitle: "Результаты Магистратуры",
      capDesc: "Высокие результаты — неотъемлемая часть нашего курса",
    },
  ],
  en: [
    {
      capTitle: "Master's Degree Results",
      capDesc: "High achievements are the essential core of our courses",
    },
  ],
};
export const master: Master[] = [
  {
    id: 1,
    img: "/master/img1.webp",
  },
  {
    id: 2,
    img: "/master/img2.webp",
  },
  {
    id: 3,
    img: "/master/img3.webp",
  },
  {
    id: 4,
    img: "/master/img4.webp",
  },
  {
    id: 5,
    img: "/master/img5.webp",
  },
  {
    id: 6,
    img: "/master/img6.webp",
  },
  {
    id: 7,
    img: "/master/img7.webp",
  },
  {
    id: 8,
    img: "/master/img8.webp",
  },
  {
    id: 9,
    img: "/master/img9.webp",
  },
];

//    ---Book Section---    //
export interface BookCap {
  capTitle: string;
  capDesc: string;
}

export interface Book {
  id: number;
  img: string;
  title: string;
  desc: string;
  badge: string;
}
export const bookTextByLang: Record<Language, BookCap[]> = {
  az: [
    {
      capTitle: "Bizim Nəşrlərimiz",
      capDesc:
        "Artıq 10 ildir ki, Master School Təhsil Mərkəzi təhsildə keyfiyyətin, peşəkarlığın və uğurun ünvanıdır...",
    },
  ],
  ru: [
    {
      capTitle: "Наши Издания",
      capDesc:
        "Вот уже 10 лет Образовательный Центр Master School является адресом качества, профессионализма и успеха в образовании...",
    },
  ],
  en: [
    {
      capTitle: "Our Publications",
      capDesc:
        "For 10 years, Master School Education Center has been the address of quality, professionalism, and success in education...",
    },
  ],
};
export const booksByLang: Record<Language, Book[]> = {
  az: [
    {
      id: 1,
      img: "/book/logic.webp",
      title: "Məntiq",
      desc: "Abituriyentlər üçün",
      badge: "MƏNTİQ",
    },
    {
      id: 2,
      img: "/book/az(abituriyent).webp",
      title: "Azərbaycan dili",
      desc: "Abituriyent üçün",
      badge: "AZƏRBAYCAN DİLİ",
    },
    {
      id: 3,
      img: "/book/english(doktorantura).webp",
      title: "İngilis dili",
      desc: "Doktorant üçün",
      badge: "İNGİLİS DİLİ",
    },
    {
      id: 4,
      img: "/book/infor2.webp",
      title: "İnformatika",
      desc: "Magistr, dövlət qulluğu üçün",
      badge: "İNFORMATİKA",
    },
    {
      id: 5,
      img: "/book/mentiq.webp",
      title: "Məntiq",
      desc: "Magistr, dövlət qulluğu üçün",
      badge: "MƏNTİQ",
    },
    {
      id: 6,
      img: "/book/english(magistr).webp",
      title: "İngilis dili",
      desc: "Magistr üçün",
      badge: "İNGİLİS DİLİ",
    },
    {
      id: 7,
      img: "/book/rus(magistr).webp",
      title: "Rus dili",
      desc: "Magistr üçün",
      badge: "RUS DİLİ",
    },
    {
      id: 8,
      img: "/book/tarix.webp",
      title: "Tarix",
      desc: "Abituriyent üçün",
      badge: "TARİX",
    },
  ],
  ru: [
    {
      id: 1,
      img: "/book/logic.webp",
      title: "Логика",
      desc: "Для абитуриентов",
      badge: "ЛОГИКА",
    },
    {
      id: 2,
      img: "/book/az(abituriyent).webp",
      title: "Азербайджанский язык",
      desc: "Для абитуриентов",
      badge: "АЗЕРБАЙДЖАНСКИЙ",
    },
    {
      id: 3,
      img: "/book/english(doktorantura).webp",
      title: "Английский язык",
      desc: "Для докторантов",
      badge: "АНГЛИЙСКИЙ",
    },
    {
      id: 4,
      img: "/book/infor2.webp",
      title: "Информатика",
      desc: "Для магистров и госслужащих",
      badge: "ИНФОРМАТИКА",
    },
    {
      id: 5,
      img: "/book/mentiq.webp",
      title: "Логика",
      desc: "Для магистров и госслужащих",
      badge: "ЛОГИКА",
    },
    {
      id: 6,
      img: "/book/english(magistr).webp",
      title: "Английский язык",
      desc: "Для магистров",
      badge: "АНГЛИЙСКИЙ",
    },
    {
      id: 7,
      img: "/book/rus(magistr).webp",
      title: "Русский язык",
      desc: "Для магистров",
      badge: "РУССКИЙ ЯЗЫК",
    },
    {
      id: 8,
      img: "/book/tarix.webp",
      title: "История",
      desc: "Для абитуриентов",
      badge: "ИСТОРИЯ",
    },
  ],
  en: [
    {
      id: 1,
      img: "/book/logic.webp",
      title: "Logic",
      desc: "For applicants",
      badge: "LOGIC",
    },
    {
      id: 2,
      img: "/book/az(abituriyent).webp",
      title: "Azerbaijani language",
      desc: "For applicants",
      badge: "AZERBAIJANI",
    },
    {
      id: 3,
      img: "/book/english(doktorantura).webp",
      title: "English language",
      desc: "For doctoral students",
      badge: "ENGLISH",
    },
    {
      id: 4,
      img: "/book/infor2.webp",
      title: "Informatics",
      desc: "For masters and public service",
      badge: "INFORMATICS",
    },
    {
      id: 5,
      img: "/book/mentiq.webp",
      title: "Logic",
      desc: "For masters and public service",
      badge: "LOGIC",
    },
    {
      id: 6,
      img: "/book/english(magistr).webp",
      title: "English language",
      desc: "For masters",
      badge: "ENGLISH",
    },
    {
      id: 7,
      img: "/book/rus(magistr).webp",
      title: "Russian language",
      desc: "For masters",
      badge: "RUSSIAN",
    },
    {
      id: 8,
      img: "/book/tarix.webp",
      title: "History",
      desc: "For applicants",
      badge: "HISTORY",
    },
  ],
};
//    ---Contact Section---    //
export interface ContactLabels {
  phone: string;
  email: string;
  workHours: string;
  hours: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  sendBtn: string;
  loadingBtn: string;
}

export interface ContactToast {
  successTitle: string;
  successDesc: string;
  errorTitle: string;
  errorDesc: string;
}

export interface ContactData {
  capTitle: string;
  capDesc: string;
  formTitle: string;
  formDesc: string;
  labels: ContactLabels;
  toast: ContactToast;
}
export const contactTextByLang: Record<Language, any> = {
  az: {
    capTitle: "Bizimlə Əlaqə",
    capDesc:
      "Bizimlə əlaqə saxlayın və suallarınızı bizə göndərin. Komandamız ən qısa zamanda sizə cavab verəcək.",
    formTitle: "Mesaj Göndərin",
    formDesc:
      "Formu doldurun və bizimlə əlaqə saxlayın. Ən qısa zamanda sizə geri dönüş edəcəyik.",
    labels: {
      phone: "Telefon",
      email: "Email",
      workHours: "İş Saatları",
      hours: "08:30 - 20:00",
      namePlaceholder: "Ad və Soyad",
      emailPlaceholder: "Email",
      phonePlaceholder: "Telefon",
      messagePlaceholder: "Mesajınız...",
      sendBtn: "Göndər",
      loadingBtn: "Gönderilir...",
    },
    toast: {
      successTitle: "Uğurlu əməliyyat",
      successDesc: "Mesajınız komandaya çatdırıldı.",
      errorTitle: "Göndərilmədi",
      errorDesc: "Texniki xəta baş verdi, yenidən yoxlayın.",
    },
  },
  ru: {
    capTitle: "Свяжитесь с Нами",
    capDesc:
      "Свяжитесь с нами и отправьте свои вопросы. Наша команда ответит вам в кратчайшие сроки.",
    formTitle: "Отправить Сообщение",
    formDesc:
      "Заполните форму, и мы свяжемся с вами. Мы вернемся к вам как можно скорее.",
    labels: {
      phone: "Телефон",
      email: "Электронная почта",
      workHours: "Рабочие часы",
      hours: "08:30 - 20:00",
      namePlaceholder: "Имя и Фамилия",
      emailPlaceholder: "Email",
      phonePlaceholder: "Телефон",
      messagePlaceholder: "Ваше сообщение...",
      sendBtn: "Отправить",
      loadingBtn: "Отправка...",
    },
    toast: {
      successTitle: "Успешная операция",
      successDesc: "Ваше сообщение было доставлено команде.",
      errorTitle: "Не отправлено",
      errorDesc: "Произошла техническая ошибка, попробуйте еще раз.",
    },
  },
  en: {
    capTitle: "Contact Us",
    capDesc:
      "Get in touch with us and send your questions. Our team will respond to you as soon as possible.",
    formTitle: "Send a Message",
    formDesc:
      "Fill out the form and contact us. We will get back to you as soon as possible.",
    labels: {
      phone: "Phone",
      email: "Email",
      workHours: "Working Hours",
      hours: "08:30 - 20:00",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email",
      phonePlaceholder: "Phone",
      messagePlaceholder: "Your message...",
      sendBtn: "Send",
      loadingBtn: "Sending...",
    },
    toast: {
      successTitle: "Success",
      successDesc: "Your message has been delivered to the team.",
      errorTitle: "Failed",
      errorDesc: "A technical error occurred, please try again.",
    },
  },
};


//    ---Footer Section---    //
export interface FooterItem {
  title: string;
  links: { name: string; href: string; icon?: LucideIcon }[];
}

export interface FooterLanguageData {
  description: string;
  copyright: string;
  sections: FooterItem[];
}
export interface FooterUpData {
  title: string;
  desc: string;
  btnText: string;
}
export const footerByLang: Record<Language, FooterLanguageData> = {
  az: {
    description:
      "Biz tələbələrə müasir texnologiyaları öyrənmək və karyera inkişafını irəli aparmaq üçün lazım olan bütün vasitələri təqdim edirik.",
    copyright: "Bütün hüquqlar qorunur.",
    sections: [
      {
        title: "Sürətli keçidlər",
        links: [
          { name: "Haqqımızda", href: "#about" },
          { name: "Xidmətlər", href: "#services" },
          { name: "Müəllimlər", href: "#teachers" },
          { name: "Filiallar", href: "#address" },
          { name: "Əlaqə", href: "#contact" },
        ],
      },
      {
        title: "Əlaqə",
        links: [
          { name: "070 710 33 43", href: "tel:+994707103343", icon: Phone },
          {
            name: "info@masterschool.az",
            href: "mailto:info@masterschool.az",
            icon: Mail,
          },
          {
            name: "Nizami küç. 203B, AF Business House",
            href: "#",
            icon: MapPin,
          },
          { name: "08:30 - 20:00", href: "#", icon: Clock },
        ],
      },
      {
        title: "Sosial",
        links: [
          {
            name: "Instagram",
            href: "https://instagram.com/...",
            icon: Instagram,
          },
          {
            name: "Facebook",
            href: "https://facebook.com/...",
            icon: Facebook,
          },
          { name: "Youtube", href: "https://youtube.com/...", icon: Youtube },
        ],
      },
    ],
  },
  ru: {
    description:
      "Мы предоставляем студентам все инструменты, необходимые для изучения современных технологий и карьерного роста.",
    copyright: "Все права защищены.",
    sections: [
      {
        title: "Быстрые ссылки",
        links: [
          { name: "О нас", href: "#about" },
          { name: "Услуги", href: "#services" },
          { name: "Учителя", href: "#teachers" },
          { name: "Филиалы", href: "#address" },
          { name: "Контакт", href: "#contact" },
        ],
      },
      {
        title: "Контакт",
        links: [
          { name: "070 710 33 43", href: "tel:+994707103343", icon: Phone },
          {
            name: "info@masterschool.az",
            href: "mailto:info@masterschool.az",
            icon: Mail,
          },
          {
            name: "Ул. Низами 203B, AF Business House",
            href: "#",
            icon: MapPin,
          },
          { name: "08:30 - 20:00", href: "#", icon: Clock },
        ],
      },
      {
        title: "Социальные",
        links: [
          {
            name: "Instagram",
            href: "https://instagram.com/...",
            icon: Instagram,
          },
          {
            name: "Facebook",
            href: "https://facebook.com/...",
            icon: Facebook,
          },
          { name: "Youtube", href: "https://youtube.com/...", icon: Youtube },
        ],
      },
    ],
  },
  en: {
    description:
      "We provide students with all the tools they need to learn modern technologies and advance their career development.",
    copyright: "All rights reserved.",
    sections: [
      {
        title: "Quick Links",
        links: [
          { name: "About Us", href: "#about" },
          { name: "Services", href: "#services" },
          { name: "Teachers", href: "#teachers" },
          { name: "Branches", href: "#address" },
          { name: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Contact",
        links: [
          { name: "070 710 33 43", href: "tel:+994707103343", icon: Phone },
          {
            name: "info@masterschool.az",
            href: "mailto:info@masterschool.az",
            icon: Mail,
          },
          {
            name: "203B Nizami St., AF Business House",
            href: "#",
            icon: MapPin,
          },
          { name: "08:30 - 20:00", href: "#", icon: Clock },
        ],
      },
      {
        title: "Social",
        links: [
          {
            name: "Instagram",
            href: "https://instagram.com/...",
            icon: Instagram,
          },
          {
            name: "Facebook",
            href: "https://facebook.com/...",
            icon: Facebook,
          },
          { name: "Youtube", href: "https://youtube.com/...", icon: Youtube },
        ],
      },
    ],
  },
};
export const footerUpTextByLang: Record<Language, FooterUpData> = {
  az: {
    title: "Öyrənməyə Başlamağa Hazırsınız?",
    desc: "Kurslar, qeydiyyat və ya tərəfdaşlıq imkanları haqqında məlumat almaq üçün indi bizimlə əlaqə saxlayın.",
    btnText: "Bizimlə Əlaqə",
  },
  ru: {
    title: "Готовы начать обучение?",
    desc: "Свяжитесь с нами сейчас, чтобы получить информацию о курсах, регистрации или возможностях партнерства.",
    btnText: "Связаться с нами",
  },
  en: {
    title: "Ready to Start Learning?",
    desc: "Contact us now to get information about courses, registration, or partnership opportunities.",
    btnText: "Contact Us",
  },
};
