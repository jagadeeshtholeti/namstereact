import { CLOUD_IMG } from "../utils/contents";

const RestoCard = (props) => {
  const { restodetails } = props;
  const { info } = restodetails;
  return (
    <div className="restaurant-card">
      {/* Card Image */}
      <div className="cardImageContainer">
        <img
          src={CLOUD_IMG + info.cloudinaryImageId.split("Image")[0]} // Adjust the image URL
          alt={info.name}
          className="cardImage"
        />
      </div>

      {/* Restaurant Name */}
      <h2 className="restaurant-name">{info.name}</h2>

      {/* Cuisines */}
      <p className="cuisine">Cuisine: {info.cuisines.join(", ")}</p>

      {/* Rating */}
      <p className="rating">Rating: {info.avgRating}</p>

      {/* Cost for Two */}
      <p className="price-for-two">{info.costForTwo}</p>

      {/* Delivery Time */}
      <p className="delivery-time">Delivery Time: {info.sla.slaString}</p>

      {/* Location */}
      <p className="location">
        Location: {info.locality}, {info.areaName}
      </p>

      {/* Aggregated Discount */}
      {info.aggregatedDiscountInfoV3 && (
        <p className="discount">
          {info.aggregatedDiscountInfoV3.header} -{" "}
          {info.aggregatedDiscountInfoV3.subHeader}
        </p>
      )}

      <p className={`availability ${info.isOpen ? "open" : "closed"}`}>
        {info.isOpen ? "Open Now" : "Closed"}
      </p>
    </div>
  );
};

export default RestoCard;
