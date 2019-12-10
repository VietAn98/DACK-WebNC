import API from '../service/api';

export const login = () => ({
  type: 'IS_LOGIN'
});

export const getListSkill = () => (dispatch) => fetch(API.GET_SKILLS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
      .then((response) => response.json())
      .then((skills) => {
        dispatch({ type: 'GET_LIST_SKILL', skills });
      })
      .catch((error) => {
        throw error;
      });

export const deleteSingleSkill = (skillId) => (dispatch) => fetch(API.DELE_SKILL, {
      method: 'POST',
      body: JSON.stringify({ skillId }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(getListSkill());
      })
      .catch((error) => {
        throw error;
      });

export const updateSkill = (skillId, name) => (dispatch) => fetch(API.UPDATE_SKILL, {
      method: 'POST',
      body: JSON.stringify({ skillId, name }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(getListSkill());
      })
      .catch((error) => {
        throw error;
      });


export const addSkill = (name) => (dispatch) => fetch(API.ADD_SKILL, {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(getListSkill());
      })
      .catch((error) => {
        throw error;
      });
