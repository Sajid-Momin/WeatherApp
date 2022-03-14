import Moment from 'moment';

export const kelvinToCelsius = (temp) => {
    return `${Math.round(temp - 273.15)}°`
}

export const roundCelsius = (temp) => {
    return `${Math.round(temp)}°`
}

export const momentDayTime = (dt) => {
    return Moment.unix(dt).format('ddd, DD MMM yyy hh:mm A')
}

export const moment12Hour = (dt) => {
    return Moment.unix(dt).format('h:mm A')
}

export const momentHourOnly = (dt) => {
    return Moment.unix(dt).format('h A')
}

export const momentDay = (dt) => {
    return Moment.unix(dt).format('ddd')
}

export const getWeatherIcon = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}