import {
    GET_ONE_CALL,
    GET_WEATHER
} from '../../config/Constants';

import api from '../../api/Services'


export const getWeatherRequestByCity = (city) => {
    return async (dispatch, getState) => {
        try {
            const response = await api.getWeatherByCity(city);
          //  console.log(response.data);
        dispatch({
                type: 'GET_WEATHER',
                payload: response.data
            })
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

export const getWeatherRequestByLatLon = (lat, lon) => {
    return async (dispatch, getState) => {
        try {
            const response = await api.getWeatherByLatLon(lat, lon);
           // console.log(response.data);
            dispatch({
                type: 'GET_WEATHER',
                payload: response.data
            })
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

export const getOneCallRequestByCity = (city) => {
    return async (dispatch, getState) => {
        try {
            const response = await api.getOneCallByCity(city);
           // console.log(response.data);
            dispatch({
                type: 'GET_ONE_CALL',
                payload: response.data
            })
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

export const getOneCallRequestByLatLon = (lat, lon) => {
    return async (dispatch, getState) => {
        try {
            const response = await api.getOneCallByLatLon(lat, lon);
         //   console.log(response.data);
            dispatch({
                type: 'GET_ONE_CALL',
                payload: response.data
            })
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}