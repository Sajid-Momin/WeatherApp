import {
    GET_ONE_CALL,
    GET_WEATHER
} from '../../config/Constants';

const initialState = {
    weather : null,
   oneCall: null
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WEATHER' : 
            return {
                ...state,
                weather: action.payload
            }
        case 'GET_ONE_CALL':
            return {
                ...state,
                oneCall: action.payload
            }
        
        default:
            return state
    }
}