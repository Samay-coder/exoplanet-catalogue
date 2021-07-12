import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import Details from './screens/details';
import Home from './screens/home';
import {createAppContainer} from 'react-navigation'

export default function App() {
  return (
      <AppContainer/>
  );
}

const Stack = createStackNavigator({
  'details':{screen:Details},
  'home':{screen:Home,navigationOptions:{headerShown:false}}
},
{initialRouteName:'home'}
)
const AppContainer = createAppContainer(Stack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
