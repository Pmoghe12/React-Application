import React from "react";
import { render } from "react-dom";
import {View,Text,StyleSheet,Image,TouchableOpacity,Alert} from "react-native";

export default class DicegameScreen extends React.Component{

static navigationOptions = {
  title:"Dashboard",
};

    myButton = ()=>{
        var numBer = this.getRandomNumber();
        var numBer2 = this.getRandomNumber();
        switch (numBer)
        {
        case 1:
        this.setState({
        uri:require('../assets/dice1.png')})
        break;
        case 2:
        this.setState({
        uri:require('../assets/dice2.png')})
        break;
        case 3:
        this.setState({
        uri:require('../assets/dice3.png')})
        break;
        case 4:
        this.setState({
        uri:require('../assets/dice4.png')})
        break;
        case 5:
        this.setState({
        uri:require('../assets/dice5.png')})
        break;
        case 6:
        this.setState({
        uri:require('../assets/dice6.png')})
        break;
        default:
        Alert.alert("hello");
        
        
        }
      
        switch (numBer2)
        {
        case 1:
        this.setState({
        uri2:require('../assets/dice1.png')})
        break;
        case 2:
        this.setState({
        uri2:require('../assets/dice2.png')})
        break;
        case 3:
        this.setState({
        uri2:require('../assets/dice3.png')})
        break;
        case 4:
        this.setState({
        uri2:require('../assets/dice4.png')})
        break;
        case 5:
        this.setState({
        uri2:require('../assets/dice5.png')})
        break;
        case 6:
        this.setState({
        uri2:require('../assets/dice6.png')})
        break;
        default:
        Alert.alert("hello");
        }
      
        if(numBer>numBer2)
        {
          this.setState(
            {
            message:"Player 1 Wins"
            }
          )
        }
        else if(numBer2>numBer)
        {
          this.setState(
            {
            message:"Player 2 Wins"
            }
          )
        }
        else
        {
          this.setState(
            {
            message:"Match Draw !!"
            }
          )
        }
      
        
        }
        getRandomNumber= ()=>{
        return Math.floor(Math.random()*6)+1;
        
        }

       

    constructor(props){
        super(props);
        this.state =
        {
        uri:require('../assets/dice2.png'),
        uri2:require('../assets/dice1.png'),
        message:"Let's Play the Game"
        }
        };

        render(){
    return (

       

           
  
        

<View style={styles.container}>
    <View style={styles.container2}>
      <Text style={styles.result}>{this.state.message}</Text>

    <Image source={this.state.uri}/>
    <Text style={styles.textnew}>Player 1</Text>
    
    <Image source={this.state.uri2}/>
    <Text style={styles.textnew}>Player 2</Text>
    
    </View>
<View style={styles.btns}>
  
  <TouchableOpacity
  onPress={this.myButton}
  >
  <Text style={styles.button}>Play !</Text>
  </TouchableOpacity>

  <TouchableOpacity
  onPress={()=>this.props.navigation.push("Dashboard")}
  >
  <Text style={styles.button}>Quit</Text>
  </TouchableOpacity>
  </View>



  </View>
  
 




    );
    }
};

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    fontSize:60,
    backgroundColor:"#d291bc"
    },

    container2:{
      
      },

    button:{
    fontSize:30,
    backgroundColor:"black",
    marginTop:20,
    marginLeft:10,
    color:"white",
    fontWeight:"bold",
    borderWidth:2,
    padding:10,
    borderRadius:10
    
    },

    btns:{
      flex:1,
flexDirection:"row"
    },

    result: {
      backgroundColor:"white",
      marginBottom:20,
      textAlign:"center",
      color:"black",
      fontWeight:"bold",
      fontSize:30,
    },

    textnew: {
      textAlign:"center",
      color:"black",
      fontWeight:"bold",
      fontSize:20,
    }
    })

