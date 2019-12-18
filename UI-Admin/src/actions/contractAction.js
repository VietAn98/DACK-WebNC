import Swal from 'sweetalert2';
import API from '../service/api';

// import { detailContract } from "../reducers/contractReducers";

export const getListLimitContract = (page) => (dispatch) => fetch(`${API.GET_LIMIT_CONTRACT}?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
    .then((response) => response.json())
    .then((contracts) => {
      dispatch({ type: 'GET_LIMIT_CONTRACT', contracts });
    })
    .catch((error) => {
      throw error;
    });

export const getListContract = () => (dispatch) => fetch(API.GET_LIST_STATE_CONTRACT, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
    .then((response) => response.json())
    .then((contracts) => {
      dispatch({ type: 'GET_LIST_STATE_CONTRACT', contracts });
    })
    .catch((error) => {
      throw error;
    });

export const filterCotractByState = (index, page) => (dispatch) => fetch(`${API.GET_LIST_CONTRACT_BY_STATE + index }?page=${ page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
    .then((response) => response.json())
    .then((contracts) => {
      dispatch({ type: 'GET_LIST_CONTRACT_BY_STATE', contracts });
    })
    .catch((error) => {
      throw error;
    });

export const getDetailContract = (id) => (dispatch) => fetch(API.GET_DETAIL_CONTRACT + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
    .then((response) => response.json())
    .then((detailContracts) => {
      console.log(detailContracts);
      dispatch({ type: 'GET_DETAIL_CONTRACT', detailContracts });
    })
    .catch((error) => {
      throw error;
    });

export const updateContract = (id, state) => (dispatch) => fetch(API.UPDATE_CONTRACT, {
    method: 'POST',
    body: JSON.stringify({ id, state }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((respond) => respond.json())
    .then((data) => {
      if (data) {
        Swal.fire('Thông báo', 'Thành công', 'success');
        dispatch(getDetailContract(id));
      } else {
        Swal.fire('Thông báo', 'Không thành công', 'error');
      }
    });
