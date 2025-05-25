import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import ShimmerCard from "./ShimmerCard";
import { Outlet, useParams } from "react-router";
import { MENU_URL } from "../utils/contents";

const MenuCardContainer = () => {
  const [menuData, setMenuData] = useState([]);

  const {id,check} =  useParams();


  console.log(id,check);




  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log(MENU_URL+id);
    const response = await fetch(MENU_URL+id);

    const resdata = await response.json();

    setMenuData(
      resdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
        ?.card?.card?.itemCards
    );

    console.log(menuData)
  };

  return (
    menuData.length === 0 ? <ShimmerCard/> :
    <>
      <div className="menu-card-contianer">
        {
        menuData.map((menu)=><MenuCard key={menu.card.info.id}  data={menu}/>)
        }
      </div> 
      <Outlet/>
    </>
  )
};

export default MenuCardContainer;
