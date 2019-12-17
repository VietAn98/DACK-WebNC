const initStatelogin = () => ({
  isLogin: false
});

export const isSigIn = (state = initStatelogin(), action) => {
  switch (action.type) {
    case 'IS_LOGIN': {
      return {
        ...state,
        isLogin: true,
      };
    }

    case 'DONT_LOGIN': {
      return {
        ...state,
        isLogin: false,
      };
    }
    default:
      return state;
  }
};

export const students = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_STUDENTS': {
      return action.students;
    }
    default:
      return state;
  }
};


export const detailUser = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DETAIL_USER': {
      return action.user;
    }
    default:
      return state;
  }
};

export const getAddress = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ADDRESS_USER': {
      return action.address;
    }
    default:
      return state;
  }
};

export const getDistrict = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DISTRICT_USER': {
      return action.district;
    }
    default:
      return state;
  }
};

export const teachers = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_TEACHER': {
      return action.teacher;
    }
    case 'GET_LIST_LIMIT_TEACHER': {
      return action.teacher;
    }
    default:
      return state;
  }
};
