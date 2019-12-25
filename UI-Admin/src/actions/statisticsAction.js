import API from '../service/api';

export const revenueByDay = () => (dispatch) => fetch(API.REVENUE_BY_DAY, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})
    .then((response) => response.json())
    .then((revenue) => {
        console.log('revenueByDay', revenue);
        dispatch({ type: 'REVENUE_BY_DAY', revenue });
    })
    .catch((error) => {
        throw error;
    });

export const revenueByMonth = () => (dispatch) => fetch(API.REVENUE_BY_MONTH, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})
    .then((response) => response.json())
    .then((revenue) => {
        console.log('revenueByMonth', revenue);
        dispatch({ type: 'REVENUE_BY_MONTH', revenue });
    })
    .catch((error) => {
        throw error;
    });

export const revenueByYear = () => (dispatch) => fetch(API.REVENUE_BY_YEAR, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})
    .then((response) => response.json())
    .then((revenue) => {
        console.log('revenueByYear', revenue);
        dispatch({ type: 'REVENUE_BY_YEAR', revenue });
    })
    .catch((error) => {
        throw error;
    });

export const skillsInADay = () => (dispatch) => fetch(API.SKILLS_IN_A_DAY, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})
    .then((response) => response.json())
    .then((skills) => {
        console.log('skillsInADay', skills);
        dispatch({ type: 'SKILLS_IN_A_DAY', skills });
    })
    .catch((error) => {
        throw error;
    });

export const skillsIn7Day = () => (dispatch) => fetch(API.SKILLS_IN_7_DAY, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})
    .then((response) => response.json())
    .then((skills) => {
        console.log('skillsIn7Day', skills);
        dispatch({ type: 'SKILLS_IN_7_DAY', skills });
    })
    .catch((error) => {
        throw error;
    });

export const skillsIn30Day = () => (dispatch) => fetch(API.SKILLS_IN_30_DAY, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})
    .then((response) => response.json())
    .then((skills) => {
        console.log('skillsIn30Day', skills);
        dispatch({ type: 'SKILLS_IN_30_DAY', skills });
    })
    .catch((error) => {
        throw error;
    });

export const skillsIn90Day = () => (dispatch) => fetch(API.SKILLS_IN_90_DAY, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})
    .then((response) => response.json())
    .then((skills) => {
        console.log('skillsIn90Day', skills);
        dispatch({ type: 'SKILLS_IN_90_DAY', skills });
    })
    .catch((error) => {
        throw error;
    });

export const skillsInAllDay = () => (dispatch) => fetch(API.SKILLS_ALL, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
})
    .then((response) => response.json())
    .then((skills) => {
        console.log('skillsInAllDay', skills);
        dispatch({ type: 'SKILLS_ALL', skills });
    })
    .catch((error) => {
        throw error;
    });
