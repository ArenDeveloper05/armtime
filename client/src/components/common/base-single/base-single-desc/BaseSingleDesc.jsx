import BaseSingleDescBuy from "./base-single-desc-buy/BaseSingleDescBuy";
import BaseSingleDescInfo from "./base-single-desc-info/BaseSingleDescInfo";
import BaseSingleDescType from "./base-single-desc-type/BaseSingleDescType";

const BaseSingleDesc = ({ type }) => {
  return (
    <div className="base-single-desc">
      <BaseSingleDescInfo />
      {type && <BaseSingleDescType type={type} />}

      <BaseSingleDescBuy />
    </div>
  );
};

export default BaseSingleDesc;
