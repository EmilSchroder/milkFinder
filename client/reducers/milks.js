const initialState = {
    activeMilk: '',
    listOfMilks: []
}

const milks = (state = initialState, action) => {
    switch (action.type){
        case 'UPDATE_ACTIVE_MILK':
            return {...state, activeMilk : action.milk}
        case 'SET_ALL_MILKS':
            return {...state, listOfMilks: action.allMilks}
        default:
            return state
    }
}

export default milks