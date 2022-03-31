import React from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Image,
} from 'react-native';
import Colors from '../config/Colors';

import { roundCelsius, momentHourOnly, getWeatherIcon } from '../utils/Utils'

const HourlyForecast = (props) => {
    const [t, i18n] = props.screenProps; 
    const renderItem = (itemData) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text1}>{momentHourOnly(itemData.item.dt)}</Text>
                <Image
                    source={{uri : `${getWeatherIcon(itemData.item.weather[0].icon)}`}}
                    style={styles.image} 
                />
                <Text style={styles.text2}>{roundCelsius(itemData.item.temp)}</Text>
            </View>
        );
    }

    return (
        <View style={styles.mainContainer}>
             <Text style={styles.title}>{t('Today_Forecast')}</Text>
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={props.data}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  
    container: {
        width : 75,
        padding: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 19,
        marginHorizontal: 3,
        backgroundColor: Colors.secondaryLight
    },
    mainContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        marginHorizontal: 3,
        flexDirection : 'column',
    },
    title: {
        width: '100%',
        fontFamily: 'Ubuntu-Medium',
        fontSize: 23,
        color: Colors.yellow,
        paddingVertical: 10,
        marginBottom:10,
        textTransform: 'capitalize',
        alignSelf: 'flex-start',
        borderColor: Colors.accent,
        borderBottomWidth : 1
    },
    text1: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 14,
        color: Colors.white,
    },
    image: {
        width: 60,
        height: 50,
    },
    text2: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        color: Colors.white,
    },
   
})

export default HourlyForecast