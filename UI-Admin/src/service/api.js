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

  // Statistics Thống kê
  REVENUE_BY_DAY: `${URL}/api-admin/revenue-by-date`,
  REVENUE_BY_MONTH: `${URL}/api-admin/revenue-by-month`,
  REVENUE_BY_YEAR: `${URL}/api-admin/revenue-by-year`,

  SKILLS_IN_A_DAY: `${URL}/api-admin/top-revenue-by-skill-in-one-day`,
  SKILLS_IN_7_DAY: `${URL}/api-admin/top-revenue-by-skill-in-7-day`,
  SKILLS_IN_30_DAY: `${URL}/api-admin/top-revenue-by-skill-in-30-day`,
  SKILLS_IN_90_DAY: `${URL}/api-admin/top-revenue-by-skill-in-90-day`,
  SKILLS_ALL: `${URL}/api-admin/top-revenue-by-skill-in-all-day`,

  TEACHER_TOP10_A_DAY: `${URL}/api-admin/top-ten-in-one-day`,
  TEACHER_TOP10_7_DAY: `${URL}/api-admin/top-ten-in-7-day`,
  TEACHER_TOP10_30_DAY: `${URL}/api-admin/top-ten-in-30-day`,
  TEACHER_TOP10_90_DAY: `${URL}/api-admin/top-ten-in-90-day`,
  TEACHER_TOP10_ALL: `${URL}/api-admin/top-ten-in-all-day`,

  GET_SUM_USER: `${URL}/api-admin/sum-teacher-admin-student`,
};

export default APIService;
