const initialState = {
    activeCafe : '',
    currentDisplayedCafes: []
}

const cafes = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_ACTIVE_CAFE':
            return {...state, activeCafe: action.cafe}
        default: 
            return state
        }
}

export default cafes