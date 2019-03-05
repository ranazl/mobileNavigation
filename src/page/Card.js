import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';

class Card extends Component {
  constructor(props){
    super(props);
    this.state={
      buttonOn:false,
      selectedItem: 0,
    }
  }

button() {
  this.setState ({buttonOn: !this.state.buttonOn})
}

  render() {
    return (
      
      <ScrollView>
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
              style={{ flexDirection: "row", justifyContent: "space-between"}}
            >
              <Text style={styles.text1}>sally rooney</Text>
              <Image source={require("../assets/photo/save.png")} />
            </View>
            <Text style={styles.text2}>conversation with friends</Text>
            <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
            <AirbnbRating size={15}/>
            </View>
            {/* <View style={{ flexDirection: "row", marginTop: 15 }}>
              <View style={!this.state.buttonOn ? <Image source={require("../assets/photo/star.png")} /> : <Image source={require("../assets/photo/star_off.png")} />}>
              <TouchableOpacity onPress={() => this.button.bind(this)}>
                <Image source={require("../assets/photo/star.png")} />
              </TouchableOpacity>
              </View>
               <TouchableOpacity> 
                <Image source={require("../assets/photo/star.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/photo/star.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/photo/star.png")} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/photo/star.png")} />
              </TouchableOpacity>
            </View> */}
            <View style={{ flexDirection: "row", marginTop: 15}}>
              <View style={styles.box1}><Text style={{color:'white'}}>Transgressive</Text></View>
              <View style={styles.box2}><Text style={{color:'white'}}>Fiction</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.main}>

          <View style={styles.mainBox}>
            <Text style={[styles.mainText,{marginTop:15,fontSize:18,marginBottom:5}]}>A Word from Our Editor</Text>
            <Text style={styles.mainText}>The Serbian Water Pollution Control Society is 
              launching the Water Research and Management Journal to 
              respond to the general need for </Text>
            <Text style={styles.mainText}>such a publication and to benefit Serbia, 
              the region, and in some respects the extended international community. 
            </Text>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/photo/5.jpg')}
              style={styles.mainImage}
              />
              <View style={{marginTop:20}}>
                <Text style={[styles.mainText,{marginLeft:5}]}>Alex Williams</Text>
                <Text style={[styles.mainText,{marginLeft:5}]}>Member since April 2017</Text>
              </View>
            </View>
          </View>

        </View>
        <View style={styles.footer}>

          <View>
            <Text style={styles.footerText1}>More from Bret Easton Ellis</Text>
            <Text style={styles.footerText2}>Recommended</Text>
          </View>
       
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
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#206bec",
  },
  header: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#206bec",
    alignItems: "center",
    marginTop:20
    // justifyContent: 'center',
  },
  main: {
    flex: 4,
    backgroundColor: "#206bec",
    alignItems: "center",
    justifyContent: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: '#206bec',
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
    fontSize: 19,
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
mainBox:{
  width:360,
  height:280,
  borderColor:'#497dd1',
  borderWidth:1,
  borderRadius:20,
  backgroundColor:'#497dd1',
  
},
mainText:{
  color:'white',
  fontSize:16,
  fontWeight:'bold',
  marginLeft:15,
  
},
mainImage:{
  width:65,
  height:65,
  borderRadius:50,
  margin:15,
  borderWidth:0.5,
  borderColor:'white',
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
footerText1:{
  color:'white',
  fontSize:20,
  // fontWeight:'bold',
  marginTop:15,
  marginLeft:25,
},
footerText2:{
  color:'white',
  fontSize:22,
  fontWeight:'bold',
  marginLeft:25,
},
});

export default Card;
