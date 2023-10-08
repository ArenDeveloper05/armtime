import { useNavigate } from "react-router-dom";
import { TbCurrencyDram } from "react-icons/tb";

const WatchesListItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="watches-list-item"
      onClick={() => {
        navigate(`/watches/${item.id}`);
      }}
    >
      <div className="watches-list-item-image">
        <div className="watches-list-item-image-gender">{item.gender}</div>

        <img src={item.img} alt={item.title} />

        <div
          className="watches-list-item-image-isAvailable"
          style={{
            backgroundColor: item.isAvailable.includes("not available")
              ? "#C41E3A" // #C41E3A
              : "#28B464", // #8A9A5B
          }}
        >
          {item.isAvailable}
        </div>
      </div>

      <div className="watches-list-item-description">
        <p className="watches-list-item-description-title">
          Name: {item.title}
        </p>

        <p className="watches-list-item-description-color">
          Color: {item.color}
        </p>

        <p className="watches-list-item-description-type">Type: {item.type}</p>

        <div className="watches-list-item-description-buy">
          <p className="watches-list-item-description-buy-price">
            {item.price}
            <TbCurrencyDram style={{ width: "17px", height: "17px" }} />
          </p>

          <button className="watches-list-item-description-buy-btn">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default WatchesListItem;
