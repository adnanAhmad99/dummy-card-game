import React from "react";
import { useDataValue } from "../../state-mangement/game-data-controller/ContextApi";
import { actionsObject } from "../../state-mangement/game-data-controller/stateAndReducer";

const OverviewDataCard = ({ data }) => {
  const dispatch = useDataValue().dispatch;
  return (
    <div
      className="overview-data-card"
      onClick={() => {
        dispatch({ type: actionsObject.UpdateSingle, payload: data });
      }}
    >
      <p>
        <b>{data.realName}</b>
      </p>
      <p>{data.playerName}</p>
      <p>{data.asset}</p>
    </div>
  );
};

export default OverviewDataCard;
