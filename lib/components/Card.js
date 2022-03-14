import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import Colors from '../config/Colors';
import FeatherIcon from 'react-native-vector-icons/Feather';


const Card = (props) => {
    return (
        <View style={[styles.container]}>
            <FeatherIcon
                name={props.iconName}
                type={props.iconType}
                color={Colors.yellow}
                size={24}
            />
            <Text style={styles.text1}>{props.title}</Text>
            <Text style={styles.text2}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
        margin : 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 19,
        marginHorizontal: 3,
        backgroundColor: Colors.primary
    },
    text1: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 15,
        paddingVertical:10,
        color: Colors.white,
    },
    image: {
        width: 50,
        height: 50,
    },
    text2: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 15,
        color: Colors.white,
    },
})

export default Card;