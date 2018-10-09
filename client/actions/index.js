import request from 'superagent'
const baseURL = 'http://localhost:3000/api/'

export const updateActiveMilk = (milko) =>{
    return {
        type: 'UPDATE_ACTIVE_MILK',
        milk: milko
    }
}

export const updateActiveCafe = (cafeo) =>{
    return {
        type: 'UPDATE_ACTIVE_CAFE',
        cafe: cafeo
    }
}

//Set all milks pairing

export const setAllMilks = (manyMilks) =>{
    return {
        type: 'SET_ALL_MILKS',
        allMilks: manyMilks
    }
}

export function fetchAllMilks(){
    return dispatch => {
        return request.get(baseURL+'milks')
            .then(res => dispatch(setAllMilks(res.body)))
            .catch(err => {
                console.log(err)
            })
    }
}