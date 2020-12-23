import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DicegameScreen from '../screens/DicegameScreen';
import CurrencyConverterScreen from '../screens/CurrencyConverterScreen';
import ApiScreen from '../screens/ApiScreen';
import TicTacToeScreen from '../screens/TicTacToeScreen';
import TodoScreen from '../screens/TodoScreen';
import FlexScreen from '../screens/FlexScreen';


const MyNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: {
    screen: RegisterScreen
  },
  Dashboard: DashboardScreen,
  Dicegame:DicegameScreen,
  CurrencyConverter:CurrencyConverterScreen,
  Api:ApiScreen,
  TicTacToe:TicTacToeScreen,
  Todo:TodoScreen,
  Flex:FlexScreen

});

export default createAppContainer(MyNavigator);
