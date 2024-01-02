const initialState = {
    product:null
}

const rootReducer = (state =initialState, action)=>{
    switch(action.type){
        case 'SET_PRODUCT':
            return {
                ...state,
                product:action.payload
            };
        default: 
            return state;
    }
}

export default rootReducer;