import { ROUTER } from "./router/router";

export const navConfig = [
  {
    id: 1,
    title: {
      hy: "Ժամացույցներ",
      en: "Watches",
      ru: "Часы",
    },
    link: ROUTER.WATCHES_PAGE_ROUTE,
  },
  {
    id: 2,
    title: {
      hy: "Երաշխիք",
      en: "Guarantee",
      ru: "Гарантия",
    },
    link: ROUTER.WATCHES_PAGE_ROUTE,
  },
  {
    id: 3,
    title: {
      hy: "Մեր մասին",
      en: "About us",
      ru: "О нас",
    },
    link: ROUTER.ABOUTUS_PAGE_ROUTE,
  },
  {
    id: 4,
    title: {
      hy: "Կապ մեզ հետ",
      en: "Contact us",
      ru: "Связаться с нами",
    },
    link: ROUTER.CONTACTUS_PAGE_ROUTE,
  },
];

export const filterSelectConfig = {
  hy: "ԸՆՏՐԵՔ ՁԵՐ ԺԱՄԱՑՈՒՅՑԸ",
  en: "SELECT YOUR WATCH",
  ru: "ВЫБЕРИТЕ СВОИ ЧАСЫ",
};
export const filterOptionsConfig = [
  {
    id: 1,
    title: {
      hy: "Բոլորը",
      en: "All",
      ru: "Все",
    },
  },
  {
    id: 2,
    title: {
      hy: "Քվարցային",
      en: "Quartz",
      ru: "Кварцеые",
    },
  },
  {
    id: 3,
    title: {
      hy: "Մեխանիկական",
      en: "Mechanical",
      ru: "Механические",
    },
  },
];
