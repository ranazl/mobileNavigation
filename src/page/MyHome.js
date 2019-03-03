import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput,FlatList,ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';
import Books from '../component/Books'
import SignIn from './SignIn'
import Section from './Section'

class MyHome extends Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.textInput}>
                        <TextInput placeholder={'Type book name or author'} style={{marginLeft:10}}/>
                        <Image source={require('../assets/photo/search.png')} style={{marginRight:10}}/>
                    </View>
                    <View>
                    <Text style={styles.discover}>Discover</Text>
                    <Image source={require('../assets/photo/bestBooks.jpg')} style={styles.bestBooks}/>
                    </View>
                </View>
               
                <View style={styles.footer}>

                     <Text style={styles.Popular}>Popular</Text>
            <View style={styles.flat}>
              <FlatList
                data={Books}
                keyExtractor={item => item.title}
                horizontal={true}
                renderItem={({ item }) => (
                  <View style={styles.box}>
                    <Image
                      source={item.image}
                      style={styles.flatImage}
                    />
                    <Text style={styles.flatTitle} >
                      {item.title}
                    </Text>
                  </View>
                )}
              />
              </View>
              <Text style={styles.Popular}>Recommended</Text>
            <View style={styles.flat}>
              <FlatList
                data={Books}
                keyExtractor={item => item.title}
                horizontal={true}
                renderItem={({ item }) => (
                  <View style={styles.box}>
                    <Image
                      source={item.image}
                      style={styles.flatImage}
                    />
                    <Text style={styles.flatTitle} >
                      {item.title}
                    </Text>
                  </View>
                )}
              />
              </View>
              </View>
              </View>
            </ScrollView>
        );
    }
}

const AppNavigator = createBottomTabNavigator (
    {
        Home : MyHome,
        // SignIn : SignIn,
        Papular : Section
    },
    {
        tabBarOptions: {
            style:{
                backgroundColor: '#3b83ff',
            },
            labelStyle :{
                color:'white',
                fontSize:16
            }
            
          },
    },
    {
        initialRouteName: 'Home'
    }
)

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-start',
        backgroundColor: '#206bec',
    },
    footer: {
        flex: 1,
        backgroundColor: '#206bec',
    },
    textInput:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:350,
        height:45,
        marginTop: 20,
        borderRadius:10,
        backgroundColor:'white'
    },
    discover:{
        color:'white',
        fontSize: 22,
        fontWeight:'bold',
        transform:[
            {translateY:10},
            {translateX:-4}
        ]
    },
    Popular:{
        color:'white',
        fontSize: 22,
        fontWeight:'bold',
        transform:[
            {translateY:10},
            {translateX:22}
        ]
    },
    bestBooks:{
        width:350,
        height:200,
        marginTop:20,
        borderRadius:10
    },
    box: {
        backgroundColor: '#206bec',
        height: 220,
        width: 140,
        borderRadius:10,
        marginVertical: 15,
        marginHorizontal:15,
        alignItems: "center",
        paddingTop: 10
      },
    flat: {
        flex: 1
      },
    flatTitle:{ 
          fontWeight: "bold",
          color: "white",
          paddingTop:-5
        },
    flatImage:{ 
        width: 150, 
        height: 190 , 
        borderRadius:10,
    }
});

export default createAppContainer(AppNavigator);
