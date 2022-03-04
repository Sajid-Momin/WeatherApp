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
  View,
} from 'react-native';


import HomeScreen from './lib/screens/HomeScreen';
import { Provider } from 'react-redux';
import {Store}  from './lib/redux/store/Store';


const App = ()  => {

  return (
    <Provider store={Store()}>
      <SafeAreaView>
      <HomeScreen/>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
