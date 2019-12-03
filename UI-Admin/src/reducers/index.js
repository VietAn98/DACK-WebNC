export const adminLoginRequest = (state = createInitialState(), action) => {
	switch (action.type) {
	case 'ADMIN_LOGIN': {
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