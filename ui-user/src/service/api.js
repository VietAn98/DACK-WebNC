import URL from './url';

const APIService = {
  LOGIN: `${URL}/api/login-user`,
  REGISTER: `${URL}/api/register-user`,
  REGISTER_TEACHING: `${URL}/api/add-profile-teacher`,
  GET_INFO: `${URL}/api/profile`,
//   CHANGE_INFO: `${URL}/api/updateInfor`,
  UPLOAD_AVATAR: `${URL}/api/image`,
//   CHANGE_PASSWORD: `${URL}/api/password`,
//   GET_LIST_FIELD_BY_DIST: `${URL}/api/get-list-field-`,
//   GET_LIST_DISTRICT: `${URL}/api/list-district-in-city-`
};

export default APIService;
