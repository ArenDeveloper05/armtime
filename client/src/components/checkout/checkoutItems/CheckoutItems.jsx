import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onRemoveWatch } from "../../../redux/slices/basketWatchesSlice";
import { GrFormClose } from "react-icons/gr";
import { TbCurrencyDram } from "react-icons/tb";
import { ROUTER } from "../../../router/router";

import { generateImage } from "../../../utils/helpers/generateImage";

import { useTranslation } from "react-i18next";
import { sendTelegramData } from "../../../api/api";
import { useContext } from "react";
import { CheckoutContext } from "../Checkout";
import { notifyError, notifySuccess } from "../../../utils/toast/toastify";

import noImage from "../../../images/no-image.jpg";

import "./CheckoutItems.scss";

const CheckoutItems = () => {
  const basketWatches = useSelector(
    (state) => state.basketWatches.basketWatches
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const {
    checkoutData,
    checkValidations,
    checkoutValidations,
    setCheckoutValidations,
  } = useContext(CheckoutContext);

  const onCalcPrice = () => {
    let price = 0;
    if (basketWatches.length !== 0) {
      basketWatches.map((watch) => {
        price += +watch.discounted_price;
        return "";
      });
    }
    return +price;
  };

  function seeShippingDetails(checkoutData) {
    let shippingDetails = {};
    if (checkoutData.shipping === "yerevan") {
      shippingDetails = {
        Հասցե: checkoutData[checkoutData.shipping].address,
        ժամանակ: checkoutData[checkoutData.shipping].time,
      };
    } else if (checkoutData.shipping === "regions") {
      shippingDetails = {
        Մարզ: checkoutData[checkoutData.shipping].state_village_city,
        Փոստ: checkoutData[checkoutData.shipping].postal_code,
        Հասցե: checkoutData[checkoutData.shipping].address,
      };
    }
    return shippingDetails;
  }

  async function sendTelegramDataFunction(watchList) {
    try {
      const shippingDetails = seeShippingDetails(checkoutData);
      for (let i = 0; i < watchList.length; i++) {
        const watch = watchList[i];
        await sendTelegramData({
          Անուն: checkoutData.first_name,
          Ազգանուն: checkoutData.last_name,
          Հեռախոսահամար: checkoutData.phone,
          Առաքում: checkoutData.shipping,
          Նամակ: checkoutData.notes,
          ...shippingDetails,
          Անվանում: watch.name_am,
          Գին: watch.discounted_price + " ֏",
          Նկար: watch.image[0] ? generateImage(watch.image[0].url) : "",
          Նկարագրություն: watch.desc_am,
        });
      }
      notifySuccess(t("toast.success"));
    } catch (error) {
      notifyError(t("toast.error"));
    }
  }

  return (
    <div className="checkoutItems">
      <div className="checkoutItems-title">{t("main.main_putOrder.Items")}</div>
      {basketWatches.length !== 0 ? (
        <>
          <div className="checkoutItems-items">
            {basketWatches.map((item) => {
              return (
                <div className="checkoutItems-items-item" key={item.id}>
                  <div className="checkoutItems-items-item-image">
                    <img
                      src={
                        item.image && item.image[0]
                          ? generateImage(item.image[0].url)
                          : noImage
                      }
                      alt="checkout-item"
                      className="checkoutItems-items-item-image-img"
                    />
                  </div>

                  <div className="checkoutItems-items-item-info">
                    <div className="checkoutItems-items-item-info-name">
                      {item[`name_${language}`]}
                    </div>
                    <div className="checkoutItems-items-item-info-price">
                      <span>{item.discounted_price}</span>
                      <TbCurrencyDram />
                    </div>
                    <Link
                      className="checkoutItems-items-item-info-view"
                      onClick={() => {
                        navigate(
                          `${
                            "band_material" in item
                              ? ROUTER.WATCHES_PAGE_ROUTE
                              : ROUTER.BELTS_PAGE_ROUTE
                          }/${item.id}`
                        );
                      }}
                    >
                      {t("header.header_basket.view_product")}
                    </Link>
                  </div>

                  <div className="checkoutItems-items-item-remove">
                    <GrFormClose
                      className="checkoutItems-items-item-remove-icon"
                      onClick={() => {
                        dispatch(onRemoveWatch(item));
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="checkoutItems-footer">
            <div className="checkoutItems-footer-total">
              {t("header.header_basket.total")}*
              <span>
                {onCalcPrice()} <TbCurrencyDram />
              </span>
            </div>
            <div
              className="checkoutItems-footer-confirm"
              onClick={() => {
                console.log(
                  JSON.stringify(checkoutValidations).includes("false")
                );
                const res = checkValidations(checkoutData, checkoutValidations);
                setCheckoutValidations({ ...res });

                if (checkoutData.shipping === "yerevan") {
                  delete res.regions;
                } else if (checkoutData.shipping === "regions") {
                  delete res.yerevan;
                }
                if (JSON.stringify(res).includes("false")) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  sendTelegramDataFunction(basketWatches);
                }
              }}
            >
              {t("header.header_basket.put_order")}
            </div>
          </div>
        </>
      ) : (
        <Link className="checkoutItems-none" to={ROUTER.HOME_PAGE_ROUTE}>
          {t("checkout.other")}
        </Link>
      )}
    </div>
  );
};

export default CheckoutItems;
