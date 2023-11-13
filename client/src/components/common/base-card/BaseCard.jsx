import "./BaseCard.css";

const BaseCard = ({ title, backSideDesc }) => {
  return (
    <div class="myCard">
      <div class="innerCard">
        <div class="frontSide">
          <p className="title">
            {title}
            <span>Spin Me</span>
          </p>
        </div>

        <div class="backSide">
          <p class="title">{backSideDesc}</p>
          <p>Become</p>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
