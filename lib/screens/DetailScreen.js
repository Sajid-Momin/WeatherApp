
import React, { useEffect, useState } from 'react';
import {
    FlatList, Text, View, Image, StyleSheet, ActivityIndicator, SafeAreaView, Alert, Button,
    Platform, ImageBackground, StatusBar, TextInput, TouchableOpacity, ScrollView
} from 'react-native';
import Card from '../components/Card';

import Colors from '../config/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import windowWidth from '../config/Constants';
import HourlyForecast from '../components/Hourly';
import DailyForecast from '../components/Daily';
import { moment12Hour, roundCelsius } from '../utils/Utils';
import colors from '../config/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { getOneCallRequestByLatLon } from '../redux/actions/WeatherAction';
import Location from 'react-native-location';
import api from '../api/Services';
import store from '../redux/store/Store';


const DetailScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [indicatorIndex, setIndicatorIndex] = useState(0)
    const [message, setMessage] = useState('')
    const [weather, setWeather] = useState(null);
    // const currentWeather = useSelector(state => state.weatherReducer.weather);
    // const weather = null; //useSelector(state => state.weatherReducer.oneCall)
    // const dispatch = useDispatch()

    store.subscribe(() => {
        // if(store.getState().action.indexOf('messanger') !== -1) {
            console.log('subscribed for counter actions', store.getState().weatherReducer.oneCall);
        // }
        setWeather(store.getState().weatherReducer.oneCall);
    });


    // const getWeatherOneCallByLatLon = (lat, lon) => {
    //     setMessage('Fetching current weather in your location')
    //     dispatch(getOneCallRequestByLatLon(lat, lon))
    //         .then(() => {
    //             setMessage('')
    //             setLoading(false)
    //             console.log('weather oneCall SUCCESS')
    //         })
    //         .catch((err) => {
    //             setMessage('Failed fetching current weather. Please check your internet connection.')
    //             console.log('weather oneCall ERROR', err)
    //         })
    // }

    // useEffect(() => {
    //   //  getWeatherOneCall(currentWeather.coord.lat, currentWeather.coord.lon);
    // }, [])

    return (
        <View style={{ flex: 1 }}>
            {weather == null ?

                <ActivityIndicator size="large" color="#0c9" />
                :
                (
                    <ScrollView>

                        <View style={{ flex: 1, flexDirection: 'column', padding: 20, justifyContent: 'space-between' }}>

                            <HourlyForecast data={weather.hourly.slice(0, 24)} />

                            <View style={{ paddingVertical: 20 }}>

                                <DailyForecast data={weather.daily.slice(1, 8)} />
                            </View>
                        </View>

                    </ScrollView>
                )
            }
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },    
})

export default DetailScreen;
