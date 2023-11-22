import { ROUTER } from "./router/router";
import { LuWatch } from "react-icons/lu";
import { GiBeltBuckles } from "react-icons/gi";
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";

export const langs = [
  { id: 1, title: "Հայերեն", type: "am" },
  { id: 2, title: "English", type: "en" },
  { id: 3, title: "Русский", type: "ru" },
];

export const navConfig = [
  {
    id: 1,
    title: {
      am: "Ժամացույցներ",
      en: "Watches",
      ru: "Часы",
    },
    icon: LuWatch,
    link: ROUTER.WATCHES_PAGE_ROUTE,
  },
  {
    id: 2,
    title: {
      am: "Գոտիներ",
      en: "Belts",
      ru: "Ремни",
    },
    icon: GiBeltBuckles,
    link: ROUTER.BELTS_PAGE_ROUTE,
  },
  {
    id: 3,
    title: {
      am: "Երաշխիք",
      en: "Guarantee",
      ru: "Гарантия",
    },
    icon: SiAdguard,
    link: ROUTER.GARUANTEE_PAGE_ROUTE,
  },
  {
    id: 4,
    title: {
      am: "Առաքման Պայմաններ",
      en: "Delivery Terms",
      ru: "Условия Доставки",
    },
    icon: TbTruckDelivery,
    link: ROUTER.DELIVERY_PAGE_ROUTE,
  },
  {
    id: 5,
    title: {
      am: "Մեր մասին",
      en: "About us",
      ru: "О нас",
    },
    icon: FaInfoCircle,
    link: ROUTER.ABOUTUS_PAGE_ROUTE,
  },
  {
    id: 6,
    title: {
      am: "Կապ մեզ հետ",
      en: "Contact us",
      ru: "Связаться с нами",
    },
    icon: MdConnectWithoutContact,
    link: ROUTER.CONTACTUS_PAGE_ROUTE,
  },
];

export const filterSelectConfig = {
  am: "ԸՆՏՐԵՔ ՁԵՐ ԺԱՄԱՑՈՒՅՑԸ",
  en: "SELECT YOUR WATCH",
  ru: "ВЫБЕРИТЕ СВОИ ЧАСЫ",
};

export const filterGenderConfig = [
  {
    id: 1,
    title: {
      am: "Բոլորը",
      en: "All",
      ru: "Все",
    },
    type: "all",
  },
  {
    id: 2,
    title: {
      am: "Տղամարդու",
      en: "Men",
      ru: "Мужские",
    },
    type: "male",
  },
  {
    id: 3,
    title: {
      am: "Կանացի",
      en: "Women",
      ru: "Женские",
    },
    type: "female",
  },
];

export const filterKindsConfig = [
  {
    id: 1,
    title: {
      am: "Բոլորը",
      en: "All",
      ru: "Все",
    },
    type: "all",
  },
  {
    id: 2,
    title: {
      am: "Քվարցային",
      en: "Quartz",
      ru: "Кварцеые",
    },
    type: "quartz",
  },
  {
    id: 3,
    title: {
      am: "Մեխանիկական",
      en: "Mechanical",
      ru: "Механические",
    },
    type: "automatic",
  },
];

export const filterSelectBeltConfig = {
  am: "ԸՆՏՐԵՔ ՁԵՐ ԳՈՏԻՆ",
  en: "SELECT YOUR BELT",
  ru: "ВЫБЕРИТЕ СВОИ РЕМЕНЬ",
};

export const filterBeltConfig = [
  {
    id: 1,
    title: {
      am: "Բոլորը",
      en: "All",
      ru: "Все",
    },
    type: "all",
  },
  {
    id: 2,
    title: {
      am: "Էկզոտիկ կաշվից գոտի",
      en: "Exotic leather belt",
      ru: "Ремень из экзотической кожи",
    },
    type: "exotic",
  },
  {
    id: 3,
    title: {
      am: "Բնական կաշվից գոտի",
      en: "Genuine leather belt",
      ru: "Ремень из натуральной кожи",
    },
    type: "natural",
  },
];

export const contactConfig = {
  contactOfficeConfig: [
    {
      id: 1,
      title: "09:00 - 22:00",
      icon: IoTime,
    },
    {
      id: 2,
      title: "+374 (94) 31 - 31 - 76",
      icon: FaPhone,
    },
    {
      id: 3,
      title: "+374 (43) 31 - 31 - 76",
      icon: FaPhone,
    },
  ],

  contactNetworksConfig: [
    { id: 1, icon: CiFacebook, link: "" },
    { id: 2, icon: PiInstagramLogoLight, link: "" },
  ],
};
