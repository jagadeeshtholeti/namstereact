import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";

const restData = [
  {
    info: {
      id: "5172",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/cc367f41-029f-4b1f-a27f-21c2d5bbe718_5172.jpgImage preview",
      locality: "Preston Prime Mall",
      areaName: "Bandra Kurla Complex",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-19 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.pngImage preview",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "P",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.pngImage preview",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "1.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "32399",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/80d39aa9-deb5-44fb-a0da-462245d6908e_32399.JPGImage preview",
      locality: "Kalina Artista",
      areaName: "Santacruz East",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "39K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-20 02:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.pngImage preview",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.pngImage preview",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <img src="./" alt="Header Image" />
      <nav>
        <ul>
          <li>menu</li>
        </ul>
      </nav>
      <button>logout</button>
    </div>
  );
};

const RestoCard = (props) => {
  const { name, avgRating, sla } = props.info.info;
  const { deliveryTime } = sla;
  console.log(name, avgRating, deliveryTime);

  return (
    <div className="Card">
      <img
        src="RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/cc367f41-029f-4b1f-a27f-21c2d5bbe718_5172.jpgImage"
        alt="chinese"
      />
      <h4 className="name">{name}</h4>
      <h4 className="rating">{avgRating}</h4>
      <h4 className="etf">{deliveryTime}</h4>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="card-container">
      {restData.map((rest) => {
        return <RestoCard info={rest} key={rest.info.id} />;
      })}
    </div>
  );
};

const Main = () => {
  return (
    <>
      <Header />
      <CardContainer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
