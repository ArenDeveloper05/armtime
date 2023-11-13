import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onRemoveWatch } from "../../../redux/slices/basketWatchesSlice";
import { GrFormClose } from "react-icons/gr";
import { TbCurrencyDram } from "react-icons/tb";
import { ROUTER } from "../../../router/router";

import { generateImage } from "../../../utils/helpers/generateImage";

import noImage from "../../../images/no-image.jpg";

import "./CheckoutItems.scss";

const CheckoutItems = () => {
  const basketWatches = useSelector(
    (state) => state.basketWatches.basketWatches
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  return (
    <div className="checkoutItems">
      <div className="checkoutItems-title">Items</div>
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
                      alt=""
                      className="checkoutItems-items-item-image-img"
                    />
                  </div>

                  <div className="checkoutItems-items-item-info">
                    <div className="checkoutItems-items-item-info-name">
                      {item.title}
                    </div>
                    <div className="checkoutItems-items-item-info-price">
                      <span>{item.discounted_price}</span>
                      <TbCurrencyDram />
                    </div>
                    <Link
                      className="checkoutItems-items-item-info-view"
                      onClick={() => {
                        navigate(`/watches/${item.id}`);
                      }}
                    >
                      View
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
              Total*{" "}
              <span>
                {onCalcPrice()} <TbCurrencyDram />
              </span>
            </div>

            <div className="checkoutItems-footer-confirm">Confirm</div>
          </div>
        </>
      ) : (
        <Link className="checkoutItems-none" to={ROUTER.HOME_PAGE_ROUTE}>
          Choose other items to add to this order
        </Link>
      )}
    </div>
  );
};

export default CheckoutItems;
