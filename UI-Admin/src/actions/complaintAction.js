import API from '../service/api';

export const getListLimitComplaint = (page) => (dispatch) => fetch(`${API.GET_LIMIT_COMPLAINT}?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
    .then((response) => response.json())
    .then((complaints) => {
      dispatch({ type: 'GET_LIMIT_COMPLAINT', complaints });
    })
    .catch((error) => {
      throw error;
    });