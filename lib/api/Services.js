import apiInstance from './Manager'
const appId = '8431c1af723ec74b5e15ecf8656b25dc'

const getWeatherByLatLon = (lat, lon) => apiInstance.get(`/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`)
const getWeatherByCity = (city) => apiInstance.get(`/weather?q=${city}&appid=${appId}&units=metric`)
const getOneCallByLatLon = (lat, lon) => apiInstance.get(`/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`)

export default {
  getOneCallByLatLon,
  getWeatherByCity,
  getWeatherByLatLon,
}
