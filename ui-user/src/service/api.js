import URL from './url';

const APIService = {
  LOGIN: `${URL}/api/login-user`,
  REGISTER: `${URL}/api/register-user`,
  UPDATE_INFOR_TEACHER: `${URL}/api/update-infor-teacher`,
  UPDATE_INFOR_STUDENT: `${URL}/api/update-infor-student`,
  GET_INFO: `${URL}/api/profile`,
  GET_USER_INFO_BY_ID: `${URL}/api/get-detail-teacher/`, // lấy thông tin teacher + student
  GET_TEACHER_INFO_BY_ID: `${URL}/api/get-detail-single-teacher/`,
  //   CHANGE_INFO: `${URL}/api/updateInfor`,
  UPLOAD_AVATAR: `${URL}/api/image`,
  CHANGE_PASSWORD: `${URL}/api/update-password-after-login`,
  GET_KEY_PASS: `${URL}/api/get-keypass`,

  GET_DISTRICT_BY_IDCITY: `${URL}/api/get-districts-by-city/`,
  GET_CITY_BY_IDDISTRICT: `${URL}/api/get-city-by-district/`,
  GET_LIST_DISTRICT: `${URL}/api/get-list-district`,
  GET_LIST_CITY: `${URL}/api/get-list-city`,

  // teacher
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
  GET_TEAHCERS_BY_SKILL: `${URL}/api/get-teachers-by-skill/`,
  GET_TEACHERS_BY_FIVE_STAR: `${URL}/api/get-teachers-by-five-start`,
  GET_TEACHERS_BY_DISTRICT: `${URL}/api/get-teachers-by-district/`,
  FORGOT_PASSWORD: `${URL}/api/forget-password`,
  FORGOT_FORGOT_PASSWORD: `${URL}/api/update-new-password`,
  GET_USER_COMMENT: `${URL}/api/get-comment-by-user/`,

  // contract
  CREATE_CONTRACT: `${URL}/api/create-contract`,
  GET_ALL_CONTRACTS: `${URL}/api/getAllContract`,
  GET_CONTRACT_BY_USER_ID: `${URL}/api/get-contract-by-user/`,
  GET_CONTRACT_BY_TEACHER_ID: `${URL}/api/get-contract-by-teacher/`,
  GET_DETAIL_CONTRACT_BY_ID: `${URL}/api/get-detail-contract/`,
  UPDATE_STATE_CONTRACT: `${URL}/api/update-state-contract/`,

  FILTER_LIST_CONTRACT_STUDENT: `${URL}/api/filter-list-contract-student/`,
  FILTER_LIST_CONTRACT_TEACHER: `${URL}/api/filter-list-contract-teacher/`,

  SEND_COMPLAINT: `${URL}/api/create-complaint`,
  SEND_COMMENT: `${URL}/api/create-comment`,
  GET_COMLAINT_BY_IDCONTRACT: `${URL}/api/get-complaint-by-contract/`,

  // thong ke
  GET_SUM_MONEY_EACH_DAY: `${URL}/api/get-sum-price-by-days/`
};

export default APIService;
