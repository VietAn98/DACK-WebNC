import Swal from 'sweetalert2';
import API from '../service/api';


export const userProfile = (infor) => ({
	type: 'USER_PROFILE',
	payload: infor
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

export const updateStudentInfor = (
	gmail,
	name,
	gender,
	districtId,
	avatar
) => (dispatch) => fetch(API.UPDATE_INFOR_STUDENT, {
	method: 'POST',
	headers: {
		Accept: 'application/json', 'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		gmail,
		name,
		gender,
		districtId,
		avatar
	}),

}).then((respond) => console.log('Respond from updateStudentInfor:', respond))
	.catch((err) => console.log('Error updateStudentInfor occured', err));

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
	.then(async (res) => {
		// console.log('cityList', res);
		await dispatch({ type: 'CITY_LIST', cityList: res });
	}).catch((err) => console.log('Error getListCity occured', err));

export const getCityByIdDistrict = (idDistrict) => (dispatch) => {
	return fetch(API.GET_CITY_BY_IDDISTRICT + idDistrict, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((res) => {
			console.log('cityNamecityNamecityName', res);
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

export const getListSkills = () => (dispatch) => {
	return fetch(API.GET_LIST_SKILLS, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((res) => {
			console.log('listSkills', res);
			dispatch({ type: 'GET_LIST_SKILLS', listSkills: res });
		}).catch((err) => console.log('Error getListSkills occured', err));
};

export const getUserInfor = (id) => (dispatch) => {
	console.log('id', id);
	return fetch(API.GET_USER_INFO_BY_ID + id, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((resr) => {
			dispatch(userLogin(resr));
			dispatch(userProfile(resr));
		}).catch((err) => console.log('Error getUserInfor occured', err));
};

export const getListTeacher = () => (dispatch) => {
	// console.log('id', id);
	return fetch(API.GET_LIST_TEACHERS, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((res) => {
			console.log('getListTeacher', res);
			dispatch({ type: 'GET_LIST_TEACHERS', listTeachers: res });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const listNameSkill = (id) => (dispatch) => {
	return fetch(API.GET_NAME_SKILLS + id, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((nameSkills) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_NAME_SKILLS', nameSkills });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const getInforTeacher = (infor) => ({
	type: 'GET_INFOR_TEACHER',
	infor
});

export const getInforUserById = (id) => (dispatch) => {
	return fetch(API.GET_USER_INFO_BY_ID + id, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then(async (inforTeacher) => {
			console.log('getInforUserById', inforTeacher);
			await dispatch(getInforTeacher(inforTeacher));
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const listTeacherTop = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_TOP, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((TopTeacher) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_TEACHERS_TOP', TopTeacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const listSixTeacherTop = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_TOP_SIX, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((TopTeacher) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_TEACHERS_TOP_SIX', TopTeacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const sortIncreaseByPrice = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_PRICE_INCREASE, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_TEACHERS_PRICE_INCREASE', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const sortDecreaseByPrice = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_PRICE_DECREASE, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_TEACHERS_PRICE_DECREASE', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};
export const sortDecreaseByRateSuccess = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_REATESUCCESS_DECREASE, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_TEACHERS_REATESUCCESS_DECREASE', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

//
export const filterPriceMax = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_BY_MAXPRICE, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			console.log('Teacher', teacher);
			dispatch({ type: 'GET_TEACHERS_BY_MAXPRICE', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const filterPriceMin = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_BY_MINPRICE, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_TEACHERS_BY_MINPRICE', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const filterPriceMiddle = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_BY_MIDDLEPRICE, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_TEACHERS_BY_MIDDLEPRICE', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

//
export const filterByOneStar = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_BY_ONE_STAR, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_TEACHERS_BY_ONE_STAR', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const filterByTwoStar = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_BY_TWO_STAR, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_TEACHERS_BY_TWO_STAR', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const filterByThreeStar = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_BY_THREE_STAR, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_TEACHERS_BY_THREE_STAR', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const filterByFourStar = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_BY_FOUR_STAR, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			// console.log('getListTeacher', res);
			dispatch({ type: 'GET_TEACHERS_BY_FOUR_STAR', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const filterByFiveStar = () => (dispatch) => {
	return fetch(API.GET_TEACHERS_BY_FIVE_STAR, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			dispatch({ type: 'GET_TEACHERS_BY_FIVE_STAR', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};

export const getTeacherByDistrict = (id) => (dispatch) => {
	return fetch(API.GET_TEACHERS_BY_DISTRICT + id, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
	}).then((respond) => respond.json())
		.then((teacher) => {
			dispatch({ type: 'GET_TEACHERS_BY_DISTRICT', teacher });
		}).catch((err) => console.log('Error getListTeacher occured', err));
};
