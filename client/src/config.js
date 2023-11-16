import { ROUTER } from "./router/router";

export const langs = [
  { id: 1, title: "Հայերեն", type: "հայ" },
  { id: 2, title: "English", type: "en" },
  { id: 3, title: "Русский", type: "ру" },
];

export const navConfig = [
  {
    id: 1,
    title: {
      հայ: "Ժամացույցներ",
      en: "Watches",
      ру: "Часы",
    },
    link: ROUTER.WATCHES_PAGE_ROUTE,
  },
  {
    id: 2,
    title: {
      հայ: "Գոտիներ",
      en: "Belts",
      ру: "Ремены",
    },
    link: ROUTER.BELTS_PAGE_ROUTE,
  },
  {
    id: 3,
    title: {
      հայ: "Երաշխիք",
      en: "Guarantee",
      ру: "Гарантия",
    },
    link: ROUTER.WATCHES_PAGE_ROUTE,
  },
  {
    id: 4,
    title: {
      հայ: "Առաքման պայմաններ",
      en: "Delivery terms",
      ру: "условия доставки",
    },
    link: ROUTER.DELIVERY_PAGE_ROUTE,
  },
  {
    id: 5,
    title: {
      հայ: "Մեր մասին",
      en: "About us",
      ру: "О нас",
    },
    link: ROUTER.ABOUTUS_PAGE_ROUTE,
  },
  {
    id: 6,
    title: {
      հայ: "Կապ մեզ հետ",
      en: "Contact us",
      ру: "Связаться с нами",
    },
    link: ROUTER.CONTACTUS_PAGE_ROUTE,
  },
];

export const filterSelectConfig = {
  հայ: "ԸՆՏՐԵՔ ՁԵՐ ԺԱՄԱՑՈՒՅՑԸ",
  en: "SELECT YOUR WATCH",
  ру: "ВЫБЕРИТЕ СВОИ ЧАСЫ",
};

export const filterGenderConfig = [
  {
    id: 1,
    title: {
      հայ: "Բոլորը",
      en: "All",
      ру: "Все",
    },
    type: "all",
  },
  {
    id: 2,
    title: {
      հայ: "Տղամարդու",
      en: "Men",
      ру: "Мужские",
    },
    type: "male",
  },
  {
    id: 3,
    title: {
      հայ: "Կանացի",
      en: "Women",
      ру: "Женские",
    },
    type: "female",
  },
];

export const filterKindsConfig = [
  {
    id: 1,
    title: {
      հայ: "Բոլորը",
      en: "All",
      ру: "Все",
    },
    type: "all",
  },
  {
    id: 2,
    title: {
      հայ: "Քվարցային",
      en: "Quartz",
      ру: "Кварцеые",
    },
    type: "quartz",
  },
  {
    id: 3,
    title: {
      հայ: "Մեխանիկական",
      en: "Mechanical",
      ру: "Механические",
    },
    type: "automatic",
  },
];

export const filterSelectBeltConfig = {
  հայ: "ԸՆՏՐԵՔ ՁԵՐ ԳՈՏԻՆ",
  en: "SELECT YOUR BELT",
  ру: "ВЫБЕРИТЕ СВОИ РЕМЕНЬ",
};

export const filterBeltConfig = [
  {
    id: 1,
    title: {
      հայ: "Բոլորը",
      en: "All",
      ру: "Все",
    },
  },
  {
    id: 2,
    title: {
      հայ: "օձի կաշվով",
      en: "with snake skin",
      ру: "в змеиной коже",
    },
  },
  {
    id: 3,
    title: {
      հայ: "կոկորդիլոսի կաշվով",
      en: "with crocodile skin",
      ру: "с крокодиловой кожей",
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
