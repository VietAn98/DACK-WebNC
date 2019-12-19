// const createInitialState = () => ({
// 	name: '',
// 	gmail: '',
// 	districtId: '',
// 	gender: '',
// 	categoryUser: '',
// });\

const initStatelogin = () => ({
  isLogin: false
});

export const isSigIn = (state = initStatelogin(), action) => {
  switch (action.type) {
    case 'IS_LOGIN': {
      return {
        ...state,
        isLogin: !state.isLogin
      };
    }

    default:
      return state;
  }
};

export const userProfiles = (state = {}, action) => {
  switch (action.type) {
    case 'USER_PROFILE': {
      return action.infor;
    }
    default:
      return state;
  }
};

export const keyPass = (state = [], action) => {
  switch (action.type) {
    case 'GET_KEY_PASS': {
      return action.result;
    } 
    default:
      return state;
  }
}

export const userInfor = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_INFO_BY_ID': {
      return action.userInfor;
    }
    default:
      return state;
  }
};

export const nameAvatar = (state = {}, action) => {
  switch (action.type) {
    case 'AVATAR_NAME': {
      return action.avtName;
    }
    default:
      return state;
  }
};

export const listDistrict = (state = [], action) => {
  switch (action.type) {
    case 'DISTRICT_LIST': {
      return action.districtList;
    }
    default:
      return state;
  }
};

export const listCity = (state = [], action) => {
  switch (action.type) {
    case 'CITY_LIST': {
      return action.cityList;
    }
    default:
      return state;
  }
};

export const cityName = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CITY_BY_DISTRICT': {
      return action.cityName;
    }
    default:
      return state;
  }
};

export const cityNameForTeacher = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CITY_BY_DISTRICT_FOR_TEACHER': {
      return action.cityNameForTeacher;
    }
    default:
      return state;
  }
};

export const districtNames = (state = [], action) => {
  switch (action.type) {
    case 'GET_DISTRICT_BY_CITY': {
      return action.districtNames;
    }
    default:
      return state;
  }
};

export const teacherSkills = (state = [], action) => {
  switch (action.type) {
    case 'GET_SKILLS': {
      return action.teacherSkills;
    }
    default:
      return state;
  }
};

// export const tempList = (state = [], action) => {
// 	switch (action.type) {
// 		case 'LIST_TEMP': {
// 			// console.log('action.list', action.list);
// 			return action.list;
// 		}
// 		default:
// 			return state;
// 	}
// };

// export const tempListUnChoose = (state = [], action) => {
// 	switch (action.type) {
// 		case 'LIST_TEMP_UNCHOOSE': {
// 			// console.log('LIST_TEMP_UNCHOOSE', action.list);
// 			return action.list;
// 		}
// 		default:
// 			return state;
// 	}
// };

export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN': {
      return action.payload;
    }
    default:
      return state;
  }
};

export const listSkills = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_SKILLS': {
      return action.listSkills;
    }
    default:
      return state;
  }
};

export const listTeachers = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_TEACHERS': {
      return action.listTeachers;
    }
    case 'GET_TEACHERS_TOP': {
      return action.TopTeacher;
    }
    case 'GET_TEACHERS_TOP_SIX': {
      return action.TopTeacher;
    }
    case 'GET_TEACHERS_PRICE_INCREASE': {
      return action.teacher;
    }
    case 'GET_TEACHERS_PRICE_DECREASE': {
      return action.teacher;
    }
    case 'GET_TEACHERS_REATESUCCESS_DECREASE': {
      return action.teacher;
    }
    case 'GET_TEACHERS_BY_MINPRICE': {
      return action.teacher;
    }
    case 'GET_TEACHERS_BY_MIDDLEPRICE': {
      return action.teacher;
    }
    case 'GET_TEACHERS_BY_MAXPRICE': {
      return action.teacher;
    }
    case 'GET_TEACHERS_BY_ONE_STAR': {
      return action.teacher;
    }
    case 'GET_TEACHERS_BY_TWO_STAR': {
      return action.teacher;
    }
    case 'GET_TEACHERS_BY_THREE_STAR': {
      return action.teacher;
    }
    case 'GET_TEACHERS_BY_FOUR_STAR': {
      return action.teacher;
    }
    case 'GET_TEACHERS_BY_FIVE_STAR': {
      return action.teacher;
    }
    case 'GET_TEACHERS_BY_DISTRICT': {
      return action.teacher;
    }
    case 'GET_TEAHCERS_BY_SKILL': {
      return action.teacher;
    }
    default:
      return state;
  }
};

export const listNameOfSkill = (state = [], action) => {
  switch (action.type) {
    case 'GET_NAME_SKILLS': {
      return action.nameSkills;
    }
    default:
      return state;
  }
};

export const endLearnDay = (state = '', action) => {
  switch (action.type) {
    case 'END_DAY': {
      return action.day;
    }
    default:
      return state;
  }
};

export const totalHour = (state = '', action) => {
  switch (action.type) {
    case 'TOTAL_HOUR': {
      return action.hour;
    }
    default:
      return state;
  }
};

export const detailTeacher = (state = {}, action) => {
  switch (action.type) {
    case 'GET_INFOR_TEACHER': {
      // console.log('kkkkkkkkkkkkkkkk', action.infor);
      return action.infor;
    }
    default:
      return state;
  }
};

export const userComment = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_COMMENT': {
      return action.userComment;
    }
    default:
      return state;
  }
};

// export const allContracts = (state = [], action) => {
//   switch (action.type) {
//     case 'GET_ALL_CONTRACTS': {
//       return action.allContracts;
//     }
//     default:
//       return state;
//   }
// };

export const contractByIdUser = (state = [], action) => {
  switch (action.type) {
    case 'GET_CONTRACT_BY_USER_ID': {
      return action.contractByIdUser;
    }
    case 'GET_CONTRACT_BY_TEACHER_ID': {
      return action.contractByIdTeacher;
    }
    case 'FILTER_LIST_CONTRACT_STUDENT': {
      return action.contractsOfStudent;
    }
    case 'FILTER_LIST_CONTRACT_TEACHER': {
      return action.contractsOfTeacher;
    }
    default:
      return state;
  }
};

// export const contractByIdTeacher = (state = [], action) => {
//   switch (action.type) {
//     case 'GET_CONTRACT_BY_TEACHER_ID': {
//       return action.contractByIdTeacher;
//     }
//     default:
//       return state;
//   }
// };

export const contractByIdContract = (state = [], action) => {
  switch (action.type) {
    case 'GET_DETAIL_CONTRACT_BY_ID': {
      return action.contractByIdContract;
    }
    default:
      return state;
  }
};
