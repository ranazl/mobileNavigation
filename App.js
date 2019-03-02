import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Image,Dimensions,TouchableHighlight,ScrollView,Button,TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';
import SignIn from './src/page/SignIn'
import MyHome from './src/page/MyHome'

let dim = Dimensions.get('window');


class App extends Component{

 static navigationOptions = ({navigation}) => {
  return{
    title:'Welcome',

  }
 }


  render() {
    return (
      // <ScrollView>
      <View style={styles.container}>
        
   {/* <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Facebook',{text:this.state.text})}></TouchableOpacity> */}
        <View style={styles.blueColor}>
        
        </View>
        <View style={styles.yellowColor}>
        <Image source={require('./src/assets/photo/book.png')}
          style={styles.book}
          />
         
        </View>
        <Text style={styles.text}>Foxy</Text>  
        <Text style={styles.text}>Book</Text>
        <View style={styles.buttonLeft}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignIn')}>
            <View style={styles.touch}>
                <Text style={styles.textButton}>SIGNIN</Text>
            </View>
        </TouchableOpacity>
        </View> 
        <View style={styles.buttonRight}>
        <Text style={styles.textButton}>LOGIN</Text>
        </View>
      </View>
      // </ScrollView>
    );
  }
}

const AppNavigator  = createSwitchNavigator(
  {
    Home : App,
    SignIn : SignIn,
    MyHome : MyHome
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
  },
  blueColor:{
    width:dim.width*4,
    height:150,
    backgroundColor: '#206bec',
    transform:[
      {rotateY:'-60deg'},
      {translateX:-2000},
      {translateY:-80},
  ]
  },
  yellowColor:{
    width:1000,
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc107',
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
  },
  book:{
    transform:[
      {translateY:-70},
      {translateX:300}
    ]
  },
  touch:{
    width:110,
    height:45,
    justifyContent:'center',
    alignItems:'center'
  },
  textButton:{
    color:'white',
  fontWeight:'bold'
}
});

export default createAppContainer(AppNavigator);
