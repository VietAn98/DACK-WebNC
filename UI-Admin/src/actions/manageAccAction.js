import API from "../service/api";

export const getListStudent = () => dispatch =>
  fetch(API.GET_STUDENtS, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  })
    .then(response => response.json())
    .then(students => {
      dispatch({ type: "GET_LIST_STUDENTS", students });
    })
    .catch(error => {
      throw error;
    });

export const getDetailUser = id => dispatch =>
  fetch(API.GET_DETAIL_USER + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  })
    .then(response => response.json())
    .then(user => {
      dispatch({ type: "GET_DETAIL_USER", user });
    })
    .catch(error => {
      throw error;
    });

export const getAddressByUser = id => dispatch =>
  fetch(API.GET_ADDRESS_USER + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  })
    .then(response => response.json())
    .then(address => {
      console.log("address", address);
      dispatch({ type: "GET_ADDRESS_USER", address });
    })
    .catch(error => {
      throw error;
    });

export const getDistrictByUser = id => dispatch =>
  fetch(API.GET_DISTRICT_USER + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  })
    .then(response => response.json())
    .then(district => {
      dispatch({ type: "GET_DISTRICT_USER", district });
    })
    .catch(error => {
      throw error;
    });

export const updateStateAccount = (userId, adLock) => dispatch =>
  fetch(API.UPDATE_STATE, {
    method: "POST",
    body: JSON.stringify({ userId, adLock }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(respond => console.log("Respond from uploadAvatar:", respond))
    // .then((status) => dispatch(userProfile(name, gmail, categoryUser)))
    .catch(err => console.log("Error uploadAvatar occured", err));

export const getListTeacher = () => dispatch =>
  fetch(API.GET_TEACHERS, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  })
    .then(response => response.json())
    .then(teacher => {
      dispatch({ type: "GET_LIST_TEACHER", teacher });
    })
    .catch(error => {
      throw error;
    });

export const getListLimitTeacher = (page) => dispatch =>
  fetch(`${API.GET_LIMIT_TEACHER }?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  })
    .then(response => response.json())
    .then(teacher => {
      dispatch({ type: "GET_LIST_LIMIT_TEACHER", teacher });
    })
    .catch(error => {
      throw error;
    });
