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
		default:
			return state;
	}
};
