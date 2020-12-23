import React from 'react';
import {View,StyleSheet,TextInput,Text,Button,Alert,TouchableOpacity} from "react-native";

const RegisterScreen = props => {
  return (
   <View style={styles.container}>
  
  <View>
  <TextInput style={styles.textAnuj}
  placeholderTextColor="black"
  placeholder="Enter Your Name"
  ></TextInput>

   <TextInput style={styles.textAnuj}
  placeholderTextColor="black"
  placeholder="Enter Your Email ID"
  ></TextInput>

   <TextInput style={styles.textAnuj}
  placeholderTextColor="black"
  placeholder="Enter Password"
  secureTextEntry
  ></TextInput>

   <TextInput style={styles.textAnuj}
  placeholderTextColor="black"
  placeholder="Enter DOB (dd-mm-yyyy)"
   keyboardType = 'numeric'
  ></TextInput>
  
 </View>

<View style={styles.btn}>
  
  <TouchableOpacity
       onPress={()=>{
        props.navigation.replace('Login');
    }}
  >
  <Text style={styles.touch}>LOGIN</Text>
  </TouchableOpacity>

  <Button 
  title="Register"
    onPress={()=>{Alert.alert("Registration Successfully Done...!");}}
  />

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
  justifyContent:"center"
 
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
  }
  })

export default RegisterScreen;
