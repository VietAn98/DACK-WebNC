import API from '../service/api';

export const registerRequest = (
  name,
  gmail,
  password,
  districtId,
  gender,
  categoryUser,
) => (dispatch) => {
  return fetch(API.REGISTER, {
    method: 'POST',
    headers: {
      Accept: 'application/json', 'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      gmail,
      password,
      districtId,
      gender,
      categoryUser,
    }),

  }).then((respond) => console.log('Respond:', respond))
    // .then(status => dispatch(REGISTER_FETCH))
    .catch((err) => console.log('Error occured', err));
};
