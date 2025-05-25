import RestoCard from "./RestoCard";

import { restaurantsMock, restaurants } from "../utils/mockData";

import ShimmerCard from "./ShimmerCard";

import { use, useState, useEffect } from "react";
import NotFound from "./NotFound";
import { Link } from "react-router";

const RestoContainer = () => {
  let [restaurantsData, setrestaurantsData] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  /*****************FETCH******************************** */

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.940083200000002&lng=77.62739200000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const resData = await response.json();
      const { data } = resData;
      const { cards } = data;
      const { card } = cards[1];
      const { gridElements } = card.card;
      const { infoWithStyle } = gridElements;
      const { restaurants } = infoWithStyle;

      setrestaurantsData(restaurants);
      setFilterRes(restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  /****************SEARCH************************** */

  const [searchText, setSearchText] = useState("");

  const update = (event) => {
    setSearchText(event.target.value);
  };

  const search = () => {
    const serachData = restaurantsData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText)
    ); //searchText is an empty string "", .includes("") always returns true for every string.
    setFilterRes(serachData);
  };

  /*************FIlter***************************/
  const filterByRating = () => {
    let filterRating = restaurantsData.filter(
      (restaurant) => Number(restaurant.info.avgRating) > 4.5
    ); // avgRating likely key, not rating
    console.log(filterRating);

    setFilterRes(filterRating);
  };

  return (
    <>
      <div className="serach-filter-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="serach the restaurnt"
            className="searchbar"
            value={searchText}
            onChange={update}
          />
          <button className="seachbutton" onClick={search}>
            serach
          </button>
        </div>

        <button onClick={filterByRating}>Filter by Rating</button>
      </div>

      {restaurantsData.length === 0 ? (
        <ShimmerCard />
      ) : filterRes.length === 0 ? (
        <NotFound/>
      ) : (
        <div className="resto-card-container ">
          {filterRes.map((rest, index) => {
            return <Link to={`/restmenu/${rest.info.id}`} key={rest.info.id}><RestoCard restodetails={rest} />;</Link>
          })}
        </div>
      )}
    </>
  );
};

export default RestoContainer;
