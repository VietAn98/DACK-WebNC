export const skills = (state = [], action) => {
    switch (action.type) {
      case 'GET_LIST_SKILL': {
        return action.skills;
      }
      case 'GET_SKILLS_LIMIT': {
        return action.skills;
      }
      default:
        return state;
    }
  };
