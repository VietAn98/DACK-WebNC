import Swal from 'sweetalert2';
import API from '../service/api';
import history from '../history';

export const userProfile = (infor) => ({
  type: 'USER_PROFILE',
  infor
});

export const login = () => ({
  type: 'IS_LOGIN'
});

export const getEndDay = (day) => ({
  type: 'END_DAY',
  day
});

export const getTotalHour = (hour) => ({
  type: 'TOTAL_HOUR',
  hour
});

export const registerRequest = (
  name,
  gmail,
  password,
  districtId,
  gender,
  categoryUser,
  address
) => (dispatch) => fetch(API.REGISTER, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name,
    gmail,
    password,
    districtId,
    gender,
    categoryUser,
    address
  })
})
  .then((respond) => {
    if (respond.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Đăng Kí Thành Công',
        text:
          'Một đường dẫn kích hoạt tài khoản đã được gửi đến Email của bạn. Xin hãy kiểm tra email và kích hoạt tài khoản để tiếp tục sử dụng trang web!'
        // footer: '<a href>Đến Trang Chủ</a>',
      });
      history.push('/signin');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Đăng Kí thất bại',
        text: 'Gmail đã tồn tại, vui lòng kiểm tra lại.'
        // footer: '<a href>Đến Trang Chủ</a>',
      });
    }
  })
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
    })
      .then((respond) => respond.json())
      .then(async (res) => {
        await localStorage.setItem('user', JSON.stringify(res));
      })
      .catch((err) => console.log('Error getInfor occured', err));
  }
  return null;
};

export const loginRequest = (gmail, password) => (dispatch) => fetch(API.LOGIN, {
  method: 'POST',
  body: JSON.stringify({ gmail, password }),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then((response) => response.json())
  .then(async (res) => {
    // eslint-disable-next-line no-prototype-builtins
    if (res.hasOwnProperty('token')) {
      // Swal.fire('Thông báo', 'Thành công', 'success');
      localStorage.setItem('token', res.token);
      await dispatch(getInfor(res.token));
    } else {
      dispatch(login());
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
})
  .then((respond) => console.log('Respond from uploadAvatar:', respond))
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
  avatar,
  address
) => (dispatch) => fetch(API.UPDATE_INFOR_TEACHER, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    gmail,
    name,
    gender,
    districtId,
    introduce,
    skill,
    price,
    avatar,
    address
  })
})
  .then((respond) => console.log('Respond from updateTeacherInfor:', respond))
  // .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
  .catch((err) => console.log('Error updateTeacherInfor occured', err));

export const updateStudentInfor = (
  gmail,
  name,
  gender,
  districtId,
  avatar,
  address
) => (dispatch) => fetch(API.UPDATE_INFOR_STUDENT, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    gmail,
    name,
    gender,
    districtId,
    avatar,
    address
  })
})
  .then((respond) => console.log('Respond from updateStudentInfor:', respond))
  .catch((err) => console.log('Error updateStudentInfor occured', err));

export const signOut = () => (dispatch) => {
  dispatch(login());
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getListDisctrict = () => (dispatch) => fetch(API.GET_LIST_DISTRICT, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((res) => {
    dispatch({ type: 'DISTRICT_LIST', districtList: res });
  })
  .catch((err) => console.log('Error getListDisctrict occured', err));

export const getListCity = () => (dispatch) => fetch(API.GET_LIST_CITY, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then(async (res) => {
    await dispatch({ type: 'CITY_LIST', cityList: res });
  })
  .catch((err) => console.log('Error getListCity occured', err));

export const getCityByIdDistrict = (idDistrict) => (dispatch) => fetch(
  API.GET_CITY_BY_IDDISTRICT + idDistrict, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
)
  .then((respond) => respond.json())
  .then((res) => {
    dispatch({ type: 'GET_CITY_BY_DISTRICT', cityName: res });
  })
  .catch((err) => console.log('Error getCityByIdDistrict occured', err));

export const getCityByIdDistrictForTeacher = (idDistrict) => (dispatch) => fetch(
  API.GET_CITY_BY_IDDISTRICT + idDistrict, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
)
  .then((respond) => respond.json())
  .then((res) => {
    dispatch({ type: 'GET_CITY_BY_DISTRICT_FOR_TEACHER', cityNameForTeacher: res });
  })
  .catch((err) => console.log('Error getCityByIdDistrictForTeacher occured', err));

export const getDistrictByIdCity = (idCity) => (dispatch) => fetch(
  API.GET_DISTRICT_BY_IDCITY + idCity, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
)
  .then((respond) => respond.json())
  .then((res) => {
    dispatch({ type: 'GET_DISTRICT_BY_CITY', districtNames: res });
  })
  .catch((err) => console.log('Error getDistrictByIdCity occured', err));

export const getSkills = (idTeacher) => (dispatch) => fetch(API.GET_SKILLS + idTeacher, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((res) => {
    dispatch({ type: 'GET_SKILLS', teacherSkills: res });
  })
  .catch((err) => console.log('Error getSkills occured', err));

export const getListSkills = () => (dispatch) => fetch(API.GET_LIST_SKILLS, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((res) => {
    // console.log('listSkills', res);
    dispatch({ type: 'GET_LIST_SKILLS', listSkills: res });
  })
  .catch((err) => console.log('Error getListSkills occured', err));

export const getInforTeacher = (infor) => ({
  type: 'GET_INFOR_TEACHER',
  infor
});

export const getUserInfor = (id) => (dispatch) => fetch(API.GET_USER_INFO_BY_ID + id, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((resr) => {
    console.log('getUserInfor', resr);
    dispatch(userLogin(resr));
    dispatch(userProfile(resr));
    // dispatch(getInforTeacher(resr));
  })
  .catch((err) => console.log('Error getUserInfor occured', err));
export const getListTeacher = () => (dispatch) => fetch(API.GET_LIST_TEACHERS, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((res) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_LIST_TEACHERS', listTeachers: res });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const listNameSkill = (id) => (dispatch) => fetch(API.GET_NAME_SKILLS + id, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((nameSkills) => {
    dispatch({ type: 'GET_NAME_SKILLS', nameSkills });
  })
  .catch((err) => console.log('Error listNameSkill occured', err));

export const getSingleTeacherById = (id) => (dispatch) => fetch(API.GET_TEACHER_INFO_BY_ID + id, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then(async (inforTeacher) => {
    console.log('getSingleTeacherById', inforTeacher);
    await dispatch(getInforTeacher(inforTeacher));
  })
  .catch((err) => console.log('Error getSingleTeacherById occured', err));

export const getInforUserById = (id) => (dispatch) => fetch(
  API.GET_USER_INFO_BY_ID + id, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
}
).then((respond) => respond.json())
  .then(async (userInfor) => {
    console.log('getInforUserById', userInfor);
    await dispatch({ type: 'GET_USER_INFO_BY_ID', userInfor });
  }).catch((err) => console.log('Error getInforUserById occured', err));

export const listTeacherTop = () => (dispatch) => fetch(API.GET_TEACHERS_TOP, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((TopTeacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEACHERS_TOP', TopTeacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const listSixTeacherTop = () => (dispatch) => fetch(API.GET_TEACHERS_TOP_SIX, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((TopTeacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEACHERS_TOP_SIX', TopTeacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const sortIncreaseByPrice = () => (dispatch) => fetch(API.GET_TEACHERS_PRICE_INCREASE, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEACHERS_PRICE_INCREASE', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const sortDecreaseByPrice = () => (dispatch) => fetch(API.GET_TEACHERS_PRICE_DECREASE, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEACHERS_PRICE_DECREASE', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));
export const sortDecreaseByRateSuccess = () => (dispatch) => fetch(API.GET_TEACHERS_REATESUCCESS_DECREASE, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEACHERS_REATESUCCESS_DECREASE', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

//
export const filterPriceMax = () => (dispatch) => fetch(API.GET_TEACHERS_BY_MAXPRICE, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    console.log('Teacher', teacher);
    dispatch({ type: 'GET_TEACHERS_BY_MAXPRICE', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const filterPriceMin = () => (dispatch) => fetch(API.GET_TEACHERS_BY_MINPRICE, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEACHERS_BY_MINPRICE', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const filterPriceMiddle = () => (dispatch) => fetch(API.GET_TEACHERS_BY_MIDDLEPRICE, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEACHERS_BY_MIDDLEPRICE', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

//
export const filterByOneStar = () => (dispatch) => fetch(API.GET_TEACHERS_BY_ONE_STAR, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEACHERS_BY_ONE_STAR', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const filterByTwoStar = () => (dispatch) => fetch(API.GET_TEACHERS_BY_TWO_STAR, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEACHERS_BY_TWO_STAR', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const filterByThreeStar = () => (dispatch) => fetch(API.GET_TEACHERS_BY_THREE_STAR, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEACHERS_BY_THREE_STAR', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const filterByFourStar = () => (dispatch) => fetch(API.GET_TEACHERS_BY_FOUR_STAR, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEACHERS_BY_FOUR_STAR', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const filterByFiveStar = () => (dispatch) => fetch(API.GET_TEACHERS_BY_FIVE_STAR, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    dispatch({ type: 'GET_TEACHERS_BY_FIVE_STAR', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const getTeacherByDistrict = (id) => (dispatch) => fetch(API.GET_TEACHERS_BY_DISTRICT + id, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    dispatch({ type: 'GET_TEACHERS_BY_DISTRICT', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const forgotPassword = (gmail) => (dispatch) => fetch(API.FORGOT_PASSWORD, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    gmail
  })
}).then((resp) => {
  console.log(resp);
  if (resp.status === 200) {
    Swal.fire('Đăng nhập vào  gmail để thực thay đổi  mật khẩu');
  } else {
    Swal.fire('Gmail không tồn tại');
  }
});

export const updatePassword = (newPass) => (dispatch) => {
  const path = window.location.search;
  return fetch(API.FORGOT_FORGOT_PASSWORD + path, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      newPass
    })
  }).then((resp) => {
    if (resp.status === 200) {
      Swal.fire('Cập nhật mật khẩu thành công');
      history.push('/signin');
    } else {
      Swal.fire('Cập nhật mật khẩu thất bại');
    }
  });
};

export const filterSkillTeacher = (id) => (dispatch) => fetch(API.GET_TEAHCERS_BY_SKILL + id, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((teacher) => {
    // console.log('getListTeacher', res);
    dispatch({ type: 'GET_TEAHCERS_BY_SKILL', teacher });
  })
  .catch((err) => console.log('Error getListTeacher occured', err));

export const getUserComment = (idTeacher) => (dispatch) => fetch(API.GET_USER_COMMENT + idTeacher, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then((respond) => respond.json())
  .then((userComment) => {
    console.log('userComment action', userComment);
    dispatch({ type: 'GET_USER_COMMENT', userComment });
  })
  .catch((err) => console.log('Error getUserComment occured', err));

export const changeOldPassword = (gmail, newPass, oldPass) => (dispatch) => fetch(
  API.CHANGE_PASSWORD, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    gmail,
    newPass,
    oldPass
  })
}
)
  .then((respond) => {
    if (respond.status === 200) {
      Swal.fire('Cập nhật thành công');
      history.push('/');
    } else {
      Swal.fire('Cập nhật thất bại, vui lòng kiểm tra lại');
    }
  })
  .catch((err) => console.log('Error change password occured', err));
// .then((status) => dispatch(userProfile(name, gmail, categoryUser)))

export const createContract = (
  teacherId,
  studentId,
  price,
  startDay,
  endDay,
  dateCreate,
  skill,
  numberDay,
  numberHour
) => (dispatch) => fetch(API.CREATE_CONTRACT, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    teacherId,
    studentId,
    price,
    startDay,
    endDay,
    dateCreate,
    skill,
    numberDay,
    numberHour
  })
})
  .then((respond) => {
    if (respond.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Đăng Kí Thành Công',
        text:
          'Vui lòng chờ kết quả kiểm duyệt của giáo viên.'
        // footer: '<a href>Đến Trang Chủ</a>',
      });
      history.push('/teacherslist');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Đăng Kí thất bại',
        text: 'Xin hãy thử lại'
        // footer: '<a href>Đến Trang Chủ</a>',
      });
    }
  })
  // .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
  .catch((err) => console.log('Error registerRequest occured', err));

// export const getAllContracts = () => (dispatch) => fetch(API.GET_ALL_CONTRACTS, {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// })
//   .then((respond) => respond.json())
//   .then((res) => {
//     console.log('getAllContracts', res);
//     dispatch({ type: 'GET_ALL_CONTRACTS', allContracts: res });
//   })
//   .catch((err) => console.log('Error getAllContracts occured', err));

export const getContractByUserId = (idUser, page) => (dispatch) => fetch(
  `${API.GET_CONTRACT_BY_USER_ID + idUser }?page=${page}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
)
  .then((respond) => respond.json())
  .then((res) => {
    console.log('1111111111111111111222222222',res);
    // console.log('getContractByUserId', res);
    dispatch({ type: 'GET_CONTRACT_BY_USER_ID', contractByIdUser: res });
  })
  .catch((err) => console.log('Error getContractByUserId occured', err));

export const getContractByTeacherId = (idUser, page) => (dispatch) => fetch(
  `${API.GET_CONTRACT_BY_TEACHER_ID + idUser }?page=${page}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
)
  .then((respond) => respond.json())
  .then((res) => {
    console.log('getContractByTeacherId', res);
    if (!res.message) {
      dispatch({ type: 'GET_CONTRACT_BY_TEACHER_ID', contractByIdTeacher: res });
    } else {
      dispatch({ type: 'GET_CONTRACT_BY_TEACHER_ID', contractByIdTeacher: [] });
    }
  })
  .catch((err) => console.log('Error getContractByTeacherId occured', err));

export const getDetailContractByIdContract = (idContract) => (dispatch) => fetch(
  API.GET_DETAIL_CONTRACT_BY_ID + idContract, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
)
  .then((respond) => respond.json())
  .then((res) => {
    console.log('getDetailContractByIdContract', res);
    dispatch({ type: 'GET_DETAIL_CONTRACT_BY_ID', contractByIdContract: res });
  })
  .catch((err) => console.log('Error getDetailContractByIdContract occured', err));

export const updateStateContract = (
  idContract,
  state
) => (dispatch) => fetch(API.UPDATE_STATE_CONTRACT + idContract, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    idContract,
    state
  })
})
  .then(async (respond) => {
    console.log('Respond from updateStateContract:', respond);
    // if (respond.status === 200) {
    //   await Swal.fire({
    //     icon: 'success',
    //     title: 'Thành Công',
    //   });
    //   history.push('/Settings');
    // } else {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Thất bại',
    //     text: 'Xin hãy thử lại'
    //     // footer: '<a href>Đến Trang Chủ</a>',
    //   });
    // }
  })
  // .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
  .catch((err) => console.log('Error updateStateContract occured', err));

export const filterContractsOfStudent = (idUser, idState) => (dispatch) => fetch(
  `${API.FILTER_LIST_CONTRACT_STUDENT + idUser}?idState=${idState}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
)
  .then((respond) => respond.json())
  .then((contractsOfStudent) => {
    console.log('filterContractsOfStudent', contractsOfStudent);
    if (contractsOfStudent.message) {
      dispatch({ type: 'FILTER_LIST_CONTRACT_STUDENT', contractsOfStudent: [] });
    } else {
      dispatch({ type: 'FILTER_LIST_CONTRACT_STUDENT', contractsOfStudent });
    }
  })
  .catch((err) => console.log('Error filterContractsOfStudent occured', err));

export const filterContractsOfTeacher = (idUser, idState) => (dispatch) => fetch(
  `${API.FILTER_LIST_CONTRACT_TEACHER + idUser}?idState=${idState}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
)
  .then((respond) => respond.json())
  .then((contractsOfTeacher) => {
    console.log('filterContractsOfTeacher', contractsOfTeacher);
    if (contractsOfTeacher.message) {
      dispatch({ type: 'FILTER_LIST_CONTRACT_TEACHER', contractsOfTeacher: [] });
    } else {
      dispatch({ type: 'FILTER_LIST_CONTRACT_TEACHER', contractsOfTeacher });
    }
  })
  .catch((err) => console.log('Error filterContractsOfTeacher occured', err));

export const sendComplaint = (
  contractId,
  reason
) => (dispatch) => fetch(API.SEND_COMPLAINT, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    contractId,
    reason
  })
})
  .then(async (respond) => {
    if (respond.status === 200) {
      await Swal.fire({
        icon: 'success',
        title: 'Thành Công',
      });
      // history.push('/Settings');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Thất bại',
        text: 'Xin hãy thử lại'
        // footer: '<a href>Đến Trang Chủ</a>',
      });
    }
  })
  .catch((err) => console.log('Error sendComplaint occured', err));

export const sendComment = (
  idUser,
  content,
  starNumber,
  idTeacher,
  idContract
) => (dispatch) => fetch(API.SEND_COMMENT, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    idUser,
    content,
    starNumber,
    idTeacher,
    idContract
  })
})
  .then(async (respond) => {
    if (respond.status === 200) {
      await Swal.fire({
        icon: 'success',
        title: 'Thành Công',
      });
      // history.push('/Settings');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Thất bại',
        text: 'Xin hãy thử lại'
        // footer: '<a href>Đến Trang Chủ</a>',
      });
    }
  })
  // .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
  .catch((err) => console.log('Error sendComment occured', err));

export const getComplaintByIdContract = (idContract) => (dispatch) => fetch(
  API.GET_COMLAINT_BY_IDCONTRACT + idContract, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
)
  .then((respond) => respond.json())
  .then((complaintByIdContract) => {
    console.log('getComplaintByIdContract action', complaintByIdContract);
    dispatch({ type: 'GET_COMLAINT_BY_IDCONTRACT', complaintByIdContract });
  })
  .catch((err) => console.log('Error getComplaintByIdContract occured', err));


export const rateStar = (star) => ({
  type: 'RATE_STAR',
  star
});

export const getMailByKeyPass = (keypass) => (dispatch) => fetch(
  `${API.GET_KEY_PASS}?keyPass=${keypass}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
}
)
  .then((response) => response.json())
  .then((result) => {
    dispatch({ type: 'GET_KEY_PASS', result });
  })
  .catch((error) => {
    throw error;
  });
