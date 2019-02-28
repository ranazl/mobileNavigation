import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Image,Dimensions,TouchableHighlight,ScrollView,Button,TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';
import SignIn from './SignIn'

let dim = Dimensions.get('window');


class App extends Component{

 static navigationOptions = ({navigation}) => {
  return{
    title:'Home',
    // headerRight: (
    //   <Button
    //     onPress={navigation.getParam('increaseCount')}
    //     title='+1'
    //     color="#000"
    //   />
    // ),

  }
 }


  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        
   {/* <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Facebook',{text:this.state.text})}></TouchableOpacity> */}
        <View style={styles.blueColor}>
        
        </View>
        <View style={styles.yellowColor}>
        <Image source={require('./photo/book.png')}
          style={{marginRight:130,marginBottom:100}}
          />
         
        </View>
        <Text style={styles.text}>Foxy</Text>  
        <Text style={styles.text}>Book</Text> 
        <View style={styles.buttonLeft}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignIn')}>
        <Text style={{color:'white',fontWeight:'bold'}}>SIGNUP</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonRight}>
        <Text style={{color:'white',fontWeight:'bold'}}>LOGIN</Text>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const AppNavigator  = createStackNavigator(
  {
    Home : App,
    SignIn : SignIn,

  },

  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:dim.height,
    backgroundColor: '#fb9600',
    // justifyContent:'space-between'
    // position:'relative',
    // zIndex:-1
  },
  blueColor:{
    width:dim.width*4,
    height:150,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#206bec',
    // position:'relative',
    // zIndex:1,
    transform:[
      {rotateY:'-60deg'},
      {translateX:-2000},
      {translateY:-80},
  ]
  },
  yellowColor:{
    width:dim.width*4,
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc107',
    // position:'relative',
    // zIndex:0,
    transform:[
      {rotateY:'-60deg'},
      {translateX:-1000},
      {translateY:80},
  ]
  },
  buttonLeft:{
    justifyContent: 'center',
    alignItems: 'center',
    width:110,
    height:45,
    borderRadius:5,
    backgroundColor:'#f7ddad',
    transform:[
      {translateY:65},
      {translateX:50}
    ]
  },
  buttonRight:{
    justifyContent: 'center',
    alignItems: 'center',
    width:110,
    height:45,
    borderRadius:5,
    backgroundColor:'#ffc107',
    alignSelf: 'flex-end',
    transform:[
      {translateY:20},
      {translateX:-50}
    ]
  },
  text:{
    color:'white',
    fontWeight:'bold',
    fontSize:30,
    marginLeft:165,
  }
});

export default createAppContainer(AppNavigator);
