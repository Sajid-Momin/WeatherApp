
import React from 'react';
import { View, Text , StyleSheet, ImageBackground} from 'react-native';
import Client from '../api/clients';
import Colors from '../config/Colors';

const HomeScreen = (props) => {
    return (
        
        <ImageBackground source={require('../../assets/images/background.jpg')}
                style={styles.Image_Background_Style}
            >
           <Client/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Image_Background_Style: {
        height: "100%",
        width: "100%"
    },
    text : {
        fontFamily : 'Ubuntu-Bold',
        fontSize : 30,
        fontWeight: '200',
        color : Colors.primary,
        textTransform : 'capitalize'
    },
    text1 : {
        fontSize : 20,
        fontWeight: '200',
        color : Colors.secondary,
    }
})
export default HomeScreen;