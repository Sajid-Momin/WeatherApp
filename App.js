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


const App = () => {

  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.appBackground}>
        <StatusBar translucent={true} backgroundColor="#000" hidden />
          <PagerView style={styles.pagerView} initialPage={0} showPageIndicator={true}>
            <View key="1">
              <HomeScreen />
            </View>
            <View key="2">
              <DetailScreen />
            </View>
          </PagerView>
        
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
