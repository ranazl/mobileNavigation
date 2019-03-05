import React, { Component } from 'react';
import { View, Text, StyleSheet , Image , FlatList , TouchableOpacity} from 'react-native';
import Months from '../component/Months';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';
import Books from '../component/Books'
import Card from './Card'


class Section extends Component {

    constructor(props){
        super(props);
        this.state={
            selectedItem: 0
        }
    }

    BorderBottom(select) {
        this.setState({selectedItem: select})
    }

    render() {
        return (
            <View style={styles.container}>
{
    console.log(this.state.Bottom)
}
                    <Text style={styles.popular}>Popular</Text>

                    <View style={{flex:1,marginTop:15}}>
                    <FlatList
                data={Months}
                keyExtractor={item => item.title}
                extraData={this.state.selectedItem}
                horizontal={true}
                renderItem={({ index, item }) => (

                // <View style={!this.state.Bottom && styles.On}>
                    <TouchableOpacity onPress={this.BorderBottom.bind(this, index)}>
                    
                    <Text style={[styles.month, this.state.selectedItem === index && styles.On]}>
                        {item.title}
                    </Text>

                    </TouchableOpacity>
                // </View>    
                )}
/>
</View>

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
        );
    }
}

// const AppNavigator = createBottomTabNavigator (
//     {
//         Home : Section,
//         Next : Card
//     },
//     {
//         tabBarOptions: {
//             style:{
//                 backgroundColor: '#3b83ff',
//             },
//             labelStyle :{
//                 color:'white',
//                 fontSize:16
//             }
            
//           },
//     },
//     {
//         initialRouteName: 'Home'
//     }
// )

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-start',
        backgroundColor: '#206bec',
    },
    popular:{
        color:'white',
        fontWeight:'bold',
        fontSize:33,
        marginLeft:10,
    },
    box: {
        backgroundColor: '#206bec',
        height: 240,
        width: 160,
        borderRadius:10,
        marginVertical: 15,
        marginHorizontal:15,
        alignItems: "center",
        paddingTop: 10
      },
    flat: {
        flex: 12,
        marginTop: 110,
      },
    flatTitle:{ 
          fontWeight: "bold",
          color: "white",
          paddingTop:-5
        },
    flatImage:{ 
        width: 170, 
        height: 210 , 
        borderRadius:10,
    },
    month:{
        color:'white',
        fontSize:16,
        paddingHorizontal: 15,
    },
    On:{
        borderBottomColor:'#ffc107',
        borderBottomWidth:2,

    }
});

export default Section;
