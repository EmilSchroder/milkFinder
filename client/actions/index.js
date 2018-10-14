import request from 'superagent'
const baseURL = 'https://milkfinder.herokuapp.com/api/'

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


export const updateDisplayedCafes = (selectedCafes) =>{
    return {
        type: 'UPDATE_DISPLAYED_CAFES',
        cafes: selectedCafes
    }
}

export function displayAllCafes(){
    return dispatch => {
        return request.get(baseURL+`cafes`)
            .then(res => {
                dispatch(updateDisplayedCafes(res.body))
            })
            .catch(err => {
                console.log(err)
            })
    }
}



export function fetchRelevantCafesByMilk(id){
    
    return dispatch => {
        return request.get(baseURL+`milks/${id}/cafes`)
            .then(res => {
                dispatch(updateDisplayedCafes(res.body)
            )})
            .catch(err => {
                console.log(err)
            })
    }
}

export function fetchRelevantCafes(id){
    return dispatch => {
        return request.get(baseURL+`cafes/${id}`)
        .then(res => dispatch(updateDisplayedCafes([res.body])))
        .catch(err => {
            console.log(err)
        })
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
//

//Set all cafes pairing

export const setAllCafes = (manyCafes) =>{
    return {
        type: 'SET_ALL_CAFES',
        allCafes: manyCafes
    }
}

export function fetchAllCafes(){
    return dispatch => {
        return request.get(baseURL+'cafes')
            .then(res => dispatch(setAllCafes(res.body)))
            .catch(err => {
                console.log(err)
            })
    }
}
//