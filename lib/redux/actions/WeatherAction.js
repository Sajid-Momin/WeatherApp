import {
    GET_ONE_CALL,
    GET_WEATHER
} from '../../config/Constants';

import api from '../../api/Services'


export const getWeatherRequest = (city) => {
    return async (dispatch, getState) => {
        try {
            const response = await api.getWheather(city)
            dispatch({
                type: GET_WEATHER,
                payload: response.data
            })
        } catch (error) {
            throw error
        }
    }
}

export const getOneCallRequest = (lat, lon) => {
    return async (dispatch, getState) => {
        try {
            const response = await api.getOneCall(lat, lon)
            dispatch({
                type: GET_ONE_CALL,
                payload: response.data
            })
        } catch (error) {
            throw error
        }
    }
}