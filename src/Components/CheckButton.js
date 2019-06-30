import React from 'react';
import {View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { withNavigation } from 'react-navigation'


class CheckButton extends React.Component {


   render(){
    return(
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Home')}
        >
            <Image
            source={require('../Assets/images/checked.png')}
            style={{height:25,width:25,marginRight:17}}/>
          </TouchableOpacity> 
    )
    }
}

export default withNavigation(CheckButton);


 