export const contracts = (state = [], action) => {
  switch (action.type) {
    case "GET_LIMIT_CONTRACT": {
      return action.contracts;
    }
    case "GET_LIST_CONTRACT_BY_STATE": {
      return action.contracts;
    }
    default:
      return state;
  }
};

export const getStatesContract = (state = [], action) => {
  switch (action.type) {
    case "GET_LIST_STATE_CONTRACT": {
      return action.contracts;
    }
    default:
      return state;
  }
};

export const detailContract = (state = {}, action) => {
  switch (action.type) {
    case "GET_DETAIL_CONTRACT": {
      return action.detailContracts;
    }
    default:
      return state;
  }
};
