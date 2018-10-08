const initialState = {
    activeMilk: ''
}

const milks = (state = initialState, action) =>{
    switch (action.type){
        case 'UPDATE_ACTIVE_MILK':
         return state.activeMilk: action.milk
    }
}