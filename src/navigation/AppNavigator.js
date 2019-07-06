import React,{Component} from 'react';
import { View, Text,TouchableOpacity,Image } from "react-native";
import { 
  createStackNavigator, 
  createAppContainer,
  createDrawerNavigator
 } from "react-navigation";
 import {Provider} from 'react-redux'

 import Home from '../Screens/home';
 import Note from '../Screens/Note';
 import MenuDrawer from '../Components/MenuDrawer';
 import store from '../public/redux/store'

 const RootStack = createStackNavigator(
    {
      Home: {
        screen: Home,
       
        
      },
        Note: {
          screen: Note,
        }
       
      }
      ,{
        mode: 'modal',
      } 
  )

 const MainDrawer = createDrawerNavigator(
    {
      Home: {
        screen: RootStack,
      },
      Note: {
        screen: Note,
      },
    },
    {
      initialRouteName: 'Home',
      mode: 'card',
      drawerWidth:235,
      contentComponent:({ navigation}) =>{
        return(<MenuDrawer/>)
      }
    }
  )
  
  
  
  const AppContainer = createAppContainer(MainDrawer);
  
  export default class App extends Component{
    render(){
      return(
        <Provider store={store}>
          <AppContainer/>
        </Provider>
        
      )
    }
  }