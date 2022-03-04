import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
// import { Icon } from 'react-native-elements';
// import { Icon } from 'react-native-vector-icons/icon';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Colors from '../config/Colors'

const Card = (props) => {
    return (
        <View style={[
            styles.container        ]}>
            <FeatherIcon
                name={props.iconName}
                type={props.iconType}
                color={Colors.primary}
                size={24}
            />
            <Text style={styles.text1}>{props.title}</Text>
            <Text style={styles.text2}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        margin : 10,
        paddingHorizontal: 8,
        paddingVertical: 12,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
    },
    text1: {
        fontSize: 13,
        fontWeight: 'bold',
        marginVertical: 6,
        color: 'black'
    },
    text2: {
        fontSize: 14,
        color: Colors.accent
    }
})

export default Card;