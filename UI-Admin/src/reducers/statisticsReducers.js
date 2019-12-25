export const dayRevenue = (state = [], action) => {
    switch (action.type) {
        case 'REVENUE_BY_DAY': {
            return action.revenue;
        }
        default:
            return state;
    }
};

export const monthRevenue = (state = [], action) => {
    switch (action.type) {
        case 'REVENUE_BY_MONTH': {
            return action.revenue;
        }
        default:
            return state;
    }
};

export const yearRevenue = (state = [], action) => {
    switch (action.type) {
        case 'REVENUE_BY_YEAR': {
            return action.revenue;
        }
        default:
            return state;
    }
};

export const skillsADay = (state = [], action) => {
    switch (action.type) {
        case 'SKILLS_IN_A_DAY': {
            return action.skills;
        }
        default:
            return state;
    }
};

export const skills7Days = (state = [], action) => {
    switch (action.type) {
        case 'SKILLS_IN_7_DAY': {
            return action.skills;
        }
        default:
            return state;
    }
};

export const skills30Days = (state = [], action) => {
    switch (action.type) {
        case 'SKILLS_IN_30_DAY': {
            return action.skills;
        }
        default:
            return state;
    }
};

export const skills90Days = (state = [], action) => {
    switch (action.type) {
        case 'SKILLS_IN_90_DAY': {
            return action.skills;
        }
        default:
            return state;
    }
};

export const skillsAllDays = (state = [], action) => {
    switch (action.type) {
        case 'SKILLS_ALL': {
            return action.skills;
        }
        default:
            return state;
    }
};
