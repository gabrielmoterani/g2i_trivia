import React, { Component } from 'react';
import MainNavigator from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';



export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content"/>
        <SafeAreaProvider>
          <MainNavigator/>
        </SafeAreaProvider>
      </>
    );
  }
}


