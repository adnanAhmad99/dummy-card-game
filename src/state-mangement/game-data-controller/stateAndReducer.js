export const initialState = {
  currentSelectedCard: {
    id: -1,
    realName: "",
    playerName: "",
    asset: "",
  },
  allCards: [
    {
      id: 1,
      realName: "Brianna Forbes",
      playerName: "Dreamlurk The Unstoppable",
      asset: "Foghammer Lead",
    },
    {
      id: 2,
      realName: "Darcy Candice Ball",
      playerName: "Crystaldash",
      asset: "Secret Glowquake Gold",
    },
    {
      id: 3,
      realName: "Hillary Gibbs",
      playerName: "Speedsoul",
      asset: "Shifting Rainshadow Iron",
    },
    {
      id: 4,
      realName: "Elva Becky Hammond",
      playerName: "Seekvenom The Mystic",
      asset: "Valkyries Opal Adamant",
    },
    {
      id: 5,
      realName: "Enid Rose",
      playerName: "Coincurse The Ghoul",
      asset: "Jewelevil Bronze Of desses",
    },
    {
      id: 6,
      realName: "Esmeralda Carrullo",
      playerName: "Skulldart",
      asset: "Yellow Orichalcum Of Paladins",
    },
  ],
  sorting: "asc",
};

export const actionsObject = {
  UpdateSingle: "updateSingle",
  UpdateDetail: "updateDetails",
  UpdateAll: "updateAll",
  ChangeSort: "changeSort",
  SubmitDetailsData: "submitDetailsData",
  ClearDetail: "clearDetail",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionsObject.UpdateAll:
      return action.payload;
    case actionsObject.UpdateSingle:
      return { ...state, currentSelectedCard: action.payload };
    case actionsObject.UpdateDetail:
      // console.log(action.payload);
      return { ...state, currentSelectedCard: action.payload };
    case actionsObject.SubmitDetailsData:
      const newCards = state.allCards.map((data) => {
        if (data.id == state.currentSelectedCard.id) {
          return state.currentSelectedCard;
        } else {
          return data;
        }
      });
      return { ...state, allCards: newCards };
    case actionsObject.ChangeSort:
      if (action.payload === "asc") {
        const newCards = state.allCards.sort((a, b) => {
          const nameA = a.realName.toUpperCase();
          const nameB = b.realName.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        return { ...state, allCards: newCards, sorting: "asc" };
      } else {
        const newCards = state.allCards.sort((a, b) => {
          const nameA = a.realName.toUpperCase();
          const nameB = b.realName.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
        return { ...state, allCards: newCards, sorting: "dsc" };
      }
    case actionsObject.ClearDetail:
      return {
        ...state,
        currentSelectedCard: {
          id: -1,
          realName: "",
          playerName: "",
          asset: "",
        },
      };
    default:
      return state;
  }
};
