import URL from './url';

const APIService = {
  LOGIN: `${URL}/api/login-user`,
  REGISTER: `${URL}/api/register-user`,
  UPDATE_INFOR_TEACHER: `${URL}/api/update-infor-teacher`,
  UPDATE_INFOR_STUDENT: `${URL}/api/update-infor-student`,
  GET_INFO: `${URL}/api/profile`,
  GET_USER_INFO_BY_ID: `${URL}/api/get-detail-teacher/`,
  //   CHANGE_INFO: `${URL}/api/updateInfor`,
  UPLOAD_AVATAR: `${URL}/api/image`,
  //   CHANGE_PASSWORD: `${URL}/api/password`,
  GET_DISTRICT_BY_IDCITY: `${URL}/api/get-districts-by-city/`,
  GET_CITY_BY_IDDISTRICT: `${URL}/api/get-city-by-district/`,
  GET_LIST_DISTRICT: `${URL}/api/get-list-district`,
  GET_LIST_CITY: `${URL}/api/get-list-city`,
  GET_SKILLS: `${URL}/api/get-List-Skill-ByUser/`,
  GET_LIST_SKILLS: `${URL}/api/get-list-skills`,
  GET_LIST_TEACHERS: `${URL}/api/get-list-teaching`,
};

export default APIService;
