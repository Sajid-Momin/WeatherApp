import { Platform, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default {
    apiKey : 'cbdf309ca4a19e361c2406a3908037ba',
    windowWidth,
    windowHeight,
    GET_ONE_CALL : 'GET_ONE_CALL',
    GET_WEATHER : 'GET_WEATHER',
}
