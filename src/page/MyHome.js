import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput,FlatList,ScrollView,Dimensions,Animated } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';
import Books from '../component/Books'
import Best from '../component/Best'
import SignIn from './SignIn'
import Section from './Section'
import Card from './Card'
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

class MyHome extends Component {
  constructor(props){
    super(props);
    this.state={
        scrollX : new Animated.Value(0)
    }
}
    render() {
      let position = Animated.divide(this.state.scrollX,deviceWidth);
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.textInput}>
                        <TextInput placeholder={'Type book name or author'} style={{marginLeft:10}}/>
                        <Image source={require('../assets/photo/search.png')} style={{marginRight:10}}/>
                    </View>
                    <View style={styles.flatList}>
                     
                         <Text style={styles.discover}>Discover</Text>

                         <FlatList
                          data={Best}
                          horizontal
                          onScroll={Animated.event([{nativeEvent:{contentOffset:{x:this.state.scrollX}}}])}
                          pagingEnabled
                          showsHorizontalScrollIndicator={false}
                          keyExtractor={item=> item.id}
                          renderItem={({item})=>
                      
                          <View style={[styles.photoSlider , {flex:1,justifyContent: 'center', alignItems: 'center'}]}>
                            <Image
                              source={item.image}
                              style={styles.images}
                            />
                          </View>
                         
                        }
                      />
                      <View style={styles.dotView}>
                    {
                        Best.map((_,i)=>{
                            let opacity = position.interpolate({
                                inputRange:[i-1,i, i+1],
                                outputRange:[0.3,1,.3],
                                extrapolate:'clamp'
                            });
                            return(
                                <Animated.View key={i} style={[styles.dot,{opacity}]}></Animated.View>
                            )
                        })
                    }
                </View>
                         {/* <Image source={require('../assets/photo/bestBooks.jpg')} style={styles.bestBooks}/> */}
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
        Home :{
          screen: MyHome,
          navigationOptions: {
              tabBarIcon: ({tintColor: color}) => (
                  <Icon name="home" size={25} color={'white'}/>
              )
          }
      },
      
        Papular :{
          screen: Section,
          navigationOptions: {
              tabBarIcon: ({tintColor: color}) => (
                  <Icon name="history" size={25} color={'white'}/>
              )
          }
      },

        Next:{
          screen:Card,
          navigationOptions:{
            tabBarIcon:({tintColor:color}) => (
              <Icon name="arrow-right" size={25} color={'white'} />
            )
          }
        }
    },
    {
        tabBarOptions: {
            style:{
                backgroundColor: '#3b83ff',
            },
            labelStyle :{
                color:'white',
                fontSize:16
            },
            
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
    flatList:{
      flex:1
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
            {translateX:20}
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
    },
    photoSlider:{
        width: deviceWidth,
        height: deviceHeight / 3,
        paddingHorizontal: 40,
        marginTop:20,
        // justifyContent:'center',
        alignItems:'center'
    },
    images: {
      flex: 1,
      borderRadius: 2
},
dot:{
  justifyContent:'center',
  alignItems:'center',
  height: 10,
  width: 10,
  backgroundColor: '#30b6cb',
  margin: 8,
  borderRadius:5
},
dotView:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
});

export default createAppContainer(AppNavigator);
