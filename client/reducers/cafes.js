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
        case 'UPDATE_SELECTED_CAFES':
            return {...state, currentDisplayedCafes: action.cafes}
        default: 
            return state
        }
}

export default cafes