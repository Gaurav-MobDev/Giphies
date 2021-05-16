/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Router from './src/Router';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import {COLOR} from './src/utility';
import store from './src/Store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{backgroundColor: COLOR.BLUE}}>
          <StatusBar />
          <View style={Style.container}>
            <Router />
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}

const Style = StyleSheet.create({
  container: {height: '100%', width: '100%', backgroundColor: COLOR.BLUE},
});
export default App;
