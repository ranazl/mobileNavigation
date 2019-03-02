import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Image, Dimensions, Animated ,TouchableHighlight,ScrollView,Button,TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';
import MyHome from './MyHome'
import SignUp from './SignUp'

let dim = Dimensions.get('window');

class SignIn extends Component{

  constructor(props){
    super(props),
    this.state={
      animatedRight : new Animated.Value(100),
      animatedLeft : new Animated.Value(-100),
      fadeAnim : new Animated.Value(0),
    }
  }

  componentDidMount () {
    this.animeRight();
    this.animeLeft();
    this.fade();
  }

  animeRight () {
    Animated.timing(
      this.state.animatedRight,
      {
        toValue:1,
        duration:800,
        useNativeDriver:true
      }
    ).start()

    }

    animeLeft () {
      Animated.timing(
        this.state.animatedLeft,
        {
          toValue:1,
          duration:800,
          useNativeDriver:true
        }
      ).start()
  
      }

      fade () {
        Animated.timing(
          this.state.fadeAnim,
          {
            toValue:1,
            duration:1000,
            useNativeDriver:true
          }
        ).start()
    
        }
  

  render() {
     let { fadeAnim } = this.state;
    return (
      <View style={styles.container}>
 
      <View style={styles.header}>
      
        <Image source={require('../assets/photo/sign.png')}
        style={styles.photo}
        />
        <Animated.Image source={require('../assets/photo/logo.png')} 
        style={[styles.logo, {opacity:fadeAnim}]}
         />
      </View>

      <View style={styles.footer}>

      <View style={{marginTop:90}}>
          <Animated.View style={[styles.line,{transform:[{translateX:this.state.animatedRight}]}]}>
              <Image source={require('../assets/photo/email.png')}/>
              <Text style={[styles.buttonText]}>Email</Text>
          </Animated.View>
          <Animated.View style={[styles.line,{transform:[{translateX:this.state.animatedLeft}]}]}>
              <Image source={require('../assets/photo/lock.png')} />
              <Text style={styles.buttonText}>Password</Text>
          </Animated.View>
      </View>
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('MyHome')}>
        <View  style={styles.button}>
          <Text style={styles.text}>SIGNIN</Text>
        </View>
      </TouchableOpacity>
      </View>
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.text1}>Forget your password</Text>
        <Text style={styles.text1}>Dosen't have an account? Sign up</Text>
      </View>

      </View>
    );
  }
}

const AppNavigator = createBottomTabNavigator(
  {
    Home:SignIn,
    SignUp:SignUp,
    // MyHome:MyHome
  },
  {
    initialRouteName:'Home',
  }
);

const styles = StyleSheet.create({
  container: {
    flex:2,
    backgroundColor: '#206bec',
  },
  header: {
    flex:1,
    backgroundColor: '#206bec',
    alignItems:'center',
  },
  footer: {
    flex:1,
    backgroundColor: '#206bec',
    zIndex:-1
  },
  photo: {
    height:600,
    position:'absolute'
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    width:160,
    height:50,
    borderRadius:3,
    backgroundColor:'#ffc107',
    alignSelf:'center',
    transform:[
      {translateY:25},
    ]
  },
  text:{
    color:'white',
    fontWeight:'bold',
  },
  buttonText:{
    color:'white',
    marginHorizontal: 25,
  },
  text1:{
    color:'white',
    paddingVertical:8,
    // transform:[
    //   {translateY:-200},
    //   {translateX:8},
    // ]
  },
  line:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor: 'white',
    paddingVertical:15,
    marginHorizontal:60,
  },
  logo:{
    width:90,
    height:70
  }

});

export default createAppContainer(AppNavigator);
