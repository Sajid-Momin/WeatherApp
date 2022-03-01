
import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import Color from '../config/colors';

const HomeScreen = (props) => {
    return (
        <View>
            <Text style ={styles.text}>Almost before we knew it, we ha</Text>
            <Text style ={styles.text1}>lmost before we knew it</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text : {
        fontFamily : 'Ubuntu-Bold',
        fontSize : 30,
        fontWeight: '200',
        color : Color.primary,
        textTransform : 'capitalize'
    },
    text1 : {
        fontSize : 20,
        fontWeight: '200',
        color : Color.secondary,
    }
})
export default HomeScreen;