const initialState = {
    activeMilk: '',
    ListOfMilks: []
}

const milks = (state = initialState, action) =>{
    switch (action.type){
        case 'UPDATE_ACTIVE_MILK':
            return {activeMilk : action.milk}
        default:
            return state
    }
}

export default milks