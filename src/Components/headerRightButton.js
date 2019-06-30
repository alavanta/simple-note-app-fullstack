import React from 'react';
import { Image,StyleSheet, TouchableOpacity} from "react-native";
import {withNavigation} from 'react-navigation';
import Menu, {MenuItem} from "react-native-material-menu";

class HeaderRButton extends React.Component {
  _menu = null;

  setMenuRef = ref => {
      this._menu = ref;
  };

  hideMenu = () => {
      this._menu.hide();
  };

  showMenu = () => {
      this._menu.show();
  };
 render(){
  return(

    <Menu
        ref={(ref) => this._menu = ref}
        button={
        <TouchableOpacity onPress={() => this._menu.show()} style={{paddingHorizontal:16, height: '100%', alignItems:'center', justifyContent: 'center'}}>
          <Image source={require('../Assets/images/sort.png')} style={{width: 20, height: 20, alignSelf:'center'}} resizeMode='contain'/>
        </TouchableOpacity>
      }>
       <MenuItem onPress={() => this.hideMenu()} textStyle={styles.MenuItems}>ASCENDING</MenuItem>
       <MenuItem onPress={() => this.hideMenu()} textStyle={styles.MenuItems}>DESCENDING</MenuItem>
    </Menu>
    
  )
  }
}

const styles= StyleSheet.create({
  MenuItems:{
    color:'#000',
    fontSize:16,
    fontWeight:'bold'
  }
});

export default withNavigation(HeaderRButton);

