import React from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
} from 'react-native'

import Colors from '../config/Colors'
import { roundCelsius, momentDay, getWeatherIcon } from '../utils/Utils'

const DailyForecast = (props) => {

    const renderRenderItem = (itemData) => {
       
        return (
            <View style={styles.container}>
                <Text style={[styles.text1, {flex:1} ]}>{momentDay(itemData.item.dt)}</Text>
            
               <View style={{flex: 3,flexDirection:'row' , alignItems:'center'}}>
               <Image
                    source={{ uri: `${getWeatherIcon(itemData.item.weather[0].icon)}` }}
                    style={styles.image}
                    resizeMode='contain'
                />
                  <Text style={styles.text1}>{itemData.item.weather[0].description}</Text>
                  
               </View>
                 
                 <View  style={{flexDirection:'row', flex:2}}>
                 <Text style={styles.text2}>{roundCelsius(itemData.item.temp.max)}</Text>
                    <Text style={styles.text3}>{roundCelsius(itemData.item.temp.min)}</Text>
           
                 </View>
                   </View>
        );

    }

    return (
        <View style={styles.mainContainer}>
             <Text style={styles.title}>Weekly Forecast</Text>

            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={props.data}
                renderItem={renderRenderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems:'center',
        borderColor: Colors.accent,
        borderTopWidth : 1
    },
    mainContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        marginHorizontal: 3,
        flexDirection : 'column',
    },
    title: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 23,
        color: Colors.yellow,
        textAlign: 'center',
        paddingVertical: 10,
        textTransform: 'capitalize',
        alignSelf: 'flex-start'
    },
    text1: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 17,
        color: Colors.white,
    },
    image: {
        width: 50,
        height: 50,
    },
    text2: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 20,
        color: Colors.white,
    },
    text3: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 20,
        color: 'gray',
        paddingLeft: 10,
    },
    text2Container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
   
})

export default DailyForecast