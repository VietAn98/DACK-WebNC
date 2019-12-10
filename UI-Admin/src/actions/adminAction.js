import Swal from 'sweetalert2';
import API from '../service/api';
import history from '../history';

export const login = () => ({
  type: 'IS_LOGIN',
});
export const noLogin = () => ({
  type: 'DONT_LOGIN',
});

export const adminLoginRequest = (gmail, password) => (dispatch) =>
  // dispatch({ type: 'LOGIN_FETCHING' });
   fetch(API.LOGIN, {
    method: 'POST',
    body: JSON.stringify({ gmail, password }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((res) => {
      // eslint-disable-next-line no-prototype-builtins
      if (res.hasOwnProperty('token')) {
        // Swal.fire('Thông báo', 'Thành công', 'success');
        localStorage.setItem('token', res.token);
        history.push('/');
        window.location.reload();
      } else {
        // dispatch({ type: 'LOGIN_COMPLETED' });
        Swal.fire('Thông báo', 'Không thành công', 'error');
        localStorage.removeItem('token');
      }
    })
    .catch((error) => {
      throw error;
    });
export const adminCreateAccount = (name, gmail, password) => (dispatch) => (
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
      .then((respond) => respond.json())
      .then((data) => {
        if (data) {
          Swal.fire('Thông báo', 'Thành công', 'success');
        } else {
          Swal.fire('Thông báo', 'Không thành công', 'error');
        }
      })
      // .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
      .catch((err) => Swal.fire('Thông báo', 'Không thành công', 'error'))
  );

// export const registerRequest = (
// 	name,
// 	gmail,
// 	password,
// 	districtId,
// 	gender,
// 	categoryUser,
// ) => (dispatch) => {
//
