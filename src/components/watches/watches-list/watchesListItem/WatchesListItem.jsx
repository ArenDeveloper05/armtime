import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../../../router/router";

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
              ? "#800020x" // #C41E3A
              : "#01796F", // #8A9A5B
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
          <button className="watches-list-item-description-buy-btn">Buy</button>

          <p className="watches-list-item-description-buy-price">
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchesListItem;
