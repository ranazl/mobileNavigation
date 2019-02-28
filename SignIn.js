import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Image,Dimensions,TouchableHighlight,ScrollView,Button,TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';

let dim = Dimensions.get('window');

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
      <Image source={require('./photo/sign.png')}/>
        <View style={styles.blueColor}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    // height:dim.height,
    // width:dim.width,
    backgroundColor: '#206bec',
  },
  blueColor:{
    // width:1500,
    // height:300,
    backgroundColor: '#fb9600',
  }
});
