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
      ru: "Ремены",
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
    link: ROUTER.WATCHES_PAGE_ROUTE,
  },
  {
    id: 4,
    title: {
      am: "Առաքման պայմաններ",
      en: "Delivery terms",
      ru: "условия доставки",
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
  },
  {
    id: 2,
    title: {
      am: "օձի կաշվով",
      en: "with snake skin",
      ru: "в змеиной коже",
    },
  },
  {
    id: 3,
    title: {
      am: "կոկորդիլոսի կաշվով",
      en: "with crocodile skin",
      ru: "с крокодиловой кожей",
    },
  },
];

export const contactConfig = {
  contactOfficeConfig: [
    {
      id: 1,
      title: "09:00 - 18:00",
      icon: IoTime,
    },
    {
      id: 2,
      title: "+374 11 12 12 12",
      icon: FaPhone,
    },
    {
      id: 3,
      title: "+374 12 13 13 13",
      icon: FaPhone,
    },
  ],

  contactNetworksConfig: [
    { id: 1, icon: CiFacebook, link: "" },
    { id: 2, icon: PiInstagramLogoLight, link: "" },
  ],
};

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
