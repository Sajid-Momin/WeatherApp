import apiInstance from './Manager'
const appId = '8431c1af723ec74b5e15ecf8656b25dc'
//http://api.openweathermap.org/data/2.5/weather?q=Pune&lang=hi&appid=8431c1af723ec74b5e15ecf8656b25dc

//https://api.openweathermap.org/data/2.5/onecall?lat=37.421998333333335&lon=-122.084&lang=hi&appid=8431c1af723ec74b5e15ecf8656b25dc
const getWeatherByLatLon = (lat, lon) => apiInstance.get(`/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${appId}`)
const getWeatherByCity = (city) => apiInstance.get(`/weather?q=${city}&appid=${appId}&units=metric&lang=en`)
const getOneCallByLatLon = (lat, lon) => apiInstance.get(`/onecall?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${appId}`)

export default {
  getOneCallByLatLon,
  getWeatherByCity,
  getWeatherByLatLon,
}
