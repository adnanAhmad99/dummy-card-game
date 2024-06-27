import React from "react";

const DetailDataCard = ({ data }) => {
  return (
    <div className="detail-card">
      <p>
        Real Name- <b>{data?.realName}</b>
      </p>
      <p>Player Nam- {data?.playerName}</p>
      <p>Asset- {data?.asset}</p>
    </div>
  );
};

export default DetailDataCard;
