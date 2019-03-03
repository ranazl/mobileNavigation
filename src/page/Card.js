import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView
} from "react-native";

class Card extends Component {
  render() {
    return (
      // <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image
              source={require("../assets/photo/book.jpg")}
              style={styles.book}
            />
          </View>
          <View style={{ marginHorizontal: 15, marginBottom: 40 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.text1}>sally rooney</Text>
              <Image source={require("../assets/photo/save.png")} />
            </View>
            <Text style={styles.text2}>conversation with friends</Text>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Image source={require("../assets/photo/star.png")} />
              <Image source={require("../assets/photo/star.png")} />
              <Image source={require("../assets/photo/star.png")} />
              <Image source={require("../assets/photo/star.png")} />
              <Image source={require("../assets/photo/star.png")} />
            </View>
            <View style={{ flexDirection: "row", marginTop: 15}}>
              <View style={styles.box1}><Text style={{color:'white'}}>Transgressive</Text></View>
              <View style={styles.box2}><Text style={{color:'white'}}>Fiction</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.main} />
        <View style={styles.footer} />
      </View>
      //  </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#206bec",
    alignItems: "center"
    // justifyContent: 'center',
  },
  main: {
    flex: 4,
    backgroundColor: "white"
  },
  footer: {
    flex: 2,
    backgroundColor: "red"
  },
  book: {
    width: 120,
    height: 150,
    borderRadius: 10,
    marginLeft: 20,
    marginBottom:30
  },
  text1: {
    color: "white",
    fontSize: 22
  },
  text2: {
    color: "white",
    fontSize: 19
  },
  box1:{
      width:120,
      height:30,
      borderColor:'white',
      borderWidth:1,
      borderRadius:5,
      marginRight:10,
      alignItems: "center",
      justifyContent: 'center',
  },
  box2:{
    width:70,
    height:30,
    borderColor:'white',
    borderWidth:1,
    borderRadius:5,
    alignItems: "center",
    justifyContent: 'center',
},

});

export default Card;
