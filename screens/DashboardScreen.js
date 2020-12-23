import React from 'react';
import { View, Text, StyleSheet,Button ,Image, TouchableOpacity, ImageBackground} from 'react-native';

const DashboardScreen = props => {
  return (

<View style={styles.container}>

<View style={styles.view1}>

<View style={styles.container1}>  

  <View style={styles.view11}>

<TouchableOpacity
onPress={()=>{
  props.navigation.replace('Dicegame');
}}><ImageBackground source={require("../assets/dice5.png")} style={styles.image}/> 
</TouchableOpacity>

  <Button 
title="Dicegame"
      onPress={()=>{
          props.navigation.replace('Dicegame');
      }}
      />
  </View>

  <View style={styles.view12}>
  <TouchableOpacity
onPress={()=>{
  props.navigation.replace('CurrencyConverter');}}>
  <ImageBackground source={require("../assets/cc.png")} style={styles.image} /> 
</TouchableOpacity>
  <Button 
title="Currency Converter"
      onPress={()=>{
          props.navigation.replace('CurrencyConverter');
      }}
      />
  </View>

</View>
</View>

<View style={styles.view2}>

        <View style={styles.container2}>  

          <View style={styles.view21}>
          <TouchableOpacity
onPress={()=>{
  props.navigation.replace('TicTacToe');}}>
          <ImageBackground source={require("../assets/ttt.png")} style={styles.image} /> 
</TouchableOpacity>
          <Button 
title="Tic-Tac-Toe"
      onPress={()=>{
          props.navigation.replace('TicTacToe');
      }}
      />
          </View>

          <View style={styles.view22}>
          <TouchableOpacity
onPress={()=>{
  props.navigation.replace('Todo');}}>
          <ImageBackground source={require("../assets/todo.png")} style={styles.image} /> 
</TouchableOpacity>
          <Button 
title="To do List"
      onPress={()=>{
          props.navigation.replace('Todo');
      }}
      />
          </View>
</View>
</View>


          <View style={styles.view3}>

<View style={styles.container3}>  
          

          <View style={styles.view31}>
          <TouchableOpacity
onPress={()=>{
  props.navigation.replace('Api');}}>
          <ImageBackground source={require("../assets/nc.png")} style={styles.image} /> 
</TouchableOpacity>
  <Button 
title="Name Cards"
      onPress={()=>{
          props.navigation.replace('Api');
      }}
      />
  </View>

          <View style={styles.view32}>
          <TouchableOpacity
onPress={()=>{
  props.navigation.replace('Flex');}}>
          <ImageBackground source={require("../assets/flex.png")} style={styles.image} /> 
</TouchableOpacity>
          <Button 
title="Flex Task"
      onPress={()=>{
          props.navigation.replace('Flex');
      }}
      />
          </View>

        </View>
      </View>


<View style={styles.myBtn}>
<Button 
title="Logout"
      onPress={()=>{
          props.navigation.replace('Login');
      }}
      />
</View>

</View>

  );
};

const styles = StyleSheet.create({
 

image:{
  //marginTop:100,
width:100,
height:100
},


  container: {
    flex: 1,
   // flexDirection:"row",
  //  backgroundColor: '#fff',
   // alignItems: 'center',
   // justifyContent:'center',
  },
  view1:{
    flex:1,
    //backgroundColor:"red",
    //height:"100%",
     // alignItems: 'center',
     //justifyContent:'center',
  },
  view2:{
    flex:1,
   // backgroundColor:"powderblue",
    //height:"100%",
     // alignItems: 'center',
     //justifyContent:'center',
  },

  view3:{
    flex:1,
   // backgroundColor:"powderblue",
    //height:"100%",
     // alignItems: 'center',
    // justifyContent:'center',
  },

  container1: {
    flex: 1,
    flexDirection:"row",
  //  backgroundColor: '#fff',
   // alignItems: 'center',
    //justifyContent:'space-between',
  },

  view11:{
    justifyContent:"center",
    flex:1,
    backgroundColor:"lightpink",
    alignItems:"center"
    //height:"100%"
  },

  view12:{
    justifyContent:'center',
    flex:1,
    backgroundColor:"#ffa500",
    alignItems:"center"
    //height:"100%"
  },

  

  container2: {
    //justifyContent:'center',
    flex: 1,
    flexDirection:"row",
  //  backgroundColor: '#fff',
   // alignItems: 'center',
    //justifyContent:'space-between',
  },

  view21:{
    justifyContent:'center',
    flex:1,
    backgroundColor:"#7bc043",
    alignItems:"center"
    //height:"100%"
  },

  view22:{
    justifyContent:'center',
    flex:1,
    backgroundColor:"#bbe1fa",
    alignItems:"center"
    //height:"100%"
  },
  
  container3: {
  //  justifyContent:'center',
    flex: 1,
    flexDirection:"row",
  //  backgroundColor: '#fff',
   // alignItems: 'center',
    //justifyContent:'space-between',
  },



  view31:{
    justifyContent:'center',
    flex:1,
    backgroundColor:"#fdf498",
    alignItems:"center"
    //height:"100%"
  },
  
  view32:{
    justifyContent:'center',
    flex:1,
    backgroundColor:"#d92027",
    alignItems:"center"
    //height:"100%"
  },

  myBtn:
  {
    flex:1,
    // width:150,
    //height:100,
    backgroundColor:"#7f78d2",
    alignItems:"center",
    justifyContent: 'center',

  },


});
export default DashboardScreen;
