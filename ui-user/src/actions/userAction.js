import Swal from 'sweetalert2';
import API from '../service/api';


export const userProfile = (name, gmail, categoryUser) => ({
	type: 'USER_PROFILE',
	name,
	gmail,
	categoryUser
});

export const registerRequest = (
	name,
	gmail,
	password,
	districtId,
	gender,
	categoryUser,
) => (dispatch) => {
	return fetch(API.REGISTER, {
		method: 'POST',
		headers: {
			Accept: 'application/json', 'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name,
			gmail,
			password,
			districtId,
			gender,
			categoryUser,
		}),

	}).then((respond) => console.log('Respond:', respond))
		// .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
		.catch((err) => console.log('Error occured', err));
};

export const loginRequest = (gmail, password) => (dispatch) => {
	// dispatch({ type: 'LOGIN_FETCHING' });
	return fetch(API.LOGIN, {
		method: 'POST',
		body: JSON.stringify({ gmail, password }),
		headers: {
			Accept: 'application/json', 'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((res) => {
			console.log('res login', res);
			// eslint-disable-next-line no-prototype-builtins
			if (res.hasOwnProperty('token')) {
				// Swal.fire('Thông báo', 'Thành công', 'success');
				localStorage.setItem('token', res.token);
				// dispatch({ type: 'LOGIN_COMPLETED' });
			} else {
				// dispatch({ type: 'LOGIN_COMPLETED' });
				Swal.fire('Thông báo', 'Không thành công', 'error');
				localStorage.removeItem('token');
			}
		})
		.catch((error) => {
			throw error;
		});
};

export const chosenTagList = (stringTags) => ({
	type: 'CHOSEN_TAG_LIST',
	stringTags
});

export const avatarName = (avtName) => ({
	type: 'AVATAR_NAME',
	avtName
});

export const uploadAvatar = (fd) => (dispatch) => {
	return fetch(API.UPLOAD_AVATAR, {
		method: 'POST',
		// headers: {
		// 	Accept: 'application/json', 'Content-Type': 'application/json',
		// },
		body: fd

	}).then((respond) => console.log('Respond from uploadAvatar:', respond))
		// .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
		.catch((err) => console.log('Error occured', err));
};


export const registerTeachingRequest = (
	gmail,
	introduce,
	skill,
	price,
	avatar
) => (dispatch) => {
	return fetch(API.REGISTER_TEACHING, {
		method: 'POST',
		headers: {
			Accept: 'application/json', 'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			gmail,
			introduce,
			skill,
			price,
			avatar
		}),

	}).then((respond) => console.log('Respond:', respond))
		// .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
		.catch((err) => console.log('Error occured', err));
};
