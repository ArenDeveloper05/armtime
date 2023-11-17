import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  delivery: [
    {
      id: 1,
      title: {
        հայ: "Առաքումը Մարզերում",
        en: "Delivery In Regions",
        ру: "Доставка в Rегионы",
      },
      desc: {
        հայ: "Առաքումը Մարզերում Մարզերում առաքումը կատարվում է «Հայ փոստ» ընկերության միջոցով 1-3 աշխատանքային օրվա ընթացքում: Վճարումը կատարում եք տեղում՝ հայ փոստի համապատասխան բաժանմունքում, առաքանին ստանալու պահին: Վերադարձը մարզերում Պատվերը չհավանելու և վերադարձնելու դեպքում վերադարձը նույնպես կատարվում է Հայ փոստի միջոցով: Առաքանին հետ ուղարկելուց և մեր ստանալուց հետո մենք Ձեզ օնլայն (քարտային փոխանցում, Idram և այլն) տարբերակով վերադարձնում ապրանքի համար վճարած գումարը: Վերադարձի արժեքը  500 դրամ է:",
        en: "Delivery to regions Delivery to regions is made through 'Hay Post' company within 1-3 working days. You make the payment on the spot, at the relevant department of the Armenian Post, at the time of receiving the parcel. Return in marzes If you do not like the order and return it, the return is also made through Armenian Post. After sending the parcel back and receiving it, we will refund you the amount you paid for the product online (card transfer, Idram, etc.). The cost of return is AMD 500.",
        ру: "Доставка в регионы Доставка в регионы осуществляется через компанию «Ай Пост» в течение 1-3 рабочих дней. Оплату вы производите на месте, в соответствующем отделении Почты Армении, в момент получения посылки. Возврат в марзах Если заказ вам не понравился и вы его вернете, возврат также осуществляется через Почту Армении. После отправки посылки обратно и ее получения мы вернем вам сумму, которую вы заплатили за товар онлайн (перевод на карту, Идрам и т. д.). Стоимость возврата составляет 500 драмов РА.",
      },
    },
    {
      id: 2,
      title: {
        հայ: "Առաքումը Մարզերում",
        en: "Delivery In Regions",
        ру: "Доставка в Rегионы",
      },
      desc: {
        հայ: "Առաքումը Մարզերում Մարզերում առաքումը կատարվում է «Հայ փոստ» ընկերության միջոցով 1-3 աշխատանքային օրվա ընթացքում: Վճարումը կատարում եք տեղում՝ հայ փոստի համապատասխան բաժանմունքում, առաքանին ստանալու պահին: Վերադարձը մարզերում Պատվերը չհավանելու և վերադարձնելու դեպքում վերադարձը նույնպես կատարվում է Հայ փոստի միջոցով: Առաքանին հետ ուղարկելուց և մեր ստանալուց հետո մենք Ձեզ օնլայն (քարտային փոխանցում, Idram և այլն) տարբերակով վերադարձնում ապրանքի համար վճարած գումարը: Վերադարձի արժեքը  500 դրամ է:",
        en: "Delivery to regions Delivery to regions is made through 'Hay Post' company within 1-3 working days. You make the payment on the spot, at the relevant department of the Armenian Post, at the time of receiving the parcel. Return in marzes If you do not like the order and return it, the return is also made through Armenian Post. After sending the parcel back and receiving it, we will refund you the amount you paid for the product online (card transfer, Idram, etc.). The cost of return is AMD 500.",
        ру: "Доставка в регионы Доставка в регионы осуществляется через компанию «Ай Пост» в течение 1-3 рабочих дней. Оплату вы производите на месте, в соответствующем отделении Почты Армении, в момент получения посылки. Возврат в марзах Если заказ вам не понравился и вы его вернете, возврат также осуществляется через Почту Армении. После отправки посылки обратно и ее получения мы вернем вам сумму, которую вы заплатили за товар онлайн (перевод на карту, Идрам и т. д.). Стоимость возврата составляет 500 драмов РА.",
      },
    },
  ],
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {},
});

export const {} = deliverySlice.actions;
export default deliverySlice.reducer;
