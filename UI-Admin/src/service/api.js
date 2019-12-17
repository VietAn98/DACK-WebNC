import URL from './url';

const APIService = {
  LOGIN: `${URL}/api-admin/login`,
  REGISTER: `${URL}/api-admin/admin-register`,
  GET_STUDENtS: `${URL}/api-admin/get-list-account-student`,
  GET_DETAIL_USER: `${URL}/api-admin/get-detail-account/`,
  GET_ADDRESS_USER: `${URL}/api-admin/get-district-city-byUser/`,
  GET_DISTRICT_USER: `${URL}/api-admin/get-district-byUser/`,
  UPDATE_STATE: `${URL}/api-admin/update-state-account`,

  // teacher
  GET_TEACHERS: `${URL}/api-admin/get-list-account-teacher`,
  GET_LIMIT_TEACHER: `${URL}/api-admin/get-list-limit-account-teacher`,
  GET_LIMIT_STUDENT: `${URL}/api-admin/get-list-account-student`,

  // skill
  GET_SKILLS: `${URL}/api-admin/get-list-skill`,
  GET_SKILLS_LIMIT: `${URL}/api-admin/get-list-limit-skill`,
  DELE_SKILL: `${URL}/api-admin/delete-skill`,
  UPDATE_SKILL: `${URL}/api-admin/update-skill`,
  ADD_SKILL: `${URL}/api-admin/add-skill`,

//   GET_INFO: `${URL}/api/current-user-profile`,
//   CHANGE_INFO: `${URL}/api/updateInfor`,
//   // CHANGE_AVATAR: `${URL}/user/uploadavatar`,
//   CHANGE_PASSWORD: `${URL}/api/password`,
//   GET_LIST_FIELD_BY_DIST: `${URL}/api/get-list-field-`,
//   GET_LIST_DISTRICT: `${URL}/api/list-district-in-city-`
};

export default APIService;
