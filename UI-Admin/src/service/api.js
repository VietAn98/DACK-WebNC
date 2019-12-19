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

  // contract
  GET_LIMIT_CONTRACT: `${URL}/api-admin/get-list-limit-contract`,
  GET_LIST_STATE_CONTRACT: `${URL}/api-admin/get-list-state-contract`,
  GET_LIST_CONTRACT_BY_STATE: `${URL}/api-admin/get-list-contract-by-state/`,
  GET_DETAIL_CONTRACT: `${URL}/api-admin/get-detail-contract/`,
  UPDATE_CONTRACT: `${URL}/api-admin/update-contract`,

  // password
  CHANGE_PASSWORD: `${URL}/api-admin/update-password`,
  FORGOT_PASSWORD: `${URL}/api-admin/forget-password`,
  FORGOT_FORGOT_PASSWORD: `${URL}/api-admin/update-new-password`,
  GET_KEY_PASS: `${URL}/api-admin/get-keypass`,

  //  complaint
  GET_LIMIT_COMPLAINT: `${URL}/api-admin/get-list-complaint`,

//   GET_INFO: `${URL}/api/current-user-profile`,
//   CHANGE_INFO: `${URL}/api/updateInfor`,
//   // CHANGE_AVATAR: `${URL}/user/uploadavatar`,
 
//   GET_LIST_FIELD_BY_DIST: `${URL}/api/get-list-field-`,
//   GET_LIST_DISTRICT: `${URL}/api/list-district-in-city-`
};

export default APIService;
