const initialState = {
    activeCafe : '',
    currentDisplayedCafes: [],
    listOfCafes:[]
}

const cafes = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_ACTIVE_CAFE':
            return {...state, activeCafe: action.cafe}
        case 'SET_ALL_CAFES':
            return {...state, listOfCafes: action.allCafes}
        default: 
            return state
        }
}

export default cafes