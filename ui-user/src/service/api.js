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
  GET_SKILLS: `${URL}/api/get-List-Skill-ByUser/`, // return id
  GET_NAME_SKILLS: `${URL}/api/get-name-Skill-ByUser/`,
  GET_LIST_SKILLS: `${URL}/api/get-list-skills`,
  GET_LIST_TEACHERS: `${URL}/api/get-list-teaching`,
  GET_TEACHERS_TOP: `${URL}/api/get-list-top-teacher`,
  GET_TEACHERS_TOP_SIX: `${URL}/api/get-list-top-six-teachers`,
  GET_TEACHERS_PRICE_INCREASE: `${URL}/api/get-teachers-price-increase`,
  GET_TEACHERS_PRICE_DECREASE: `${URL}/api/get-teachers-price-decrease`,
  GET_TEACHERS_REATESUCCESS_DECREASE: `${URL}/api/get-teachers-rate-success-decrease`,
  GET_TEACHERS_BY_MINPRICE: `${URL}/api/get-teachers-min-price`,
  GET_TEACHERS_BY_MIDDLEPRICE: `${URL}/api/get-teachers-middle-price`,
  GET_TEACHERS_BY_MAXPRICE: `${URL}/api/get-teachers-max-price`,
  //
  GET_TEACHERS_BY_ONE_STAR: `${URL}/api/get-teachers-by-one-start`,
  GET_TEACHERS_BY_TWO_STAR: `${URL}/api/get-teachers-by-two-start`,
  GET_TEACHERS_BY_THREE_STAR: `${URL}/api/get-teachers-by-three-start`,
  GET_TEACHERS_BY_FOUR_STAR: `${URL}/api/get-teachers-by-four-start`,
  GET_TEACHERS_BY_FIVE_STAR: `${URL}/api/get-teachers-by-five-start`,
  GET_TEACHERS_BY_DISTRICT: `${URL}/api/get-teachers-by-district/`,

};

export default APIService;
