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
        dispatch(noLogin());
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

export const changePassword = (id, newPassw, oldPassw) => (dispatch) => fetch(
  API.CHANGE_PASSWORD, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id,
    newPassw,
    oldPassw
  })
}
)
  .then((respond) => {
    if (respond.status === 200) {
      Swal.fire('Cập nhật thành công');
      history.push('/');
    } else {
      Swal.fire('Cập nhật thất bại, vui lòng kiểm tra lại');
    }
  })
  .catch((err) => console.log('Error change password occured', err));

export const forgotPassword = (gmail) => (dispatch) => fetch(API.FORGOT_PASSWORD, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    gmail
  })
}).then((resp) => {
  console.log(resp);
  if (resp.status === 200) {
    Swal.fire('Đăng nhập vào  gmail để thực thay đổi  mật khẩu');
  } else {
    Swal.fire('Gmail không tồn tại');
  }
});

export const updatePassword = (newPass) => (dispatch) => {
  const path = window.location.search;
  return fetch(API.FORGOT_FORGOT_PASSWORD + path, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      newPass
    })
  }).then((resp) => {
    if (resp.status === 200) {
      Swal.fire('Cập nhật mật khẩu thành công');
      history.push('/');
    } else {
      Swal.fire('Cập nhật mật khẩu thất bại');
    }
  });
};

export const getMailByKeyPass = (keypass) => (dispatch) => fetch(API.GET_KEY_PASS + '?keyPass=' + keypass, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})
  .then((response) => response.json())
  .then((result) => {
    dispatch({ type: 'GET_KEY_PASS', result });
  })
  .catch((error) => {
    throw error;
  });

// export const registerRequest = (
// 	name,
// 	gmail,
// 	password,
// 	districtId,
// 	gender,
// 	categoryUser,
// ) => (dispatch) => {
//
