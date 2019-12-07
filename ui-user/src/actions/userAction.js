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
) => (dispatch) => fetch(API.REGISTER, {
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
	.catch((err) => console.log('Error registerRequest occured', err));

export const userLogin = (user) => ({
	type: 'USER_LOGIN',
	payload: user
});

export const getInfor = (tokenn) => (dispatch) => {
	// const tokenn = localStorage.token;
	if (tokenn) {
		return fetch(API.GET_INFO, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${tokenn}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			}

		}).then((respond) => respond.json())
			.then(async (res) => {
				await localStorage.setItem('user', JSON.stringify(res));
				console.log('getInfor', res);
			})
			.catch((err) => console.log('Error getInfor occured', err));
	}
	return null;
};

export const loginRequest = (gmail, password) => (dispatch) => fetch(API.LOGIN, {
	method: 'POST',
	body: JSON.stringify({ gmail, password }),
	headers: {
		Accept: 'application/json', 'Content-Type': 'application/json',
	},
})
	.then((response) => response.json())
	.then(async (res) => {
		console.log('res login', res);
		// eslint-disable-next-line no-prototype-builtins
		if (res.hasOwnProperty('token')) {
			// Swal.fire('Thông báo', 'Thành công', 'success');
			localStorage.setItem('token', res.token);
			await dispatch(getInfor(res.token));
		} else {
			// dispatch({ type: 'LOGIN_COMPLETED' });
			Swal.fire('Thông báo', 'Không thành công', 'error');
			localStorage.removeItem('token');
		}
	})
	.catch((error) => {
		throw error;
	})
	;

export const chosenTagList = (stringTags) => ({
	type: 'CHOSEN_TAG_LIST',
	stringTags
});

export const avatarName = (avtName) => ({
	type: 'AVATAR_NAME',
	avtName
});

export const uploadAvatar = (fd) => (dispatch) => fetch(API.UPLOAD_AVATAR, {
	method: 'POST',
	// headers: {
	// 	Accept: 'application/json', 'Content-Type': 'application/json',
	// },
	body: fd

}).then((respond) => console.log('Respond from uploadAvatar:', respond))
	// .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
	.catch((err) => console.log('Error uploadAvatar occured', err));

export const updateTeacherInfor = (
	gmail,
	name,
	gender,
	districtId,
	introduce,
	skill,
	price,
	avatar
) => (dispatch) => fetch(API.UPDATE_INFOR_TEACHER, {
	method: 'POST',
	headers: {
		Accept: 'application/json', 'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		gmail,
		name,
		gender,
		districtId,
		introduce,
		skill,
		price,
		avatar
	}),

}).then((respond) => console.log('Respond from updateTeacherInfor:', respond))
	// .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
	.catch((err) => console.log('Error updateTeacherInfor occured', err));

export const signOut = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('user');
};

export const getListDisctrict = () => (dispatch) => fetch(API.GET_LIST_DISTRICT, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
}).then((respond) => respond.json())
	.then((res) => {
		console.log('districtList', res);
		dispatch({ type: 'DISTRICT_LIST', districtList: res });
	}).catch((err) => console.log('Error getListDisctrict occured', err));

export const getListCity = () => (dispatch) => fetch(API.GET_LIST_CITY, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
}).then((respond) => respond.json())
	.then((res) => {
		console.log('cityList', res);
		dispatch({ type: 'CITY_LIST', cityList: res });
	}).catch((err) => console.log('Error getListCity occured', err));

export const getCityByIdDistrict = (idDistrict) => (dispatch) => {
	return fetch(API.GET_CITY_BY_IDDISTRICT + idDistrict, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((res) => {
			// console.log('cityName', res);
			dispatch({ type: 'GET_CITY_BY_DISTRICT', cityName: res });
		}).catch((err) => console.log('Error getCityByIdDistrict occured', err));
};

export const getDistrictByIdCity = (idCity) => (dispatch) => {
	return fetch(API.GET_DISTRICT_BY_IDCITY + idCity, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((res) => {
			console.log('districtNames', res);
			dispatch({ type: 'GET_DISTRICT_BY_CITY', districtNames: res });
		}).catch((err) => console.log('Error getDistrictByIdCity occured', err));
};


export const getSkills = (idTeacher) => (dispatch) => {
	return fetch(API.GET_SKILLS + idTeacher, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((res) => {
			console.log('teacherSkills', res);
			dispatch({ type: 'GET_SKILLS', teacherSkills: res });
		}).catch((err) => console.log('Error getSkills occured', err));
};