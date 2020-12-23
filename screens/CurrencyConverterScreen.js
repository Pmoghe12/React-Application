import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Keyboard,StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity, Alert ,TouchableWithoutFeedback, ImageBackground} from 'react-native';

const currencyPerRupee =
{
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.099,
  AUD:0.019,
  NZD:0.020,
  CAD:0.018,
  JPY:1.42,
  CHF:0.012,
  ZAR:0.22
}



export default class CurrencyConverterScreen extends React.Component{

  static navigationOptions = {
    title:"Dashboard",
  };

  constructor(props){
    super(props);
      this.state ={
        inputValue:"",
        resultValue :"0.00"
      }
  }
  buttonPressed = (currency) =>{
    if(this.state.inputValue ==="")
    {
       Alert.alert("Enter Some Value In "+currency);
    }
    else
    {
      let result = parseFloat(this.state.inputValue)  * currencyPerRupee[currency];
      this.setState({resultValue:result.toFixed(3)})
    }
  }
  render(){

  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>

<View style={styles.txv}>
    <TouchableOpacity
  onPress={()=>this.props.navigation.push("Dashboard")}
  >
  <Text style={styles.txt}>X</Text>
  </TouchableOpacity>
  </View>

    <Image source={require("../assets/cc.png")} style={styles.image} /> 
      <View style={styles.screenview}>
       

          <View style={styles.resultcontainer}>
            <Text style={styles.resultValue}>{this.state.resultValue}</Text>
          </View>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.input}
              selectionColor="white"
              keyboardType="number-pad"
              placeholder="Enter Amount"
              placeholderTextColor="white"
              value={this.state.inputValue}
              onChangeText={
                inputValue => this.setState({
                  inputValue
                })
              }
            />
          </View>
          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("DOLLAR");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>$</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("EURO");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>EURO</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("POUND");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>POUND</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("AUD");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>Australian Dollar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("NZD");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>New Zealand Dollar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("CAD");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>Canadian Dollar</Text>
            </TouchableOpacity>
            
          </View>

          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("JPY");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>Yen</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("CHF");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>Swiss Franc</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("ZAR");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>South African Rand</Text>
            </TouchableOpacity>
            
          </View>
 </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );

}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
    alignItems:"center",
  },

  image:{
    marginTop:20,
width:100,
height:100
  },

  txt:{
color:"red",
    fontWeight:"bold",
    fontSize:30,
    marginLeft:350,
  },


    

  screenview:{
    marginTop:20,
    
  },
  resultcontainer:{
    height:70,
    marginTop:20,
    justifyContent:"center",
    borderColor:"#c1c1c1",
    borderWidth:2,
    backgroundColor:"#0A79DE",
    alignItems:"center",
  

  },
  resultValue:{
fontSize:30,
fontWeight:"bold",
color:"white"
  },
  inputcontainer:{
    height:70,
    backgroundColor:"#0A79DE",
    marginTop:10,
    borderWidth:2,
    alignItems:"center",
    borderColor:"#c1c1c1",
    justifyContent:"center",
    color:"white"

  },
  input:{
    color:"white",
    fontSize:30

  },
  converterButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2,
    alignItems:"center",
    textAlign:"center"
  },
  buttonConverter:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
    borderColor:"#c1c1c1",
    borderWidth:2,
    width:"33.33%",
    backgroundColor:"#0A79DE"

  },
  textButtonConverter:
  {
    color:"#fff",
    fontSize:20,
    fontWeight:"bold",
    alignItems:"center",
    textAlign:"center"

  }


});