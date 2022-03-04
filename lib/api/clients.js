import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ActivityIndicator, SafeAreaView, ImageBackground, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import Colors from '../config/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import windowWidth from '../config/Constants';
import { moment12Hour, roundCelsius } from '../utils/Utils';
import colors from '../config/Colors';
import { useSelector, useDispatch } from 'react-redux';
// import  weatherAction  from '../redux/Actions/WeatherAction';
import {WeatherAction} from '../redux/actions/WeatherAction';
// import * as weatherAction from '../redux/Actions/WeatherAction';
const Client = () => {
    const [isLoading, setLoading] = useState(true);
  //  const [info, setInfo] = useState({});
   // const [city, setCity] = useState('Pune');

   const weather = useSelector(state => state.weatherReducer);

   const dispatch = useDispatch();

    useEffect(() => {
       getWeather('Pune');
    }, []);

    const getWeather = (city) => {
        // setMessage('Fetching current weather in your location')
        dispatch(WeatherAction.getWeatherRequest(city))
            .then(() => {
                // setMessage('')
                console.log('weather oneCall SUCCESS')
            })
            .catch((err) => {
                // setMessage('Failed fetching current weather. Please check your internet connection.')
                console.log('weather oneCall ERROR', err)
            })
            .finally(() => setLoading(false));
    };

    const getWeatherOneCall = (lat, lon) => {
       // setMessage('Fetching current weather in your location')
        dispatch(WeatherAction.getOneCallRequest(lat, lon))
            .then(() => {
                //setMessage('')
                console.log('weather oneCall SUCCESS')
            })
            .catch((err) => {
               // setMessage('Failed fetching current weather. Please check your internet connection.')
                console.log('weather oneCall ERROR', err)
            })
    };


    return (

        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor="#000" />
           

                <View style={{ flex: 1, padding: 0 }}>
                    {isLoading ? <ActivityIndicator size="large" color="#0c9" /> :
                        (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>

                            <View style={styles.Search_Box_View}>
                                <TextInput placeholder="Search" placeholderTextColor="#FFF" style={styles.Search_Box} onChangeText={(text) => {setCity(text);}} />
                                <TouchableOpacity style={styles.button_touch} onPress={() => {fetchData}}>
                                    <Icon name="search1" size={24} color="#FFF" />
                                </TouchableOpacity>
                            </View>

                            <View>
                                <Image
                                    style={styles.icon}
                                    source={{ uri: "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png" }}
                                />

                                <Text style={styles.temp}>{weather.main.temp} &#8451;</Text>
                                <Text style={styles.city}>{weather.name}</Text>
                                <Text style={styles.title}>{weather.weather[0].description}</Text>
                            </View>

                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <Card
                                        iconName='sunrise'
                                        iconType='feather'
                                        title='Sunrise'
                                        value={moment12Hour(weather.sys.sunrise)}
                                    />
                                    <Card
                                        iconName='sunset'
                                        iconType='feather'
                                        title='Sunset'
                                        value={moment12Hour(weather.sys.sunset)}
                                    />
                                    <Card
                                        iconName='arrow-up'
                                        iconType='feather'
                                        title='High'
                                        value={roundCelsius(weather.main.temp_max)}
                                    />
                                    <Card
                                        iconName='arrow-down'
                                        iconType='feather'
                                        title='Low'
                                        value={roundCelsius(weather.main.temp_min)}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <Card
                                        iconName='layers'
                                        iconType='feather'
                                        title='Pressure'
                                        value={`${weather.main.pressure} hPa`}
                                    />
                                    <Card
                                        iconName='droplet'
                                        iconType='feather'
                                        title='Humidity'
                                        value={`${weather.main.humidity} %`}
                                    />
                                    <Card
                                        iconName='eye'
                                        iconType='feather'
                                        title='Visibility'
                                        value={(weather.visibility / 1000).toFixed(2) + " Km"}
                                    />
                                    <Card
                                        iconName='wind'
                                        iconType='feather'
                                        title='Wind'
                                        value={`${weather.wind.speed} m/s`}
                                    />
                                </View>

                            </View>

                        </View>
                        )
                    }
                </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
    
    Search_Box_View: {
        height: "20%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    Search_Box: {
        height: "35%",
        width: "80%",
        borderColor: "#FFF",
        borderWidth: 1,
        borderRadius: 15,
        color: "#FFF",
        paddingHorizontal: 15
    },
    button_touch:{
        marginLeft:"5%",
        height:"35%",
        width:"8%",
        justifyContent:"center",
        alignItems:"center"
      },
    title: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 25,
        color: Colors.white,
        textAlign: 'center',
        paddingBottom: 10,
        textTransform: 'capitalize',
    },
    icon: {
        width: 100,
        height: 60,
        alignSelf: 'center',
        marginTop: 50,
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
        fontSize: 50,
        color: 'green',
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

export default Client;
