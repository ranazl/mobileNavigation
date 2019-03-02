import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput } from 'react-native';

class MyHome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.textInput}>
                        <TextInput placeholder={'Type book name or author'} style={{marginLeft:10}}/>
                        <Image source={require('../assets/photo/search.png')} style={{marginRight:10}}/>
                    </View>
                    <Text style={styles.discover}>Discover</Text>
                    {/* <View>
                    <Image source={require('../assets/photo/picture.JPG')} style={{width:100,height:80}}/>
                    </View> */}
                </View>
               
                <View style={styles.footer}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'pink',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-start',
        backgroundColor: '#206bec',
    },
    footer: {
        flex: 1,
        backgroundColor: 'green',
    },
    textInput:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:350,
        height:45,
        marginTop: 20,
        borderRadius:8,
        backgroundColor:'white'
    },
    discover:{
        color:'white',
        fontSize: 26,
        fontWeight:'bold',
        transform:[
            {translateY:25},
            {translateX:-120}
        ]
    }
});

export default MyHome;
