import BaseSingleDescBuy from "./base-single-desc-buy/BaseSingleDescBuy";
import BaseSingleDescInfo from "./base-single-desc-info/BaseSingleDescInfo";
import BaseSingleDescType from "./base-single-desc-type/BaseSingleDescType";

const BaseSingleDesc = ({ title, code, price, deliveryInfo, type }) => {
  return (
    <div className="base-single-desc">
      <BaseSingleDescInfo
        title={title}
        code={code}
        price={price}
        deliveryInfo={deliveryInfo}
      />

      {type && <BaseSingleDescType type={type} />}

      <BaseSingleDescBuy />
    </div>
  );
};

export default BaseSingleDesc;
