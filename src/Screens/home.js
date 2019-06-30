import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView,FlatList,CardItem,Image } from 'react-native';
import { Card, ListItem ,Divider,List,SearchBar,Button,Icon,Header} from 'react-native-elements';
import { FloatingAction } from "react-native-floating-action";
import Note from './Note';
import HeaderLeftButton from '../Components/headerLeftButton';
import HeaderRightButton from '../Components/headerRightButton';
import Search  from '../Components/searchBar';

const users = [
  {
    key:1,
     title: 'Week 1',
     note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tincidunt odio, vitae efficitur eros. Praesent non nibh cursus nulla ',
     date: '24 June',
     idCategory:1,
     category:'learn'

  },
  {
    key:2,
    title: 'Week 2',
     note:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit.',
     date: '31 June',
     idCategory:1,
     category:'learn'

  },
  {
    key:3,
    title: 'Today',
     note:'finish all work and having fun yeayeyaeyayayayayayayayayayayyaay',
     date: '08 July',
     idCategory:3,
     category:'personal'
  },
  {
    key:4,
    title: 'just a new note',
     note:'i feel confused , but right now i feel happy',
     date: '09 July',
     idCategory:1,
     category:'learn'
  },
  {
    key:5,
    title: 'Daily standup',
     note:'yesterday i learn about react-native,react-native is a framework made by facebook',
     date: '10 July',
     idCategory:2,
     category:'work'
  },
  {
    key:6,
    title: 'Macbook',
     note:'i have to buy macbook this year',
     date: '11 July',
     idCategory:4,
     category:'wishlist'
  },
  {
    key:7,
    title: 'drawer error wwwwwwwwwwwwwwwwwwwwwwwwww',
     note:'why?????',
     date: '12 July',
     idCategory:2,
     category:'work'
  },
  {
    key:8,
    title: 'hope',
     note:'fixed',
     date: '12 July',
     idCategory:2,
     category:'work'
  }
];

const CardColor={
  
    blue:'#2FC2DF',
    green:'#C0EB6A',
    orange:'#FAD06C',
    pink:'#FF92A9'
}

export default class home extends Component {
  state = {
    search: '',
    title:'ADD NOTE',
    noteTitle:'',
    Description:'',
    category:''
  };

  
  updateSearch = search => {
    this.setState({ search });
  };
  
  updateTitle = titles => {
    
     state={title:titles}
  }

  componentDidMount() {
  
  };

  static navigationOptions = ({ navigation }) => {
    
    const { params } = navigation.state;
        return {    
        title: 'NOTE APP',
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
            alignSelf:'center',
            fontSize:14,            
        },
        headerRight:(
          <HeaderRightButton/>
          ),
        headerLeft:(
            <HeaderLeftButton/>
          )}
    };

    constructor(props) {
      super(props);
      console.log(this.props)
    }
  
    componentDidMount() {
      //this.state.myArray.push('new value')
    }

    searchHandle=()=>{
      alert(this.state.search);
    }
    addNoteHandle=()=>{
      const {navigation}= this.props;
      console.log(this.props);
      //navigation.navigate('Note',{screenTitle:'EDIT NOTE'})
      navigation.navigate('Note',{title: this.state.title})
    }
    
    
    render() {
      const { search } = this.state;
      const {navigate} = this.props.navigation;
        return (
         <View style={styles.MainContainer}>
            <SearchBar
              placeholder="Search..."
              containerStyle={styles.searchBarContainer}
              inputContainerStyle={{backgroundColor:'white',maxHeight:35,marginTop:-3}}
              onChangeText={this.updateSearch}
              onSubmitEditing={this.searchHandle}
              inputStyle={{fontSize:14}}
              placeholderTextColor='#C4C4C4'     
              value={search}
              lightTheme={true}
              searchIcon={null}/>

          <FlatList containerStyle={styles.MainContainer} contentContainerStyle={{ alignItems: 'center',backgroundColor:'white'}}
          data={users}
          renderItem={({item}) => 
          <TouchableOpacity
          
          onPress={() => this.props.navigation.navigate('Note',{header:'EDIT NOTE',title:item.title,note:item.note})}
          
          >
            <View>
          <Card 
             containerStyle={{backgroundColor: 
              item.idCategory == 1 ? '#2FC2DF' : 
              item.idCategory == 2 ? '#C0EB6A' :
              item.idCategory == 3 ? '#FAD06C' :
              item.idCategory == 4 ? '#FF92A9' : '#FF930'
             , borderRadius:8,width: 138, height: 136,alignSelf:'flex-start'}}
             dividerStyle={styles.cardDivider} 
             titleStyle={styles.cardTitle}
             title={item.date}>
            <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginTop:-20}} 
            numberOfLines={1}>{item.title}</Text>
            <Text style={{fontSize:8,color:'white'}}>{item.category}</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{flex: 1, flexWrap: 'wrap',color:'white'}} numberOfLines={3}>{item.note}</Text>
            </View>
          </Card>
          </View>
        </TouchableOpacity>

              }
          numColumns={2}
          keyExtractor={users.id}/>
          
          
        <FloatingAction
          onPressMain={()=> this.props.navigation.navigate('Note',{header:'ADD NOTE'})}
          showBackground={false}
    
   
  />
  </View>
  
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingTop: 15,
      paddingBottom:5,
      flexDirection:'column',
      fontFamily:'openSans',
      backgroundColor:'white'
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      paddingLeft:10
      
    },
    noteText:{
    flex: 0.3,  //width (according to its parent)
    flexDirection: 'column',    //its children will be in a column
    alignItems: 'center', //align items according to this parent (like setting self align on each item)
    justifyContent: 'center',
    flexWrap: 'wrap'
    },
    button:{
      height:40,
      width:40,
      
    },
    searchBarContainer:{
      marginBottom:10,
      marginStart:23,
      marginEnd:23,
      backgroundColor:'white',
      borderColor:'white',
      borderTopColor: 'transparent',
      borderBottomColor:'transparent',
      shadowColor:'#000',
      shadowRadius:15,
      shadowOffset: { width: 4, height: 13 },
      shadowOpacity: 0.8,
      elevation:6,
      borderRadius:20,
      height:45

    },
    cardDivider:{
      borderTopStartRadius:0,
      display:'none'
    },
    cardTitle:{
      alignSelf:'flex-end',
      fontSize:10,
      flexWrap:'wrap',
      color:'white'
    }
  });
  

  

  