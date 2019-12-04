import Swal from 'sweetalert2';
import API from '../service/api';
import history from '../history';

export const adminLoginRequest = (gmail, password) => dispatch => {
  // dispatch({ type: 'LOGIN_FETCHING' });
  return fetch(API.LOGIN, {
    method: 'POST',
    body: JSON.stringify({ gmail, password }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(res => {
      console.log('res login', res);
      // eslint-disable-next-line no-prototype-builtins
      if (res.hasOwnProperty('token')) {
        // Swal.fire('Thông báo', 'Thành công', 'success');
        localStorage.setItem('token', res.token);
        history.push('/admin/create-admin');
      } else {
        // dispatch({ type: 'LOGIN_COMPLETED' });
        Swal.fire('Thông báo', 'Không thành công', 'error');
        localStorage.removeItem('token');
      }
    })
    .catch(error => {
      throw error;
    });
};

export const adminCreateAccount = (name, gmail, password) => dispatch => {
  return (
    fetch(API.REGISTER, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        gmail,
        password
      })
    })
      .then(respond => {
        console.log('Respond:', respond);
        Swal.fire('Thông báo', 'Thành công', 'success');
      })
      // .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
      .catch(err =>  Swal.fire('Thông báo', 'Không thành công', 'error'))
  );
};

// export const registerRequest = (
// 	name,
// 	gmail,
// 	password,
// 	districtId,
// 	gender,
// 	categoryUser,
// ) => (dispatch) => {
//
