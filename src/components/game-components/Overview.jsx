import React, { useState, useEffect, useId } from "react";
import OverviewDataCard from "./OverviewDataCard";
import { useDataValue } from "../../state-mangement/game-data-controller/ContextApi";

const Overview = () => {
  const Id = useId();
  // const [cardslists, setCardslists] = useState(
  //   useDataValue().state.allCards ?? []
  // );
  const cardslists = useDataValue().state.allCards ?? [];
  useEffect(() => {
    console.log("overview comp");
  });
  return (
    <div className="overview-main-container">
      <h2>Overview</h2>
      <div className="cards-contianer">
        {!cardslists.length ? (
          <p>no cards avalible</p>
        ) : (
          cardslists.map((cardData, index) => (
            <OverviewDataCard
              data={cardData}
              key={`${Id} ${index} + ${cardData.id}`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Overview;
