import React,{Component} from 'react';
import { View, Text } from "react-native";
import { createStackNavigator,createAppContainer,createDrawerNavigator } from "react-navigation";
import Home from './src/Screens/home';
import Note from './src/Screens/Note';
import AppNavigator from './src/navigation/AppNavigator';

export default () => {
  return (
<AppNavigator/>    
  );
};

