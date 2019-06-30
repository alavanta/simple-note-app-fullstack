import React, { Component } from 'react';
import { Picker,StyleSheet,Image,Text, View, TouchableOpacity,TextInput,ScrollView} from 'react-native';
import  CheckButton from '../Components/CheckButton';


export default class Note extends Component {

  constructor(props){
    super(props);
    this.state={
      title: this.props.navigation.state.params.title,
      note : this.props.navigation.state.params.note
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { state: { params = {} } } = navigation;
    return{
        title:   params.header || '',
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
            alignSelf:'center',
            fontSize:14,
            
        },
        headerRight: (

          <CheckButton/>
          // <TouchableOpacity>
          //   <Image
          //   source={require('../Assets/images/checked.png')}
          //   style={{height:25,width:25,marginRight:17}}/>
          // </TouchableOpacity>
          )}
        }
  
  handleGoBack = () => {
    const {navigation}= this.props; //es6
    navigation.goBack();

    
  }

  updateNoteTitle = titleNote => {
    this.setState({ titleNote });
  };


 
 
  render() {
    
    return (
      <ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add Title"
          value={ this.state.title}
          multiline={true}
          onChangeText={(title) => this.setState({title})}
          
        />

        <TextInput
          style={styles.textInput1}
          placeholder="Add Description"
          value={this.state.note}
          multiline={true}
          onChangeText={(note) => this.setState({note})}
          
        />
      </View>
      <View 
      style={{marginLeft:20,marginTop:10}}
      >
        <Text
        style={{fontSize:20,fontWeight:'bold',color:'black'}}
        >CATEGORY</Text>
        <Picker
  //selectedValue={params.category}
  
  
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Personal" value="3" />
  <Picker.Item label="Work" value="2" />
  <Picker.Item label="Wishlist" value="4" />
  <Picker.Item label="Learn" value="1" />
</Picker>
</View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //flexBox CSS
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    height: 141,
    fontSize: 18,
    fontWeight:'bold',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
  },
  textInput1: {
    borderColor: '#CCCCCC',
    height: 141,
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 50,
  }
});
