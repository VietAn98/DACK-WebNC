// const createInitialState = () => ({
// 	name: '',
// 	gmail: '',
// 	districtId: '',
// 	gender: '',
// 	categoryUser: '',
// });

export const userProfiles = (state = {}, action) => {
	switch (action.type) {
		case 'USER_PROFILE': {
			return action.payload;
		}
		default:
			return state;
	}
};

// export const stringTag = (state = '', action) => {
// 	switch (action.type) {
// 		case 'CHOSEN_TAG_LIST': {
// 			return action.stringTags;
// 		}
// 		default:
// 			return state;
// 	}
// };

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
		default:
			return state;
	}
};

export const listNameSkill = (state = [], action) => {
	switch (action.type) {
		case 'GET_NAME_SKILLS': {
			return action.nameSkills;
		}
		default:
			return state;
	}
};

export const detailTeacher = (state = {}, action) => {
	switch (action.type) {
		case 'GET_INFOR_TEACHER': {
			console.log('kkkkkkkkkkkkkkkk', action.infor);
			return action.infor;
		}
		default:
			return state;
	}
};