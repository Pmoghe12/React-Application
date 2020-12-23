import React from 'react';
import { StyleSheet, View,Button } from 'react-native';

const FlexScreen = props => {
   
  return (
    <View style={styles.container}>
      
      <View style={styles.view1}>

        <View style={styles.container1}>  

          <View style={styles.view11}>
          </View>

          <View style={styles.view12}>
          </View>

        </View>


      </View>

      <View style={styles.view2}>

        <View style={styles.container2}>  

          <View style={styles.view21}>
          </View>

          <View style={styles.view22}>

<Button 
title="Quit"
onPress={()=>{
  props.navigation.replace('Dashboard');
}}
/>
          </View>

          <View style={styles.view23}>
          </View>

        </View>


      </View>

    </View>
  );
};
export default FlexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // flexDirection:"row",
  //  backgroundColor: '#fff',
   // alignItems: 'center',
    //justifyContent:'space-between',
  },
  view1:{
    flex:1,
    //backgroundColor:"red",
    //height:"100%"
  },
  view2:{
    flex:1,
   // backgroundColor:"powderblue",
    //height:"100%"
  },

  container1: {
    flex: 1,
    flexDirection:"row",
  //  backgroundColor: '#fff',
   // alignItems: 'center',
    //justifyContent:'space-between',
  },

  view11:{
    flex:1,
    backgroundColor:"#ee4035",
    //height:"100%"
  },

  view12:{
    flex:1,
    backgroundColor:"#0392cf",
    //height:"100%"
  },

  container2: {
    flex: 1,
    flexDirection:"row",
  //  backgroundColor: '#fff',
   // alignItems: 'center',
    //justifyContent:'space-between',
  },

  view21:{
    flex:1,
    backgroundColor:"#f37736",
    //height:"100%"
  },

  view22:{
    flex:1,
    backgroundColor:"#fdf498",
    //height:"100%"
    marginBottom:20,
    justifyContent:"flex-end",
    
  },

  view23:{
    flex:1,
    backgroundColor:"#7bc043",
    //height:"100%"
  },


  
 
});
