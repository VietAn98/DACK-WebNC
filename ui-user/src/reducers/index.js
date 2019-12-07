// const createInitialState = () => ({
// 	name: '',
// 	gmail: '',
// 	districtId: '',
// 	gender: '',
// 	categoryUser: '',
// });

// const userProfile = (state = createInitialState(), action) => {
// 	switch (action.type) {
// 	case 'USER_PROFILE': {
// 		return {
// 			...state,
// 			name: action.name,
// 			gmail: action.gmail,
// 			categoryUser: action.categoryUser
// 		};
// 	}
// 	default:
// 		return state;
// 	}
// };

export const stringTag = (state = '', action) => {
	switch (action.type) {
	case 'CHOSEN_TAG_LIST': {
		return action.stringTags;
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

export const currentUser = (state = {}, action) => {
	switch (action.type) {
		case 'USER_LOGIN': {
			return action.payload;
		}
		default:
			return state;
	}
};
