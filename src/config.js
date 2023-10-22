import { ROUTER } from "./router/router";

export const langs = [
  { id: 1, title: "ARM" },
  { id: 2, title: "ENG" },
  { id: 3, title: " RUS" },
];

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
      hy: "Գոտիներ",
      en: "Belts",
      ru: "Ремены",
    },
    link: ROUTER.BELTS_PAGE_ROUTE,
  },
  {
    id: 3,
    title: {
      hy: "Երաշխիք",
      en: "Guarantee",
      ru: "Гарантия",
    },
    link: ROUTER.WATCHES_PAGE_ROUTE,
  },
  {
    id: 4,
    title: {
      hy: "Մեր մասին",
      en: "About us",
      ru: "О нас",
    },
    link: ROUTER.ABOUTUS_PAGE_ROUTE,
  },
  {
    id: 5,
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

export const filterGenderConfig = [
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
      hy: "Տղամարդու",
      en: "Men",
      ru: "Мужские",
    },
  },
  {
    id: 3,
    title: {
      hy: "Կանացի",
      en: "Women",
      ru: "Женские",
    },
  },
];

export const filterKindsConfig = [
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

export const filterSelectBeltConfig = {
  hy: "ԸՆՏՐԵՔ ՁԵՐ ԳՈՏԻՆ",
  en: "SELECT YOUR BELT",
  ru: "ВЫБЕРИТЕ СВОИ РЕМЕНЬ",
};

export const filterBeltConfig = [
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
      hy: "օձի կաշվով",
      en: "with snake skin",
      ru: "в змеиной коже",
    },
  },
  {
    id: 3,
    title: {
      hy: "կոկորդիլոսի կաշվով",
      en: "with crocodile skin",
      ru: "с крокодиловой кожей",
    },
  },
];

// export const watchListConfig = [
//   {
//     id: 1,
//     img: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg",
//     title: "watch 1",
//     price: "$1000",
//     isAvailable: "available",
//   },
//   {
//     id: 2,
//     img: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?cs=srgb&dl=pexels-joey-nguy%E1%BB%85n-2113994.jpg&fm=jpg",
//     title: "watch 2",
//     price: "$1000",
//     isAvailable: "not available",
//   },
//   {
//     id: 3,
//     img: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?cs=srgb&dl=pexels-pixabay-277390.jpg&fm=jpg",
//     title: "watch 3",
//     price: "$1000",
//     isAvailable: "available",
//   },
//   {
//     id: 4,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bh5KTIgOswdtkMr8VYHDNK2NybwLVxfk0tb9YvVim70ko0cGWh0qyuVI87PEiMBsENU&usqp=CAU",
//     title: "watch 4",
//     price: "$1000",
//     isAvailable: "not available",
//   },
//   {
//     id: 5,
//     img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
//     title: "watch 5",
//     price: "$1000",
//     isAvailable: "available",
//   },
//   {
//     id: 6,
//     img: "https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
//     title: "watch 6",
//     price: "$1000",
//     isAvailable: "available",
//   },
// ];
