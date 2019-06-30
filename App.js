import React,{Component} from 'react';
import { View, Text } from "react-native";
import { createStackNavigator,createAppContainer,createDrawerNavigator } from "react-navigation";
import Home from './src/Screens/home';
import Note from './src/Screens/Note';
import StackNavigator from './src/navigation/stackNavigator';





export default () => {
  return (
<StackNavigator/>    
  );
};

