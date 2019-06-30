import React from 'react';
import {
View,
Text,
Platform,
Dimensions,
StyleSheet,
Image,
ImageBackground,
TouchableOpacity,
ScrollView
}
from 'react-native';
import { withNavigation } from 'react-navigation';
import { Icon,Button } from 'react-native-elements';
//import {Modal} from 'react-native-modal';
import ModalView from '../Components/Modal';

const WIDTH = Dimensions.get('window').width;
const HEIGHT= Dimensions.get('window').height;

class MenuDrawer extends React.Component{

    navLink(nav,text,path){
        return(
        
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate(nav,{header:'',title:'',note:''})}
        style={styles.FacebookStyle} activeOpacity={0.5}>
         <Image 
          source={path} 
          style={styles.ImageIconStyle} 
          />
         <View style={styles.SeparatorLine} />
         <Text style={styles.TextStyle}>{text}</Text>
       </TouchableOpacity>
        )
    }
    
    render(){
    return(
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.topLink}>
         <Image
        source={require('../Assets/images/profile.jpg')}
        style={{height:99,width:100,alignSelf:'center'}}
        />
         <Text
        style={{fontWeight:'bold',fontSize:18,alignSelf:'center',color:'black',paddingTop:8}}
        >Dhieo Deva Alavanta</Text>
        </View>
        <View style={styles.bottomLink}>
        {this.navLink('Note','Personal',require('../Assets/images/personal.png'))}
        {this.navLink('Note','Work',require('../Assets/images/work.png'))}
        {this.navLink('Note','Wishlist',require('../Assets/images/wishlist.png'))}
        <ModalView/>
        </View>
        </View>
        </ScrollView>
    )
    }
}


const styles=StyleSheet.create ({

    container:{
        flex:1,
        backgroundColor:'white',

    },
    link:{
        flex:1,
        fontSize:20,
        padding:6,
        paddingLeft:14,
        margin:5,
        

    },
    topLink:{
        paddingTop:45,
        height:200,
    },
    bottomLink:{
        flex:1,
        paddingTop:20,
    },
    GooglePlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: .5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5 ,
        margin: 5,
     },
     FacebookStyle: {
       flexDirection: 'row',
       alignItems: 'center',
       borderWidth: .5,
       borderColor: '#fff',
       height: 40,
       borderRadius: 5 ,
       margin: 5,
     },
     ImageIconStyle: {
        padding: 10,
        margin: 5,
        marginLeft:18,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
     },
     TextStyle :{
       color: "#000",
       marginBottom : 4,
       marginRight :20,
       fontWeight:'bold',
       fontSize:17
     },      
     SeparatorLine :{
     backgroundColor : '#fff',
     width: 1,
     height: 40
     }
})

export default withNavigation(MenuDrawer);

