import React from 'react';
import {View,StyleSheet,TextInput,Text,Button,Alert,TouchableOpacity,Image} from "react-native";

const LoginScreen = props => {
  return (

<View style={styles.container}>
<View>
  <View style={styles.img}>
<Image source={require("../assets/nc.png")} style={styles.image} /> 
</View>
<Text style={styles.textnew}>Welcome,</Text>

<TextInput style={styles.textAnuj}
placeholderTextColor="black"
placeholder="Enter Username"
></TextInput>

<TextInput style={styles.textAnuj}
 placeholderTextColor="black"
placeholder="Enter Password"
secureTextEntry
></TextInput>

</View>

<View style={styles.btn}>
<Button 
title="Login"
onPress={()=>{
  props.navigation.replace('Dashboard');
}}
/>

<TouchableOpacity
     onPress={()=>{
      props.navigation.replace('Register');
  }}
>
<Text style={styles.touch}>REGISTER</Text>
</TouchableOpacity>

</View>
  </View>
  
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"black",
  flex:1,
  fontSize:60,
  alignItems:"center",
  padding:20,
  justifyContent:"center",
  textAlign:"center"
 
  },
  textAnuj:{
    marginTop:5,
  color:"black",
  height:50,
  width:200,
  borderWidth:2,
  padding:10,
  borderRadius:10,
  borderColor:"#23abab",
  marginBottom:10,
 
  backgroundColor:"white"
  },
  textnew:{
   
    color:"white"
  },
  touch:
  {
 marginLeft:10,
  backgroundColor:"orange",
  padding:10,
  borderRadius:2,
  marginRight:10,
  },
  btn:
  {
    flexDirection:"row"
  },

  image:{
    //marginTop:100,
  width:100,
  height:100,
  alignItems:"center"
  },

  img:{
    //marginTop:100,
  justifyContent:"center",
  alignItems:"center"
  },

  })

export default LoginScreen;
