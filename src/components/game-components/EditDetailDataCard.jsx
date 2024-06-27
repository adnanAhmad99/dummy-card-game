import { useState, useEffect, useRef } from "react";
import { useDataValue } from "../../state-mangement/game-data-controller/ContextApi";
import { actionsObject } from "../../state-mangement/game-data-controller/stateAndReducer";

const EditDetailDataCard = ({ data }) => {
  const [editData, setEditData] = useState(() => data);
  const dispatch = useDataValue().dispatch;
  const isMountingRef = useRef(false);
  const handleInputData = (e) => {
    setEditData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    isMountingRef.current = true;
  }, []);

  useEffect(() => {
    setEditData(data);
  }, [data]);

  useEffect(() => {
    if (!isMountingRef.current) {
      dispatch({ type: actionsObject.UpdateDetail, payload: editData });
    } else {
      isMountingRef.current = false;
    }
  }, [editData]);

  return (
    <div className="edit-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="realNameId">Real Name:</label>
          <input
            value={editData.realName}
            onChange={handleInputData}
            name="realName"
            id="realNameId"
          />
        </div>
        <div>
          <label htmlFor="playerNameId">Player Name:</label>
          <input
            value={editData.playerName}
            onChange={handleInputData}
            name="playerName"
            id="playerNameId"
          />
        </div>
        <div>
          <label htmlFor="assetId">Asset:</label>
          <input
            value={editData.asset}
            onChange={handleInputData}
            name="asset"
            id="playerNameId"
          />
        </div>
      </form>
      <small>Please click submit button, to update current details</small>
    </div>
  );
};

export default EditDetailDataCard;
