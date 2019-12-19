export const listComplaint = (state = [], action) => {
    switch (action.type) {
      case 'GET_LIMIT_COMPLAINT': {
        return action.complaints;
      }
      
      default:
        return state;
    }
  };