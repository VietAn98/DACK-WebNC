export const createInitialState = () => ({
	name: '',
	gmail: '',
	districtId: '',
	gender: '',
	categoryUser: '',
});

export const userProfile = (state = createInitialState(), action) => {
	switch (action.type) {
	case 'USER_PROFILE': {
		return {
			...state,
			name: action.name,
			gmail: action.gmail,
			categoryUser: action.categoryUser
		};
	}
	default:
		return state;
	}
};
