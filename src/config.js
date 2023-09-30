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
    link: ROUTER.WATCHES_PAGE_ROUTE,
  },
  {
    id: 4,
    title: {
      hy: "Կապ մեզ հետ",
      en: "Contact us",
      ru: "Связаться с нами",
    },
    link: ROUTER.WATCHES_PAGE_ROUTE,
  },
];
