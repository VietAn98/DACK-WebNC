import axios from 'axios';
import Swal from 'sweetalert2';
import API from '../service/api';

export const registerRequest = (
  name,
  gmail,
  password,
  districtId,
  gender,
  categoryUser,
) => (dispatch) => {
  return axios
    .post(API.REGISTER, {
      name,
      gmail,
      password,
      districtId,
      gender,
      categoryUser,
    })
    .then((respond) => console.log('Respond:', respond))
    // .then(status => dispatch(REGISTER_FETCH))
    .catch((err) => console.log('Error occured', err));
};
