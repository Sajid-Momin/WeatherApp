
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


const DetailScreen = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [indicatorIndex, setIndicatorIndex] = useState(0)
    const [message, setMessage] = useState('')
    const [weather, setWeather] = useState(null);
    const [t, i18n] = props.screenProps; 
    // const currentWeather = useSelector(state => state.weatherReducer.weather);
    // const weather = null; //useSelector(state => state.weatherReducer.oneCall)
    // const dispatch = useDispatch()

    store.subscribe(() => {
        // if(store.getState().action.indexOf('messanger') !== -1) {
//console.log('subscribed for counter actions', store.getState().weatherReducer.oneCall);
        // }
        setWeather(store.getState().weatherReducer.oneCall);
    });


    return (
        <View style={{ flex: 1 }}>
            {weather == null ?

                <ActivityIndicator size="large" color="#0c9" />
                :
                (
                    <ScrollView nestedScrollEnabled={true}>

                        <View style={{ flex: 1, flexDirection: 'column', padding: 20, justifyContent: 'space-between' }}>

                            <HourlyForecast data={weather.hourly.slice(0, 24)} screenProps={[t, i18n]} />

                            <View style={{ paddingVertical: 20 }}>

                                <DailyForecast data={weather.daily.slice(1, 8)} screenProps={[t, i18n]} />
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
