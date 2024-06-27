import React, { useState, useRef } from "react";
import DetailDataCard from "./DetailDataCard";
import EditDetailDataCard from "./EditDetailDataCard";
import { useDataValue } from "../../state-mangement/game-data-controller/ContextApi";
import { actionsObject } from "../../state-mangement/game-data-controller/stateAndReducer";

const Details = () => {
  const [editMode, setEditMode] = useState(false);
  const mainContainer = useRef();

  const DetailContextData = useDataValue().state.currentSelectedCard;
  const dispatch = useDataValue().dispatch;

  const handleEditBtn = async () => {
    // console.log(mainContainer.current);
    await setEditMode(!editMode);

    if (editMode) {
      mainContainer.current.classList.add("less-height");
      mainContainer.current.classList.remove("more-height");
    } else {
      mainContainer.current.classList.remove("less-height");
      mainContainer.current.classList.add("more-height");
    }
  };

  const handleClosebtn = () => {
    dispatch({ type: actionsObject.ClearDetail });
    mainContainer.current.classList.remove("less-height");
    mainContainer.current.classList.remove("more-height");
    mainContainer.current.classList.remove("showDetailsCompnent");
  };

  return (
    <div
      ref={mainContainer}
      className={
        DetailContextData.id === -1
          ? "details-container"
          : "details-container showDetailsCompnent"
      }
    >
      <div>
        <div className="detail-heading">
          <h2>Details:</h2>
          <div>
            <button onClick={handleEditBtn}>
              {!editMode ? "Edit" : "done"}
            </button>
            <button className="close-btn" onClick={handleClosebtn}>
              X
            </button>
          </div>
        </div>
        <div>
          {!editMode && <DetailDataCard data={DetailContextData} />}
          {editMode && <EditDetailDataCard data={DetailContextData} />}
        </div>
      </div>
    </div>
  );
};

export default Details;
