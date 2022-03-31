
const initialState = {
    language : null,
}

export const localizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE' : 
            return {
                ...state,
                language: action.payload
            }
        default:
            return state
    }
}