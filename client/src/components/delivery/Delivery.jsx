import PageBanner from "../common/page-banner/PageBanner";
import "./Delivery.scss";
import { useTranslation } from "react-i18next";

const Delivery = () => {
  const { t } = useTranslation();

  return (
    <div className="delivery">
      <PageBanner mainTitle={t("main.main_deliveryTerms.title")} />

      <div className="delivery-inner">
        <div className="delivery-inner-item">
          <h1 className="delivery-inner-item-title">
            {t("main.main_deliveryTerms.delivery_for_erevan_title")}
          </h1>
          <div className="delivery-inner-item-text">
            {t("main.main_deliveryTerms.delivery_for_erevan_text")}
          </div>
        </div>

        <div className="delivery-inner-item">
          <h1 className="delivery-inner-item-title">
            {t("main.main_deliveryTerms.delivery_for_erevan_return_title")}
          </h1>
          <div className="delivery-inner-item-text">
            {t("main.main_deliveryTerms.delivery_for_erevan_return_text")}
          </div>
        </div>

        <div className="delivery-inner-item">
          <h1 className="delivery-inner-item-title">
            {t("main.main_deliveryTerms.delivery_for_region_title")}
          </h1>
          <div className="delivery-inner-item-text">
            {t("main.main_deliveryTerms.delivery_for_region_text")}
          </div>
        </div>

        <div className="delivery-inner-item">
          <h1 className="delivery-inner-item-title">
            {t("main.main_deliveryTerms.delivery_for_region_return_title")}
          </h1>
          <div className="delivery-inner-item-text">
            {t("main.main_deliveryTerms.delivery_for_region_return_text")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
