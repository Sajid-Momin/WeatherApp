/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, ImageBackground, TouchableOpacity, Icon
} from 'react-native';


import Colors from './lib/config/Colors';
import PagerView from 'react-native-pager-view';
import DetailScreen from './lib/screens/DetailScreen';
import HomeScreen from './lib/screens/HomeScreen';
import { Provider } from 'react-redux';
import Store from './lib/redux/store/Store';
import { useTranslation } from 'react-i18next';
import i18n from './lib/languages/i18n';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();


const App = () => {
  const [t, i18n] = useTranslation();
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.appBackground}>
        <StatusBar translucent={true} backgroundColor="#000" hidden />
          <PagerView style={styles.pagerView} initialPage={0} showPageIndicator={true}>
            <View key="1">
              <HomeScreen screenProps={[t, i18n]}/>
            </View>
            <View key="2">
              <DetailScreen screenProps={[t, i18n]} />
            </View>
          </PagerView>
          {/* <NavigationContainer>
            <Stack.Screen
             name="Home"
             component={HomeScreen}
            />
            <Stack.Screen
             name="Home"
             component={DetailScreen}
            />
          </NavigationContainer> */}
        
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%"
},
  // pageStyle: {
  //   alignItems: 'center',
  //   // padding: 20,
  // },
  pagerView: {
    // flex: 1,
    height: "100%",
    width: "100%",
  },
  appBackground: {
    flex:1,
    height: "100%",
    width: "100%",
    backgroundColor: Colors.primaryDark,
  },
  feelsLike: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 20,
    textAlign: 'center',
    color: Colors.yellow,
},
});

export default App;
