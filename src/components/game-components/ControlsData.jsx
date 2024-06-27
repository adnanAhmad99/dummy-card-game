import React from "react";
import { useDataValue } from "../../state-mangement/game-data-controller/ContextApi";
import { actionsObject } from "../../state-mangement/game-data-controller/stateAndReducer";

const ControlsData = () => {
  const dispatch = useDataValue().dispatch;
  const detailDataId = useDataValue().state.currentSelectedCard.id;
  return (
    <div>
      <div className="btn-contianer">
        <button
          onClick={() =>
            dispatch({ type: actionsObject.ChangeSort, payload: "asc" })
          }
        >
          Sort Asc
        </button>
        <button
          className="bt-m-lf"
          onClick={() =>
            dispatch({ type: actionsObject.ChangeSort, payload: "dsc" })
          }
        >
          Sort Dsc
        </button>
      </div>
      {detailDataId !== -1 && (
        <button
          className="submit-button"
          onClick={() => dispatch({ type: actionsObject.SubmitDetailsData })}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default ControlsData;
