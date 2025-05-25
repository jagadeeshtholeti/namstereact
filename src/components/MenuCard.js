import React, { useEffect, useState } from "react";
import { CLOUD_IMG } from "../utils/contents";

const MenuCard = (props) => {

  const {info} = props?.data?.card;

  console.log(info);

  return (
    <div className="menu-card">
      <img
        src={CLOUD_IMG + info.imageId}
        className="menu-card-image"
      />
      <div className="menu-card-details">
        <h3 className="menu-card-title">{info.name}</h3>
        <p className="menu-card-category">{info.category}</p>
        <p className="menu-card-description">{info.description}</p>
        <p className="menu-card-price">₹{info.price/100}</p>
        <p className="menu-card-stock">
          {info.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  )
};

export default MenuCard;
