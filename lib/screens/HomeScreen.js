import React, { useEffect, useState } from 'react';
import {
    FlatList, Text, View, Image, StyleSheet, ActivityIndicator, SafeAreaView, Alert, Button,
    Platform, ImageBackground, StatusBar, TextInput, TouchableOpacity, ScrollView,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import windowWidth from '../config/Constants';
import { moment12Hour, roundCelsius, getWeatherIcon, momentDayTime } from '../utils/Utils';
import colors from '../config/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherRequestByCity, getWeatherRequestByLatLon, getOneCallRequestByCity, getOneCallRequestByLatLon } from '../redux/actions/WeatherAction';
import Location from 'react-native-location';
import api from '../api/Services';
import NetworkUtils from '../utils/NetworkUtils';
// import { useNetInfo } from '@react-native-community/netinfo';


const HomeScreen = () => {
    const [isLoading, setLoading] = useState(true);
    //  const [info, setInfo] = useState({});
    const [city, setCity] = useState('Pune');
    
    // const currentWeather = JSON.parse(`{"coord":{"lon":73.8553,"lat":18.5196},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":298.3,"feels_like":298.05,"temp_min":298.3,"temp_max":298.3,"pressure":1010,"humidity":45,"sea_level":1010,"grnd_level":949},"visibility":10000,"wind":{"speed":5.53,"deg":229,"gust":7.68},"clouds":{"all":57},"dt":1646999266,"sys":{"country":"IN","sunrise":1646961384,"sunset":1647004391},"timezone":19800,"id":1259229,"name":"Pune","cod":200}`);

    const currentWeather = useSelector(state => state.weatherReducer.weather);
    const dispatch = useDispatch();

    useEffect(() => {
        requestLocationPermission();
    }, []);


    const requestLocationPermission = () => {
        Location.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "fine"
            }
        })
            .then(granted => {
                console.log('granted', granted)
                if (granted) {
                    configureLocation()
                }
                else {
                    alertLocationPermission()
                }
            })
    }

    const alertLocationPermission = () => {
        Alert.alert(
            "Alert",
            "Location permission denied. Go to Settings to allow location permission.",
            [
                { text: "OK", onPress: () => requestLocationPermission() }
            ],
            { cancelable: false }
        )
    }

    const configureLocation = () => {
        if (Platform.OS === 'ios') {
            Location.configure({
                distanceFilter: 100,
                desiredAccuracy: {
                    ios: "best",
                },
            })
            getLatestLocation()
        }
        else {
            Location.configure({
                distanceFilter: 100,
                desiredAccuracy: {
                    android: "highAccuracy"
                },
                androidProvider: "auto",
                interval: 5000,
                fastestInterval: 10000,
                maxWaitTime: 5000,
            })
                .then(_ => {
                    console.log('configure SUCCESS')
                    getLatestLocation()
                })
                .catch(error => {
                    console.log('configure ERROR', error)
                    alertLocationStatus()
                })
        }
    }

    const alertLocationStatus = () => {
        Alert.alert(
            "Alert",
            "Location is disabled. For accurate result, please turn on device Location.",
            [
                { text: "OK", onPress: () => configureLocation() }
            ],
            { cancelable: false }
        )
    }

    const getLatestLocation = () => {
        Location.getLatestLocation({ timeout: 30000 })
            .then(latestLocation => {
                console.log('latest location', latestLocation)
                if (latestLocation) {
                    const latitude = latestLocation.latitude
                    const longitude = latestLocation.longitude
                    console.log(`Latitiude : ${latitude}  Longitudue : ${longitude}`);
                    getWeatherByLatLon(latitude, longitude);
                    getWeatherOneCallByLatLon(latitude, longitude);
                }
                else {
                    setMessage('Retrying to get current location')
                    requestLocationPermission()
                }
            })
    }


    const getWeatherByCity = (city) => {
        // setMessage('Fetching current weather in your location')
        dispatch(getWeatherRequestByCity(city))
            .then(() => {
                // setMessage('')
                setLoading(false);
                console.log('weather city SUCCESS');
                getWeatherOneCallByLatLon(currentWeather.coord.lat, currentWeather.coord.lon);
            })
            .catch((err) => {
                // setMessage('Failed fetching current weather. Please check your internet connection.')
                console.log('weather city ERROR', err)
            })
            .finally(() => setLoading(false));
    };

    const getWeatherByLatLon = (lat, lon) => {
        // setMessage('Fetching current weather in your location')
       // const isConnected = await NetworkUtils.isNetworkAvailable()
        if (true) {
           // Alert.alert("You are online!");
            dispatch(getWeatherRequestByLatLon(lat, lon))
            .then(() => {
                setLoading(false);
                //  console.log(currentWeather);
                console.log('weather lat lon SUCCESS');
            })
            .catch((err) => {
                // setMessage('Failed fetching current weather. Please check your internet connection.')
                console.log('weather  lat lon ERROR', err)
            })
        }
        else {
            Alert.alert("You are offline!");
        }
        
    };

    const getWeatherOneCallByLatLon = (lat, lon) => {
        // setMessage('Fetching current weather in your location')
        dispatch(getOneCallRequestByLatLon(lat, lon))
            .then(() => {
                // setMessage('')
                // setLoading(false)
                console.log('weather oneCall lat lon SUCCESS')
            })
            .catch((err) => {
                // setMessage('Failed fetching current weather. Please check your internet connection.')
                console.log('weather oneCall lat lon ERROR', err)
            })
    }

    const getWeatherOneCallByCity = (city) => {
        // setMessage('Fetching current weather in your location')
        dispatch(getOneCallRequestByCity(city))
            .then(() => {
                // setMessage('')
                // setLoading(false)
                console.log('weather oneCall city SUCCESS')
            })
            .catch((err) => {
                // setMessage('Failed fetching current weather. Please check your internet connection.')
                console.log('weather oneCall city ERROR', err)
            })
    }


    return (
        <View style={{ flex: 1 }}>
            {isLoading ?

                <ActivityIndicator size="large" color="#0c9" />
                :
                (
                    <ScrollView style={{ flex: 1 }}>
                        <View style={styles.mainContainer}>

                            <View style={styles.container}>

                                <Text style={styles.date}>{momentDayTime(currentWeather.dt)}</Text>
                                <TouchableOpacity onPress={() => { requestLocationPermission(); }}>
                                    <Icon name="location" size={30} color="#FFF" />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.searchBoxView}>

                                <TextInput placeholder="Search" placeholderTextColor="gray" style={styles.searchBox} onChangeText={(text) => { setCity(text); }} />
                                <TouchableOpacity style={styles.buttonTouch} onPress={() => { getWeatherByCity(city); }}>
                                    <Icon name="search" size={30} color="#FFF" />
                                </TouchableOpacity>
                            </View>

                            <View >
                                <Image
                                    style={styles.icon}
                                    source={{ uri: `${getWeatherIcon(currentWeather.weather[0].icon)}` }}
                                />
                                <Text style={styles.city}>{currentWeather.name}</Text>
                                <Text style={styles.temp}>{currentWeather.main.temp} &#8451;</Text>
                                <Text style={styles.description}>{currentWeather.weather[0].description}</Text>
                                <Text style={styles.feelsLike}>Feels Like : {currentWeather.main.feels_like} &#8451;</Text>
                            </View>

                            <View style={{ paddingVertical: 20 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <Card
                                        iconName='sunrise'
                                        iconType='feather'
                                        title='Sunrise'
                                        value={moment12Hour(currentWeather.sys.sunrise)}
                                    />
                                    <Card
                                        iconName='sunset'
                                        iconType='feather'
                                        title='Sunset'
                                        value={moment12Hour(currentWeather.sys.sunset)}
                                    />
                                    <Card
                                        iconName='arrow-up'
                                        iconType='feather'
                                        title='High'
                                        value={roundCelsius(currentWeather.main.temp_max)}
                                    />
                                    <Card
                                        iconName='arrow-down'
                                        iconType='feather'
                                        title='Low'
                                        value={roundCelsius(currentWeather.main.temp_min)}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <Card
                                        iconName='layers'
                                        iconType='feather'
                                        title='Pressure'
                                        value={`${currentWeather.main.pressure} hPa`}
                                    />
                                    <Card
                                        iconName='droplet'
                                        iconType='feather'
                                        title='Humidity'
                                        value={`${currentWeather.main.humidity} %`}
                                    />
                                    <Card
                                        iconName='eye'
                                        iconType='feather'
                                        title='Visibility'
                                        value={(currentWeather.visibility / 1000).toFixed(2) + " Km"}
                                    />
                                    <Card
                                        iconName='wind'
                                        iconType='feather'
                                        title='Wind'
                                        value={`${currentWeather.wind.speed} m/s`}
                                    />
                                </View>

                            </View>

                        </View>
                    </ScrollView>
                )
            }
        </View>

    );
};

const styles = StyleSheet.create({
    mainContainer: {
        // flex:1,
        padding: 15,
    },
    container: {
        width: '100%',
        // backgroundColor: 'red',       
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 10,
        // paddingVertical:15,
    },
    searchBoxView: {
        // backgroundColor: 'yellow',
        // width: "100%",
        marginVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: "row",
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 15,
    },
    searchBox: {
        flex: 1,
        color: colors.white,
        fontSize: 20,
    },
    buttonTouch: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 25,
        color: Colors.white,
        textAlign: 'center',
        paddingBottom: 10,
        textTransform: 'capitalize',
    },
    date: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 16,
        textAlign: 'center',
        color: 'gray',
    },
    feelsLike: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 20,
        textAlign: 'center',
        color: 'gray',
    },
    description: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 30,
        textAlign: 'center',
        color: Colors.lightgrey,
    },
    icon: {
        width: 150,
        height: 100,
        alignSelf: 'center',
        marginTop: 20,
    },
    city: {
        fontSize: 40,
        fontFamily: 'Ubuntu-Bold',
        color: colors.white,
        textAlign: 'center'
    },
    temp: {
        fontFamily: 'Ubuntu-Medium',
        fontWeight: '800',
        fontSize: 60,
        color: Colors.yellow,
        textAlign: 'center',
    },
    minTemp: {
        fontSize: 18,
        color: 'red',
        textAlign: 'left',
        margin: 10,
    },
    maxTemp: {
        fontSize: 18,
        color: 'green',
        textAlign: 'left',
        margin: 10,
    },
})

export default HomeScreen;
