import { useTranslation } from "react-i18next";

const DeliveryListItem = ({ item }) => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div className="delivery-list-item">
      <p className="delivery-list-item-title">{item.title[language]}</p>

      <p className="delivery-list-item-txt">{item.desc[language]}</p>
    </div>
  );
};

export default DeliveryListItem;
